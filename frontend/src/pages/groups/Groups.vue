<template>
  <b-overlay
    :show="working"
    rounded="sm"
  >
    <!-- Need to add height inherit because Vue 2 don't support multiple root ele -->
    <div style="height: inherit">
      <div
        class="body-content-overlay"
        :class="{'show': mqShallShowLeftSidebar}"
        @click="mqShallShowLeftSidebar = false"
      />
      <div class="todo-app-list">

        <!-- App Searchbar Header -->
        <div class="app-fixed-search d-flex align-items-center">

          <!-- Toggler -->
          <div class="sidebar-toggle d-block d-lg-none ml-1">
            <feather-icon
              icon="MenuIcon"
              size="21"
              class="cursor-pointer"
              @click="mqShallShowLeftSidebar = true"
            />
          </div>

          <!-- Searchbar -->
          <div class="d-flex align-content-center justify-content-between w-100">
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon
                  icon="SearchIcon"
                  class="text-muted"
                />
              </b-input-group-prepend>
              <b-form-input
                :value="searchQuery"
                placeholder="Search group"
                @input="updateRouteQuery"
              />
            </b-input-group>
          </div>

          <!-- Dropdown -->
          <div class="dropdown" />
        </div>

        <!-- Todo List -->
        <vue-perfect-scrollbar
          :settings="perfectScrollbarSettings"
          class="todo-task-list-wrapper list-group scroll-area"
        >
          <draggable
            v-model="contacts"
            handle=".draggable-task-handle"
            tag="ul"
            class="todo-task-list media-list"
          >
            <li
              v-for="(item, i) in contacts"
              :key="i"
              class="todo-item"
              :class="{ 'completed': item.isCompleted }"
            >
              <feather-icon
                icon="MoreVerticalIcon"
                class="draggable-task-handle d-inline"
              />
              <div class="todo-title-wrapper">
                <div class="todo-title-area">
                  <div class="title-wrapper">
                    <b-form-checkbox
                      :checked="item.isCompleted"
                      @click.native.stop
                      @change="updateGroupIsCompleted(item)"
                    />
                    <span class="todo-title">{{ item.title }}</span>
                  </div>
                </div>
                <div class="todo-item-action">
                  <div class="badge-wrapper mr-1">
                    <b-badge
                      v-for="tag in item.tags"
                      :key="tag"
                      pill
                      :variant="`light-${resolveTagVariant(tag)}`"
                      class="text-capitalize"
                    >
                      {{ tag }}
                    </b-badge>
                  </div>
                  <small class="text-nowrap text-muted mr-1">{{ formatDate(item.dueDate, { month: 'short', day: 'numeric'}) }}</small>
                  <b-avatar
                    v-if="item.assignee"
                    size="32"
                    :src="item.assignee.avatar"
                    :variant="`light-${resolveAvatarVariant(item.tags)}`"
                    :text="avatarText(item.assignee.fullName)"
                  />
                  <b-avatar
                    v-else
                    size="32"
                    variant="light-secondary"
                  >
                    <feather-icon
                      icon="UserIcon"
                      size="16"
                    />
                  </b-avatar>
                </div>
              </div>

            </li>
          </draggable>
          <div
            class="no-results"
            :class="{'show': !contacts.length}"
          >
            <h5>No Contacts Found</h5>
          </div>
        </vue-perfect-scrollbar>
      </div>

      <!-- Group Handler -->
      <group-handler-sidebar
        v-model="isGroupHandlerSidebarActive"
        :group="group"
        :clear-group-data="clearGroupData"
        :working="working"
        :error-message="errorMessage"
        @remove-group="removeGroup"
        @add-group="addGroup"
        @update-group="updateGroup"
      />

      <!-- Sidebar -->
      <portal to="content-renderer-sidebar-left">
        <group-left-sidebar
          :groups="groups"
          :is-group-handler-sidebar-active.sync="isGroupHandlerSidebarActive"
          :class="{'show': mqShallShowLeftSidebar}"
          @handle-group-click="handleGroupClick"
          @close-left-sidebar="mqShallShowLeftSidebar = false"
        />
      </portal>
    </div>
  </b-overlay>
</template>

<script>
import {
  ref, watch, computed, onUnmounted,
} from '@vue/composition-api'
import {
  BFormInput, BInputGroup, BInputGroupPrepend,
  BFormCheckbox, BBadge, BAvatar, BOverlay,
} from 'bootstrap-vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import draggable from 'vuedraggable'
import { formatDate, avatarText } from '@core/utils/filter'
import { useRouter } from '@core/utils/utils'
import { useResponsiveAppLeftSidebarVisibility } from '@core/comp-functions/ui/app'
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '@/store'
import GroupLeftSidebar from './GroupLeftSidebar.vue'
import groupModule from './groupModule'
import GroupHandlerSidebar from './GroupHandlerSidebar.vue'

export default {
  components: {
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BFormCheckbox,
    BBadge,
    BAvatar,
    draggable,
    VuePerfectScrollbar,
    BOverlay,

    // App SFC
    GroupLeftSidebar,
    GroupHandlerSidebar,
  },
  data() {
    return {
      contacts: [],
    }
  },
  setup() {
    const working = ref(false)
    const errorMessage = ref('')
    const toast = useToast()

    const GROUP_APP_STORE_MODULE_NAME = 'group'

    // Register module
    if (!store.hasModule(GROUP_APP_STORE_MODULE_NAME)) store.registerModule(GROUP_APP_STORE_MODULE_NAME, groupModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(GROUP_APP_STORE_MODULE_NAME)) store.unregisterModule(GROUP_APP_STORE_MODULE_NAME)
    })

    const { route, router } = useRouter()
    const routeQuery = computed(() => route.value.query.q)
    const routeParams = computed(() => route.value.params)
    watch(routeParams, () => {
      // eslint-disable-next-line no-use-before-define
      fetchGroups()
    })

    const isGroupHandlerSidebarActive = ref(false)

    const groups = ref([])

    const blankGroup = {
      id: null,
      name: '',
      description: '',
    }
    const group = ref(JSON.parse(JSON.stringify(blankGroup)))
    const clearGroupData = () => {
      group.value = JSON.parse(JSON.stringify(blankGroup))
    }

    const addGroup = val => {
      working.value = true
      errorMessage.value = ''
      store.dispatch('group/addGroup', val)
        .then(() => {
          // eslint-disable-next-line no-use-before-define
          fetchGroups()
          working.value = false
          isGroupHandlerSidebarActive.value = false
        })
        .catch(e => {
          console.log(e.response.data)
          working.value = false
          errorMessage.value = 'could not create group'
        })
    }
    const updateGroup = groupData => {
      working.value = true
      errorMessage.value = ''
      store.dispatch('group/updateGroup', { group: groupData })
        .then(rs => {
          // eslint-disable-next-line no-use-before-define
          fetchGroups()
          working.value = false
          isGroupHandlerSidebarActive.value = false
          const { slug } = rs.data.group
          if (slug !== groupData.slug) {
            router.push({ name: 'groups-item', params: { slug } })
          }
        })
        .catch(e => {
          console.log(e.response.data)
          working.value = false
          errorMessage.value = 'could not save group'
        })
    }
    const removeGroup = () => {
      working.value = true
      store.dispatch('group/removeGroup', { id: group.value.id })
        .then(() => {
          // eslint-disable-next-line no-use-before-define
          fetchGroups()
          working.value = false
          isGroupHandlerSidebarActive.value = false
          router.push({ name: 'groups' })
        })
        .catch(e => {
          console.log(e.response.data)
          working.value = false
          const error = 'could not save group'
          toast({
            component: ToastificationContent,
            props: {
              title: error,
              icon: 'AlertTriangleIcon',
              variant: 'danger',
            },
          })
        })
    }

    const perfectScrollbarSettings = {
      maxScrollbarLength: 150,
    }

    const resolveTagVariant = tag => {
      if (tag === 'team') return 'primary'
      if (tag === 'low') return 'success'
      if (tag === 'medium') return 'warning'
      if (tag === 'high') return 'danger'
      if (tag === 'update') return 'info'
      return 'primary'
    }

    const resolveAvatarVariant = tags => {
      if (tags.includes('high')) return 'primary'
      if (tags.includes('medium')) return 'warning'
      if (tags.includes('low')) return 'success'
      if (tags.includes('update')) return 'danger'
      if (tags.includes('team')) return 'info'
      return 'primary'
    }

    // Search Query
    const searchQuery = ref(routeQuery.value)
    watch(routeQuery, val => {
      searchQuery.value = val
    })
    // eslint-disable-next-line no-use-before-define
    watch([searchQuery], () => fetchGroups())
    const updateRouteQuery = val => {
      const currentRouteQuery = JSON.parse(JSON.stringify(route.value.query))

      if (val) currentRouteQuery.q = val
      else delete currentRouteQuery.q

      router.replace({ name: route.name, query: currentRouteQuery })
    }

    const fetchGroups = () => {
      store.dispatch('group/fetchGroups', {
        q: searchQuery.value,
        filter: router.currentRoute.params.filter,
        tag: router.currentRoute.params.tag,
      })
        .then(response => {
          groups.value = response.data.data
        })
    }

    fetchGroups()

    const handleGroupClick = groupData => {
      group.value = groupData
      isGroupHandlerSidebarActive.value = true
    }

    // Single Group isCompleted update
    const updateGroupIsCompleted = groupData => {
      // eslint-disable-next-line no-param-reassign
      groupData.isCompleted = !groupData.isCompleted
      updateGroup(groupData)
    }

    const { mqShallShowLeftSidebar } = useResponsiveAppLeftSidebarVisibility()

    return {
      group,
      groups,
      removeGroup,
      addGroup,
      updateGroup,
      clearGroupData,
      searchQuery,
      fetchGroups,
      perfectScrollbarSettings,
      updateRouteQuery,

      // UI
      resolveTagVariant,
      resolveAvatarVariant,
      isGroupHandlerSidebarActive,

      // Click Handler
      handleGroupClick,

      // Filters
      formatDate,
      avatarText,

      // Single Group isCompleted update
      updateGroupIsCompleted,

      // Left Sidebar Responsive
      mqShallShowLeftSidebar,

      working,
      errorMessage,
    }
  },
}
</script>

<style lang="scss" scoped>
.draggable-task-handle {
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  visibility: hidden;
  cursor: move;

  .todo-task-list .todo-item:hover & {
    visibility: visible;
  }
}
</style>

<style lang="scss">
@import "~@core/scss/base/pages/app-todo.scss";
</style>

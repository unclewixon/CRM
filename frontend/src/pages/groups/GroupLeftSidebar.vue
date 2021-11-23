<template>
  <div class="sidebar-left">
    <div class="sidebar">
      <div class="sidebar-content todo-sidebar">
        <div class="todo-app-menu">
          <div class="add-task d-flex justify-content-between align-items-center">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              @click="$emit('update:is-group-handler-sidebar-active', true); $emit('close-left-sidebar')"
            >
              Add Group
            </b-button>
            <b-button
              v-if="item"
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="danger"
              @click="$emit('handle-group-click', item)"
            >
              Edit
              <feather-icon
                icon="EditIcon"
                size="16"
              />
            </b-button>
          </div>
          <vue-perfect-scrollbar
            :settings="perfectScrollbarSettings"
            class="sidebar-menu-list scroll-area"
          >
            <!-- Groups -->
            <b-list-group class="list-group-filters">
              <b-list-group-item
                v-for="(item, i) in groups"
                :key="i"
                :to="parseRoute(item.slug)"
                :active="isDynamicRouteActive(parseRoute(item.slug))"
                class="d-flex justify-content-between align-items-center"
                @click="$emit('close-left-sidebar')"
              >
                <span
                  class="align-text-bottom line-height-1"
                >{{ item.name }}</span>
                <b-badge
                  variant="primary"
                  pill
                >
                  {{ item.contact_count || 0 }}
                </b-badge>
              </b-list-group-item>
            </b-list-group>
          </vue-perfect-scrollbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from '@vue/composition-api'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import {
  BButton, BListGroup, BListGroupItem, BBadge,
} from 'bootstrap-vue'
import { isDynamicRouteActive, useRouter } from '@core/utils/utils'
import Ripple from 'vue-ripple-directive'
// import useJwt from '@/auth/jwt/useJwt'

export default {
  directives: {
    Ripple,
  },
  components: {
    BButton,
    BListGroup,
    BListGroupItem,
    BBadge,
    VuePerfectScrollbar,
  },
  props: {
    groups: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const { router } = useRouter()

    const item = ref(null)

    const fetchGroups = async () => {
      // const accessToken = useJwt.getToken()
      // const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` }
      // const response = await fetch(`${process.env.MIX_APP_URL}/groups`, { headers })
      // const data = await response.json()

      const { slug } = router.currentRoute.params
      if (slug) {
        const group = props.groups.find(g => g.slug === slug)
        item.value = group
      }
    }

    onMounted(() => {
      setTimeout(() => {
        fetchGroups()
      }, 1500)
    })

    watch(() => props.groups, () => {
      fetchGroups()
    })

    const perfectScrollbarSettings = {
      maxScrollbarLength: 60,
    }

    const parseRoute = param => ({ name: 'groups-item', params: { slug: param } })

    return {
      item,
      perfectScrollbarSettings,
      isDynamicRouteActive,
      parseRoute,
    }
  },
}
</script>

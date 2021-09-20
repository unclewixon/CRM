<template>

  <!-- Table Container Card -->
  <b-card
    no-body
  >
    <b-overlay
      :show="deleting"
      rounded="sm"
    >
      <div class="m-2">

        <!-- Table Top -->
        <b-row>

          <!-- Per Page -->
          <b-col
            cols="12"
            md="6"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>Entries</label>
            <v-select
              v-model="perPage"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block ml-50 mr-1"
            />
            <b-button
              id="toggle-btn"
              v-ripple.400="'rgba(113, 102, 240, 0.15)'"
              v-b-modal.modal-prevent-closing
              variant="primary"
            >
              Upload Contacts
            </b-button>
          </b-col>

          <!-- Search -->
          <b-col
            cols="12"
            md="6"
          >
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="searchQuery"
                class="d-inline-block mr-1"
                placeholder="Search..."
              />
            </div>
          </b-col>
        </b-row>

      </div>

      <b-table
        ref="refContactsTable"
        :items="fetchContacts"
        responsive
        :fields="tableColumns"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
        class="position-relative"
      >

        <!-- Column: Id -->
        <template #cell(id)="data">
          <b-link
            :to="{ name: 'contact-preview', params: { id: data.item.id }}"
            class="font-weight-bold"
          >
            #{{ data.value }}
          </b-link>
        </template>

        <!-- Column: Actions -->
        <template #cell(actions)="data">

          <div class="text-nowrap">
            <feather-icon
              :id="`invoice-row-${data.item.id}-send-icon`"
              icon="SendIcon"
              class="cursor-pointer"
              size="16"
            />
            <b-tooltip
              title="Send SMS"
              class="cursor-pointer"
              :target="`invoice-row-${data.item.id}-send-icon`"
            />

            <feather-icon
              :id="`invoice-row-${data.item.id}-preview-icon`"
              icon="EyeIcon"
              size="16"
              class="mx-1"
              @click="$router.push({ name: 'contact-view', params: { id: data.item.id }})"
            />
            <b-tooltip
              title="Preview Invoice"
              :target="`invoice-row-${data.item.id}-preview-icon`"
            />

            <!-- Dropdown -->
            <b-dropdown
              variant="link"
              toggle-class="p-0"
              no-caret
              :right="$store.state.appConfig.isRTL"
            >

              <template #button-content>
                <feather-icon
                  icon="MoreVerticalIcon"
                  size="16"
                  class="align-middle text-body"
                />
              </template>
              <b-dropdown-item :to="{ name: 'contact-edit', params: { id: data.item.id } }">
                <feather-icon icon="EditIcon" />
                <span class="align-middle ml-50">Edit</span>
              </b-dropdown-item>
              <b-dropdown-item @click.prevent="removeContact(data.item.id)">
                <feather-icon icon="TrashIcon" />
                <span class="align-middle ml-50">Delete</span>
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </template>

      </b-table>
      <div class="mx-2 mb-2">
        <b-row>

          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <span class="text-muted">Showing {{ dataMeta.from }} to {{ dataMeta.to }} of {{ dataMeta.of }} entries</span>
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-end"
          >

            <b-pagination
              v-model="currentPage"
              :total-rows="totalContacts"
              :per-page="perPage"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
            >
              <template #prev-text>
                <feather-icon
                  icon="ChevronLeftIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />
              </template>
            </b-pagination>

          </b-col>

        </b-row>
      </div>
    </b-overlay>

    <!-- modal -->
    <b-modal
      id="modal-prevent-closing"
      ref="my-modal"
      title="Upload Contacts"
      ok-title="Submit"
      cancel-variant="outline-secondary"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <b-overlay
        :show="show"
        rounded="sm"
      >
        <b-form>
          <b-form-file
            v-model="file"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
          />
        </b-form>
      </b-overlay>
    </b-modal>
  </b-card>

</template>

<script>
import {
  BCard, BRow, BCol, BFormInput, BButton, BTable, BLink, BOverlay,
  BDropdown, BDropdownItem, BPagination, BTooltip, BModal, VBModal, BForm, BFormFile,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { onUnmounted } from '@vue/composition-api'
import Ripple from 'vue-ripple-directive'
import store from '@/store'
import useContacts from './useContacts'
import contactModule from '../contactModule'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BLink,
    BDropdown,
    BDropdownItem,
    BPagination,
    BTooltip,
    BModal,
    BForm,
    BFormFile,
    BOverlay,

    vSelect,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      file: null,
      show: false,
      deleting: false,
    }
  },
  setup() {
    const CONTACT_APP_STORE_MODULE_NAME = 'app-contact'

    // Register module
    if (!store.hasModule(CONTACT_APP_STORE_MODULE_NAME)) store.registerModule(CONTACT_APP_STORE_MODULE_NAME, contactModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(CONTACT_APP_STORE_MODULE_NAME)) store.unregisterModule(CONTACT_APP_STORE_MODULE_NAME)
    })

    const statusOptions = [
      'Downloaded',
      'Draft',
      'Paid',
      'Partial Payment',
      'Past Due',
    ]

    const {
      fetchContacts,
      tableColumns,
      perPage,
      currentPage,
      totalContacts,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refContactsTable,

      statusFilter,

      refetchData,
      uploadContacts,
      deleteContact,

      resolveInvoiceStatusVariantAndIcon,
      resolveClientAvatarVariant,
    } = useContacts()

    return {
      fetchContacts,
      tableColumns,
      perPage,
      currentPage,
      totalContacts,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refContactsTable,

      statusFilter,

      refetchData,
      uploadContacts,
      deleteContact,

      statusOptions,

      resolveInvoiceStatusVariantAndIcon,
      resolveClientAvatarVariant,
    }
  },
  methods: {
    resetModal() {
      this.file = null
    },
    removeContact(id) {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger ml-1',
        },
        buttonsStyling: false,
      }).then(result => {
        if (result.value) {
          this.doDelete(id)
        }
      })
    },
    doDelete(id) {
      this.deleting = true
      this.deleteContact(id, () => {
        this.deleting = false
        this.$swal({
          icon: 'success',
          title: 'Deleted!',
          text: 'contact has been deleted.',
          customClass: {
            confirmButton: 'btn btn-success',
          },
        })
      }, () => {
        this.deleting = false
      })
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      if (!this.file) {
        return
      }
      // Upload

      this.show = true
      const formData = new FormData()
      formData.append('file', this.file)

      this.uploadContacts(formData, () => {
        this.refetchData()
        this.$nextTick(() => {
          this.$refs['my-modal'].toggle('#toggle-btn')
        })
        this.show = false
      }, () => {
        this.show = false
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}

.invoice-filter-select {
  min-width: 190px;

  ::v-deep .vs__selected-options {
    flex-wrap: nowrap;
  }

  ::v-deep .vs__selected {
    width: 100px;
  }
}
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>

import { ref, watch, computed } from '@vue/composition-api'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '@/store'

export default function useContacts() {
  // Use toast
  const toast = useToast()

  const refContactsTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'id', label: 'id', sortable: true },
    { key: 'emr_id', sortable: true },
    { key: 'firstname', sortable: true },
    { key: 'surname', sortable: true },
    { key: 'email', sortable: false },
    { key: 'phone_number', sortable: false },
    // { key: 'dob', sortable: false },
    // { key: 'scheme', sortable: true },
    // { key: 'gender', sortable: true },
    { key: 'actions' },
  ]
  const perPage = ref(10)
  const totalContacts = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const statusFilter = ref(null)

  const dataMeta = computed(() => {
    const localItemsCount = refContactsTable.value ? refContactsTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalContacts.value,
    }
  })

  const refetchData = () => {
    refContactsTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, statusFilter], () => {
    refetchData()
  })

  const fetchContacts = (ctx, callback) => {
    store
      .dispatch('app-contact/fetchContacts', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
        status: statusFilter.value,
      })
      .then(response => {
        const { data, meta } = response.data

        callback(data)
        totalContacts.value = meta.total
      })
      .catch(e => {
        console.log(e)
        toast({
          component: ToastificationContent,
          props: {
            title: "Error fetching contacts' list",
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  const uploadContacts = (data, callback, callback2) => {
    store
      .dispatch('app-contact/uploadContacts', data)
      .then(rs => {
        callback()
        const { total } = rs.data
        toast({
          component: ToastificationContent,
          props: {
            title: `${total} contacts uploaded`,
            icon: 'CheckIcon',
            variant: 'success',
          },
        })
      })
      .catch(e => {
        console.log(e.response)
        callback2()
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error uploading contacts',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  const deleteContact = (id, callback, callback2) => {
    store
      .dispatch('app-contact/deleteContact', id)
      .then(() => {
        callback()
        refetchData()
      })
      .catch(e => {
        console.log(e.response)
        callback2()
        toast({
          component: ToastificationContent,
          props: {
            title: "Error deleting contact' list",
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolveInvoiceStatusVariantAndIcon = status => {
    if (status === 'Partial Payment') return { variant: 'warning', icon: 'PieChartIcon' }
    if (status === 'Paid') return { variant: 'success', icon: 'CheckCircleIcon' }
    if (status === 'Downloaded') return { variant: 'info', icon: 'ArrowDownCircleIcon' }
    if (status === 'Draft') return { variant: 'primary', icon: 'SaveIcon' }
    if (status === 'Sent') return { variant: 'secondary', icon: 'SendIcon' }
    if (status === 'Past Due') return { variant: 'danger', icon: 'InfoIcon' }
    return { variant: 'secondary', icon: 'XIcon' }
  }

  const resolveClientAvatarVariant = status => {
    if (status === 'Partial Payment') return 'primary'
    if (status === 'Paid') return 'danger'
    if (status === 'Downloaded') return 'secondary'
    if (status === 'Draft') return 'warning'
    if (status === 'Sent') return 'info'
    if (status === 'Past Due') return 'success'
    return 'primary'
  }

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

    resolveInvoiceStatusVariantAndIcon,
    resolveClientAvatarVariant,

    refetchData,
    uploadContacts,
    deleteContact,
  }
}

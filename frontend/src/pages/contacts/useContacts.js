import { ref, computed } from '@vue/composition-api'

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
    { key: 'checkbox', label: '' },
    { key: 'emr_id', label: 'Hosp. No', sortable: false },
    { key: 'name', sortable: false },
    { key: 'email', sortable: false },
    { key: 'phone_number', label: 'Phone', sortable: false },
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

  // watch([currentPage, perPage, searchQuery, statusFilter], () => {
  //   refetchData()
  // })

  const fetchContacts = (ctx, callback, callback2) => {
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
        callback2()
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

  const fetchAllContacts = (ctx, callback) => {
    store
      .dispatch('app-contact/fetchContacts', { option: 'all' })
      .then(response => callback(response.data.data))
      .catch(e => {
        console.log(e)
      })
  }

  const fetchNext = (pageNumber, callback, callback2) => {
    currentPage.value = pageNumber
    fetchContacts(null, callback, callback2)
  }

  const fetchSearch = (q, callback, callback2) => {
    searchQuery.value = q
    fetchContacts(null, callback, callback2)
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
        console.log(e)
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
        console.log(e)
        callback2()
        toast({
          component: ToastificationContent,
          props: {
            title: "Error deleting contact's list",
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  const editContact = (data, callback, callback2) => {
    store
      .dispatch('app-contact/editContact', data)
      .then(() => {
        callback()
      })
      .catch(e => {
        console.log(e)
        callback2()
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error could not save conact',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  const send = (data, callback) => {
    store
      .dispatch('app-contact/sendSMS', data)
      .then(() => {
        callback()
      })
      .catch(e => {
        console.log(e.response)
        const error = e.response?.data?.message || 'Error could not schedule sms'
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

  return {
    fetchContacts,
    tableColumns,
    perPage,
    currentPage,
    totalContacts,
    dataMeta,
    perPageOptions,
    sortBy,
    isSortDirDesc,
    refContactsTable,

    statusFilter,
    refetchData,
    uploadContacts,
    deleteContact,
    send,
    editContact,

    fetchNext,
    fetchSearch,
    fetchAllContacts,
  }
}

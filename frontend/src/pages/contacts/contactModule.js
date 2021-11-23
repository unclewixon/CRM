import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchContacts(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get('/contacts', { params: queryParams })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchContact(ctx, id) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/contacts/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    editContact(ctx, data) {
      return new Promise((resolve, reject) => {
        const { id, ...contact } = data
        axios
          .patch(`/contacts/${id}`, contact)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    deleteContact(ctx, param) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`/contacts/${param}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    uploadContacts(ctx, data) {
      return new Promise((resolve, reject) => {
        axios
          .post('/contacts-batch', data, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    sendSMS(ctx, data) {
      return new Promise((resolve, reject) => {
        axios
          .post('/send-bulk-message', data)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}

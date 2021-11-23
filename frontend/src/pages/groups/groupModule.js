import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchGroups(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get('/groups', { params: payload })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addGroup(ctx, groupData) {
      return new Promise((resolve, reject) => {
        axios
          .post('/groups', { ...groupData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    updateGroup(ctx, { group }) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`/groups/${group.id}`, { ...group })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    removeGroup(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`/groups/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}

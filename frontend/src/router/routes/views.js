export default [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/pages/Dashboard.vue'),
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/pages/contacts/Contacts.vue'),
  },
  {
    path: '/contact-preview',
    name: 'contact-preview',
    component: () => import('@/pages/contacts/Contacts.vue'),
  },
  {
    path: '/contact-edit/:id',
    name: 'contact-edit',
    component: () => import('@/pages/contacts/ContactEdit.vue'),
  },
  {
    path: '/groups',
    name: 'groups',
    component: () => import('@/pages/groups/Groups.vue'),
  },
]

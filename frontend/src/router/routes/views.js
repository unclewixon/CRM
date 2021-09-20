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
    path: '/send-sms',
    name: 'send-sms',
    component: () => import('@/pages/contacts/SendSMS.vue'),
  },
]

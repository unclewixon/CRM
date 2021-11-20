<template>
  <section id="dashboard-ecommerce">
    <b-row>
      <b-col
        xl="4"
        md="6"
      >
        <bundle-table :table-data="units" />
      </b-col>
      <b-col
        xl="8"
        md="6"
      >
        <statistics :data="analytics" />
      </b-col>
    </b-row>
    <b-row>
      <b-col
        lg="4"
        md="6"
      >
        <bundle-purchase
          :units="units"
          @update="addTransaction"
        />
      </b-col>
      <b-col lg="8">
        <transaction-table
          :table-data="recharges"
          :per-page="perPage"
          :total="total"
          :page="currentPage"
          @nextPage="nextPage"
        />
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import Statistics from './dashboard/Statistics.vue'
import TransactionTable from './dashboard/TransactionTable.vue'
import BundleTable from './dashboard/BundleTable.vue'
import BundlePurchase from './dashboard/BundlePurchase.vue'

export default {
  components: {
    BRow,
    BCol,

    Statistics,
    TransactionTable,
    BundleTable,
    BundlePurchase,
  },
  data() {
    return {
      units: [],
      analytics: [],

      recharges: [],
      perPage: 10,
      currentPage: 1,
      total: 0,
    }
  },
  created() {
    // Units
    this.$http.get('/units')
      .then(response => { this.units = response.data.data })

    // Transactions
    this.getRecharges(this.currentPage)

    // Analytics
    this.getAnalytics()
  },
  methods: {
    addTransaction(item) {
      this.recharges = [item, ...this.recharges]
      this.total += 1
      this.getAnalytics()
    },
    getAnalytics() {
      this.$http.get('/sms-analytics')
        .then(response => { this.analytics = response.data.result })
    },
    getRecharges(page) {
      this.$http.get(`/recharges?perPage=${this.perPage}&page=${page}`)
        .then(response => {
          const { total, data } = response.data
          this.total = total
          this.recharges = data
          this.currentPage = response.data.current_page
        })
    },
    nextPage(page) {
      this.getRecharges(page)
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-ecommerce.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
</style>

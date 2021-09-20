<template>
  <div>
    <b-row>
      <b-col
        md="4"
        sm="6"
      >
        <statistic-card-with-line-chart
          icon="UserCheckIcon"
          :statistic="contacts.total || 0"
          statistic-title="Contacts"
          :chart-data="contacts.series"
        />
      </b-col>
      <b-col
        md="4"
        sm="6"
      >
        <statistic-card-with-line-chart
          icon="MessageCircleIcon"
          color="success"
          :statistic="sms.total || 0"
          statistic-title="SMS Sent"
          :chart-data="sms.series"
        />
      </b-col>
      <b-col
        md="4"
        sm="6"
      >
        <statistic-card-with-line-chart
          icon="CheckCircleIcon"
          color="success"
          :statistic="delivered.total || 0"
          statistic-title="SMS Delivered"
          :chart-data="delivered.series"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import StatisticCardWithLineChart from '@core/components/statistics-cards/StatisticCardWithLineChart.vue'
import { kFormatter } from '@core/utils/filter'

export default {
  components: {
    BRow,
    BCol,
    StatisticCardWithLineChart,
  },
  data() {
    return {
      contacts: {},
      sms: {},
      delivered: {},
    }
  },
  created() {
    // Contacts
    this.$http.get('/contacts-analytics')
      .then(response => { this.contacts = response.data.result })

    // Active Users
    this.$http.get('/sms-analytics')
      .then(response => { this.sms = response.data.result })

    // Active Users
    this.$http.get('/delivered-analytics')
      .then(response => { this.delivered = response.data.result })
  },
  methods: {
    kFormatter,
  },
}
</script>

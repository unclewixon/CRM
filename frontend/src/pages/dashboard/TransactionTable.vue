<template>
  <b-card
    v-if="tableData"
    no-body
    class="card-company-table"
  >
    <b-table
      id="recharge-table"
      :items="tableData"
      responsive
      :fields="fields"
      class="mb-0"
      show-empty
    >
      <template #empty="">
        <div class="text-center">
          No transactions found!
        </div>
      </template>

      <!-- date -->
      <template #cell(created_at)="data">
        {{ data.item.created_at | moment('DD-MMM-YYYY h:mma') }}
      </template>

      <!-- number -->
      <template #cell(number)="data">
        {{ data.item.number | separator }}
      </template>

      <!-- price -->
      <template #cell(amount)="data">
        ₦{{ (data.item.transaction && data.item.transaction.amount ? data.item.transaction.amount : 0) | numeral('0,0.00') }}
      </template>

      <!-- price -->
      <template #cell(status)="data">
        <b-badge
          :variant="data.item.transaction ? (data.item.transaction.status === 'failed' ? 'danger' : (data.item.transaction.status === 'ongoing' ? 'secondary' : 'success')) : 'danger'"
        >
          {{ data.item.transaction && data.item.transaction.status ? data.item.transaction.status : 'failed' }}
        </b-badge>
      </template>
    </b-table>
    <b-col
      cols="12"
      class="d-flex align-items-center justify-content-center col-12 my-2"
    >
      <b-pagination
        v-model="page"
        :total-rows="total"
        :per-page="perPage"
        aria-controls="recharge-table"
        first-number
        last-number
        class="mb-0 mt-1 mt-sm-0"
        prev-class="prev-item"
        next-class="next-item"
        @page-click="openPage"
      />
    </b-col>
  </b-card>
</template>

<script>
import {
  BCard, BTable, BBadge, BPagination, BCol,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BTable,
    BBadge,
    BPagination,
    BCol,
  },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    total: {
      type: Number,
      default: 0,
    },
    page: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      fields: [
        { key: 'created_at', label: 'DATE' },
        { key: 'number', label: '# UNITS' },
        { key: 'amount', label: 'AMOUNT' },
        { key: 'status', label: 'STATUS' },
      ],
    }
  },
  methods: {
    openPage(bvEvent, page) {
      bvEvent.preventDefault()
      this.$emit('nextPage', page)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@core/scss/base/bootstrap-extended/include';
@import '~@core/scss/base/components/variables-dark';

.card-company-table ::v-deep td .b-avatar.badge-light-company {
  .dark-layout & {
    background: $theme-dark-body-bg !important;
  }
}
</style>

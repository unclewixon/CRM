<template>
  <b-card
    v-if="tableData"
    no-body
    class="card-company-table"
  >
    <b-table
      :items="tableData"
      responsive
      :fields="fields"
      class="mb-0"
    >
      <!-- minimum -->
      <template #cell(unit)="data">
        {{ data.item.unit }}
      </template>

      <!-- price -->
      <template #cell(cost)="data">
        {{ `₦${data.item.cost}` }}
      </template>
    </b-table>
  </b-card>
</template>

<script>
import { BCard, BTable } from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BTable,
  },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      fields: [
        { key: 'name', label: 'BUNDLE' },
        { key: 'unit', label: 'MINIMUM' },
        { key: 'cost', label: 'PRICE' },
      ],
    }
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

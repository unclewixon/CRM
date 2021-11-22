<template>
  <b-overlay
    :show="verifying"
    rounded="sm"
  >
    <b-card
      no-body
      class="card-payment"
    >
      <b-card-header>
        <b-card-title>Purchase Units</b-card-title>
      </b-card-header>
      <b-card-body>
        <!-- form -->
        <b-row>
          <b-col cols="12">
            <b-input-group class="input-group-merge mb-1">
              <b-input-group-prepend is-text>
                <feather-icon icon="TrendingUpIcon" />
              </b-input-group-prepend>
              <b-form-input
                v-model="unit"
                placeholder="Number of Units"
                @input="changeUnits"
              />
            </b-input-group>
          </b-col>

          <b-col cols="12">
            <b-input-group
              prepend="₦"
              class="mb-2"
            >
              <b-form-input
                v-model="unitsAmount"
                placeholder="Amount"
                readonly
              />
            </b-input-group>
          </b-col>

          <hr class="mb-2">
          <b-col
            cols="12"
            class="ecommerce-application"
          >
            <div class="checkout-options">
              <div class="price-details">
                <h6 class="price-title">
                  Price Details
                </h6>
                <ul class="list-unstyled">
                  <li class="price-detail">
                    <div class="detail-title">
                      SMS Units
                    </div>
                    <div class="detail-amt">
                      {{ unit === '' ? 0 : unit | separator }}
                    </div>
                  </li>
                  <li class="price-detail">
                    <div class="detail-title">
                      Amount
                    </div>
                    <div class="detail-amt discount-amt text-success">
                      ₦{{ unitsAmount | numeral('0,0.00') }}
                    </div>
                  </li>
                  <li
                    v-for="(item, i) in userData.charge_unpaid"
                    :key="i"
                    class="price-detail"
                  >
                    <div class="detail-title">
                      Monthly Service ({{ item.month }})
                    </div>
                    <div class="detail-amt">
                      ₦25,000.00
                    </div>
                  </li>
                  <li class="price-detail">
                    <div class="detail-title">
                      5% VAT
                    </div>
                    <div class="detail-amt">
                      INCLUSIVE
                    </div>
                  </li>
                </ul>
                <hr>
                <ul class="list-unstyled">
                  <li class="price-detail">
                    <div class="detail-title detail-total">
                      Total
                    </div>
                    <div class="detail-amt font-weight-bolder">
                      ₦{{ amount | numeral('0,0.00') }}
                    </div>
                  </li>
                </ul>
                <paystack
                  v-if="amount > 0"
                  :amount="amount * 100"
                  :email="userData.email || ''"
                  :paystackkey="paystackkey"
                  :reference="reference"
                  :callback="callback"
                  :close="close"
                  :embed="false"
                >
                  Make Payment
                </paystack>
              </div>

            </div>
          </b-col>
        </b-row>
      <!--/ form -->
      </b-card-body>
    </b-card>
  </b-overlay>
</template>

<script>
import {
  BCard, BCol, BCardHeader, BCardTitle, BCardBody, BInputGroup, BInputGroupPrepend, BFormInput, BRow, BOverlay,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { useToast } from 'vue-toastification/composition'
import paystack from 'vue-paystack'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    BCard,
    BCol,
    BCardHeader,
    BCardTitle,
    BCardBody,
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BRow,
    BOverlay,

    paystack,
  },
  directives: {
    Ripple,
  },
  props: {
    units: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      unit: '',
      unitsAmount: 0,
      amount: 0,
      paystackkey: process.env.MIX_PAYSTACK_PUBLIC_KEY,
      userData: JSON.parse(localStorage.getItem('userData')),
      reference: '',
      unitItem: null,
      verifying: false,
    }
  },
  setup() {
    const toast = useToast()

    const showToast = (message, type) => toast({
      component: ToastificationContent,
      props: {
        title: message,
        icon: 'AlertTriangleIcon',
        variant: type,
      },
    })

    return { showToast }
  },
  mounted() {
    this.reference = this.getReference()
  },
  methods: {
    changeUnits(val) {
      if (val === '') {
        this.unitItem = null
        this.unitsAmount = 0
        this.amount = 0
      } else {
        const allUnits = this.units.map(u => parseFloat(u.unit))
        const maxUnit = Math.max(...allUnits)
        const minUnit = Math.min(...allUnits)

        let a = null
        if (parseFloat(val) >= maxUnit) {
          a = this.units.find(u => parseFloat(u.unit) === maxUnit)
        } else if (parseFloat(val) <= minUnit) {
          a = this.units.find(u => parseFloat(u.unit) === minUnit)
        } else {
          const left = this.units.filter(u => u.unit !== minUnit && u.unit !== maxUnit)
          const { unit } = left
          if (parseFloat(val) >= unit) {
            a = this.units.find(u => parseFloat(u.unit) === unit)
          } else {
            a = this.units.find(u => parseFloat(u.unit) === minUnit)
          }
        }
        const pricing = a.cost
        const unitsAmount = parseFloat(val) * pricing
        const amount = unitsAmount + (this.userData.charge_unpaid.length * 25000)
        const vat = (5 * amount) / 100
        const totalAmount = amount + vat

        this.unitItem = a
        this.unitsAmount = unitsAmount
        this.amount = totalAmount
      }
    },
    getReference() {
      let text = ''
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 10; i++) { text += possible.charAt(Math.floor(Math.random() * possible.length)) }

      return `RF-${text}`
    },
    resetData(item, message, type) {
      console.log(item)
      if (item && item.transaction) {
        this.$emit('update', item)
      }

      this.verifying = false
      this.unit = ''
      this.unitItem = null
      this.unitsAmount = 0
      this.amount = 0
      this.showToast(message, type)
      this.reference = this.getReference()
    },
    callback(response) {
      this.verifying = true
      const data = {
        unit_id: this.unitItem.id, unit_number: this.unit, reference: response.trxref, service_charges: this.userData.charge_unpaid,
      }
      this.$http.post('/recharges', data).then(rs => {
        this.resetData(rs.data.recharge, 'payment successful!', 'success')
        if (this.userData.charge_unpaid.length > 0) {
          const user = { ...this.userData, charge_unpaid: [] }
          this.userData = user
          localStorage.setItem('userData', JSON.stringify(user))
        }
      }).catch(e => {
        console.log(e.response)
        this.resetData(null, 'payment failed!', 'danger')
      })
    },
    async close() {
      this.verifying = true
      const data = {
        unit_id: this.unitItem.id, unit_number: this.unit, reference: this.reference, service_charges: [],
      }
      this.$http.post('/recharges', data).then(rs => {
        this.resetData(rs.data.recharge, 'payment closed/failed!', 'danger')
      }).catch(e => {
        console.log(e.response)
        this.resetData(null, 'payment closed/failed!', 'danger')
      })
    },
  },
}
</script>

<style lang="scss">
@import '~@core/scss/base/pages/app-ecommerce.scss';
.payButton {
  font-weight: 500;
  box-shadow: none;
  border-color: #7367f0 !important;
  background-color: #7367f0 !important;
  text-align: center;
  border: 1px solid transparent;
  padding: 0.786rem 1.5rem;
  border-radius: 0.358rem;
  color: #fff;
  display: inline-block;
  vertical-align: middle;
  user-select: none;
  font-size: 1rem;
  line-height: 1;
  text-transform: none;

  &:hover {
    box-shadow: 0 8px 25px -8px #7367f0;
    text-decoration: none;
  }

  &:focus {
    background-color: #5e50ee !important;
    box-shadow: none;
  }
}
</style>

<template>
  <b-overlay
    :show="fetching || saving"
    rounded="sm"
  >
    <component :is="contactData === null && !fetching ? 'div' : 'b-card'">

      <!-- Alert: No item found -->
      <b-alert
        variant="danger"
        :show="contactData === null && !fetching"
      >
        <h4 class="alert-heading">
          Error fetching contact data
        </h4>
        <div class="alert-body">
          No contact found with this id. Check
          <b-link
            class="alert-link"
            :to="{ name: 'contacts'}"
          >
            Contacts' List
          </b-link>
          for other contacts.
        </div>
      </b-alert>

      <div v-if="contactData !== null && !fetching">

        <!-- Header: Personal Info -->
        <div class="d-flex">
          <feather-icon
            icon="UserIcon"
            size="19"
          />
          <h4 class="mb-0 ml-50">
            Contact Information
          </h4>
        </div>

        <!-- Form: Personal Info Form -->
        <b-form
          class="mt-1"
          @submit.prevent="saveContact"
        >
          <b-row>

            <!-- Field: EMR ID -->
            <b-col
              cols="12"
              md="6"
              lg="4"
            >
              <b-form-group
                label="EMR ID"
                label-for="emr_id"
              >
                <b-form-input
                  id="emr_id"
                  v-model="contactData.emr_id"
                />
              </b-form-group>
            </b-col>

            <!-- Field: First Name -->
            <b-col
              cols="12"
              md="6"
              lg="4"
            >
              <b-form-group
                label="First Name"
                label-for="first-name"
              >
                <b-form-input
                  id="first-name"
                  v-model="contactData.firstname"
                />
              </b-form-group>
            </b-col>

            <!-- Field: Surname -->
            <b-col
              cols="12"
              md="6"
              lg="4"
            >
              <b-form-group
                label="Surname"
                label-for="surname"
              >
                <b-form-input
                  id="surname"
                  v-model="contactData.surname"
                />
              </b-form-group>
            </b-col>

            <!-- Field: Mobile -->
            <b-col
              cols="12"
              md="6"
              lg="4"
            >
              <b-form-group
                label="Phone Number"
                label-for="mobile"
              >
                <b-form-input
                  id="mobile"
                  v-model="contactData.phone_number"
                />
              </b-form-group>
            </b-col>

            <!-- Field: Email -->
            <b-col
              cols="12"
              md="6"
              lg="4"
            >
              <b-form-group
                label="Email"
                label-for="email"
              >
                <b-form-input
                  id="email"
                  v-model="contactData.email"
                  type="email"
                />
              </b-form-group>
            </b-col>

            <!-- Field: Gender -->
            <b-col
              cols="12"
              md="6"
              lg="4"
            >
              <b-form-group
                label="Gender"
                label-for="gender"
                label-class="mb-1"
              >
                <b-form-radio-group
                  id="gender"
                  v-model="contactData.gender"
                  :options="genderOptions"
                  value="male"
                />
              </b-form-group>
            </b-col>

            <!-- Field: Birth Date -->
            <b-col
              cols="12"
              md="6"
              lg="4"
            >
              <b-form-group
                label="Birth Date"
                label-for="birth-date"
              >
                <flat-pickr
                  v-model="contactData.dob"
                  class="form-control"
                  :config="{ dateFormat: 'Y-m-d'}"
                  placeholder="DD-MM-YYYY"
                />
              </b-form-group>
            </b-col>

            <!-- Field: Scheme -->
            <b-col
              cols="12"
              md="6"
              lg="4"
            >
              <b-form-group
                label="Scheme"
                label-for="scheme"
              >
                <v-select
                  v-model="contactData.scheme"
                  :options="schemeOptions"
                  :clearable="false"
                  input-id="scheme"
                />
              </b-form-group>
            </b-col>

            <!-- Field: Address -->
            <b-col
              cols="12"
              md="6"
              lg="4"
            >
              <b-form-group
                label="Address"
                label-for="address"
              >
                <b-form-input
                  id="address"
                  v-model="contactData.address"
                />
              </b-form-group>
            </b-col>
          </b-row>

          <b-row class="mt-2">
            <b-col>
              <b-button
                variant="primary"
                class="mb-1 mb-sm-0 mr-0 mr-sm-1"
                :block="$store.getters['app/currentBreakPoint'] === 'xs'"
                type="submit"
              >
                Save Changes
              </b-button>
              <b-button
                variant="outline-secondary"
                :block="$store.getters['app/currentBreakPoint'] === 'xs'"
                @click="goBack"
              >
                Cancel
              </b-button>
            </b-col>
          </b-row>
        </b-form>
      </div>
    </component>
  </b-overlay>
</template>

<script>
import {
  BCard, BAlert, BLink, BOverlay,
  BRow, BCol, BForm, BFormGroup, BFormInput, BFormRadioGroup, BFormCheckboxGroup, BButton,
} from 'bootstrap-vue'
import { ref, onUnmounted } from '@vue/composition-api'
import flatPickr from 'vue-flatpickr-component'
import vSelect from 'vue-select'
import router from '@/router'
import store from '@/store'
import contactModule from './contactModule'
import useContacts from './useContacts'

export default {
  components: {
    BCard, BAlert, BLink, BOverlay, BRow, BCol, BForm, BFormGroup, flatPickr, BFormInput, vSelect, BFormRadioGroup, BFormCheckboxGroup, BButton,
  },
  data() {
    return {
      saving: false,
      schemeOptions: [
        { label: 'Private', value: 'private' },
      ],
    }
  },
  setup() {
    const contactData = ref(null)
    const fetching = ref(false)

    const CONTACT_APP_STORE_MODULE_NAME = 'app-contact'

    // Register module
    if (!store.hasModule(CONTACT_APP_STORE_MODULE_NAME)) store.registerModule(CONTACT_APP_STORE_MODULE_NAME, contactModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(CONTACT_APP_STORE_MODULE_NAME)) store.unregisterModule(CONTACT_APP_STORE_MODULE_NAME)
    })

    fetching.value = true
    store.dispatch('app-contact/fetchContact', router.currentRoute.params.id)
      .then(response => {
        contactData.value = response.data.data
        fetching.value = false
      })
      .catch(() => {
        fetching.value = false
      })

    const genderOptions = [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ]

    const { editContact } = useContacts()

    return {
      fetching,
      contactData,
      genderOptions,
      editContact,
    }
  },
  methods: {
    goBack() {
      router.push('/contacts')
    },
    saveContact() {
      this.saving = true
      this.editContact(this.contactData, () => {
        this.saving = false
        this.$swal({
          icon: 'success',
          title: 'Saved!',
          text: 'contact has been saved.',
        })
      }, () => {
        this.saving = false
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>

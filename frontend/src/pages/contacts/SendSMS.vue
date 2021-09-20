<template>
  <b-card>
    <!-- form -->
    <b-form @submit.prevent="sendSMS">
      <b-row>

        <!-- website -->
        <b-col md="6">
          <b-form-group
            label-for="sender-id"
            label="Sender ID"
          >
            <b-form-input
              id="website"
              v-model="sender_id"
              placeholder="Sender ID"
            />
          </b-form-group>
        </b-col>
        <!--/ website -->

        <!-- phone -->
        <b-col md="6">
          <b-form-group
            label-for="phone"
            label="Phone"
          >
            <b-form-input
              id="phone"
              v-model="phone"
              placeholder="Phone number"
            />
          </b-form-group>
        </b-col>
        <!-- phone -->

        <!-- bio -->
        <b-col cols="12">
          <b-form-group
            label="Message"
            label-for="message"
          >
            <b-form-textarea
              id="bio-area"
              v-model="message"
              rows="4"
              placeholder="Your message here..."
            />
          </b-form-group>
        </b-col>
        <!--/ bio -->

        <b-col cols="12">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mt-1 mr-1"
            type="submit"
          >
            Send
          </b-button>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="reset"
            class="mt-1"
            variant="outline-secondary"
            @click.prevent="resetForm"
          >
            Reset
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
import {
  BButton, BForm, BFormGroup, BFormInput, BRow, BCol, BCard, BFormTextarea,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

// eslint-disable-next-line import/no-extraneous-dependencies
import 'cleave.js/dist/addons/cleave-phone.us'

export default {
  components: {
    BButton,
    BForm,
    BFormGroup,
    BFormInput,
    BRow,
    BCol,
    BCard,
    BFormTextarea,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      sender_id: '',
      phone: '',
      message: '',
    }
  },
  methods: {
    resetForm() {
      this.sender_id = ''
      this.phone = ''
      this.message = ''
    },
    sendSMS() {
      console.log(this.message)
    },
  },
}
</script>

<style lang="scss">
</style>

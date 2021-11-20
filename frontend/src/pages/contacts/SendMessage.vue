<template>
  <b-modal
    id="compose-sms"
    :visible="shallShowSmsComposeModal"
    title="Send SMS"
    modal-class="modal-sticky"
    footer-class="d-flex justify-content-between"
    body-class=""
    size="lg"
    no-fade
    hide-backdrop
    static
    @change="val => $emit('update:shall-show-sms-compose-modal', val)"
  >
    <!-- Modal Header -->
    <template #modal-header>
      <h5 class="modal-title">
        Send SMS
      </h5>
      <div class="modal-actions">
        <feather-icon
          icon="MinusIcon"
          class="cursor-pointer"
          @click="$emit('update:shall-show-sms-compose-modal', false)"
        />
        <feather-icon
          icon="XIcon"
          class="ml-1 cursor-pointer"
          @click="discardSms"
        />
      </div>
    </template>

    <!-- Modal Footer -->
    <template #modal-footer>
      <!-- Footer: Left Content -->
      <div>
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
          @click="sendSMS"
        >
          Send SMS
        </b-button>
      </div>

      <!-- Footer: Right Content -->
      <div>
        <!-- Discard Compose -->
        <feather-icon
          icon="TrashIcon"
          size="17"
          class="ml-75 cursor-pointer"
          @click="discardSms"
        />
      </div>
    </template>

    <!-- Modal: Body -->
    <b-form>
      <!-- Field: To -->
      <div class="compose-sms-form-field">
        <label for="sms-to">To: </label>
        <b-form-input
          id="sms-to"
          v-model="composeData.chosen"
          :disabled="true"
        />
      </div>

      <!-- Field: Sender ID -->
      <div class="compose-sms-form-field mt-1">
        <label for="sender-id">Sender ID: </label>
        <b-form-input
          id="sender-id"
          v-model="composeData.sender"
        />
      </div>

      <!-- Field: Message - Quill Editor -->
      <div class="message-editor mt-1">
        <label for="textarea-auto-height">Message:</label>
        <b-form-textarea
          id="textarea-auto-height"
          v-model="composeData.message"
          placeholder="Message"
          rows="3"
          max-rows="8"
        />
      </div>
    </b-form>
  </b-modal>
</template>

<script>
import {
  BButton, BForm, BFormInput, BFormTextarea,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { ref } from '@vue/composition-api'
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import useContacts from './useContacts'

export default {
  directives: {
    Ripple,
  },
  components: {
    // BSV
    BButton,
    BForm,
    BFormInput,
    BFormTextarea,
  },
  model: {
    prop: 'shallShowSmsComposeModal',
    event: 'update:shall-show-sms-compose-modal',
  },
  props: {
    shallShowSmsComposeModal: {
      type: Boolean,
      required: true,
    },
    contacts: {
      type: Array,
      required: true,
    },
    isSelectedAll: {
      type: Boolean,
      required: true,
    },
    userData: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const toast = useToast()

    const composeData = ref({
      to: props.isSelectedAll ? 'All Contacts' : props.contacts.map(u => u.phone_number).join(','),
      chosen: props.isSelectedAll ? 'All Contacts' : `${props.contacts.length} contact${props.contacts.length > 1 ? 's' : ''}`,
      sender: props.userData?.sender_id || '',
    })

    const discardSms = () => {
      composeData.value = {}
      emit('update:shall-show-sms-compose-modal', false)
    }

    const { send } = useContacts()

    const sendSMS = () => {
      const { to, message, sender } = composeData.value

      if (!sender || sender === '') {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Enter your sender id',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
        return
      }

      if (!message || message === '') {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Enter your message',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
        return
      }

      const pages = Math.ceil(message.length / process.env.MIX_SMS_LENGTH)
      const data = {
        to, message, pages, sender_id: sender,
      }

      send(data, () => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'SMS Scheduled successfully',
            icon: 'CheckIcon',
            variant: 'success',
          },
        })
        discardSms()
      })
    }

    return {
      composeData,

      // SMS actions
      sendSMS,
      discardSms,
    }
  },
}
</script>

<style lang="scss" scoped>
form ::v-deep {
    // Mail To vue-select style
    .v-select {
        .vs__dropdown-toggle {
            border: 0;
            box-shadow: none;
        }
        .vs__open-indicator {
            display: none;
        }
    }
}
</style>

<template>
  <div>
    <b-sidebar
      id="sidebar-task-handler"
      sidebar-class="sidebar-lg"
      :visible="isGroupHandlerSidebarActive"
      bg-variant="white"
      shadow
      backdrop
      no-header
      right
      @change="(val) => $emit('update:is-group-handler-sidebar-active', val)"
      @hidden="clearForm"
    >
      <template #default="{ hide }">
        <b-overlay
          :show="working"
          rounded="sm"
        >

          <!-- Header -->
          <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
            <h5 class="mb-0">
              {{ groupItem.id ? 'Edit Group' : 'Add Group' }}
            </h5>
            <div>
              <feather-icon
                v-show="groupItem.id"
                icon="TrashIcon"
                class="cursor-pointer text-danger"
                @click="$emit('remove-group'); hide();"
              />
              <feather-icon
                class="ml-1 cursor-pointer"
                icon="XIcon"
                size="16"
                @click="hide"
              />
            </div>
          </div>

          <!-- Body -->
          <validation-observer
            #default="{ handleSubmit }"
            ref="refFormObserver"
          >

            <!-- Form -->
            <b-form
              class="p-2"
              @submit.prevent="handleSubmit(onSubmit)"
            >
              <b-alert
                variant="danger"
                :show="errorMessage !== ''"
              >
                <h4 class="alert-heading">
                  {{ errorMessage }}
                </h4>
              </b-alert>

              <!-- Title -->
              <validation-provider
                #default="validationContext"
                name="Name"
                rules="required"
              >
                <b-form-group
                  label="Name"
                  label-for="name"
                >
                  <b-form-input
                    id="name"
                    v-model="groupItem.name"
                    autofocus
                    :state="getValidationState(validationContext)"
                    placeholder="Name"
                  />

                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <!-- Description -->
              <b-form-group
                label="Description"
                label-for="group-description"
              >
                <b-form-input
                  id="group-description"
                  v-model="groupItem.description"
                  placeholder="Description"
                />
              </b-form-group>

              <!-- Form Actions -->
              <div class="d-flex mt-2">
                <b-button
                  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                  variant="primary"
                  class="mr-2"
                  type="submit"
                >
                  {{ groupItem.id ? 'Update' : 'Add ' }}
                </b-button>
              </div>
            </b-form>
          </validation-observer>
        </b-overlay>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import {
  BSidebar, BForm, BFormGroup, BFormInput, BButton, BFormInvalidFeedback, BAlert, BOverlay,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { required } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'
import { toRefs } from '@vue/composition-api'
import useGroupHandler from './useGroupHandler'

export default {
  components: {
    // BSV
    BButton,
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BFormInvalidFeedback,
    BAlert,
    BOverlay,

    // Form Validation
    ValidationProvider,
    ValidationObserver,
  },
  directives: {
    Ripple,
  },
  model: {
    prop: 'isGroupHandlerSidebarActive',
    event: 'update:is-group-handler-sidebar-active',
  },
  props: {
    isGroupHandlerSidebarActive: {
      type: Boolean,
      required: true,
    },
    group: {
      type: Object,
      required: true,
    },
    clearGroupData: {
      type: Function,
      required: true,
    },
    working: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      required,
    }
  },
  setup(props, { emit }) {
    const {
      groupItem,
      resetGroup,
      onSubmit,
    } = useGroupHandler(toRefs(props), emit)

    const {
      refFormObserver,
      getValidationState,
      resetForm,
      clearForm,
    } = formValidation(resetGroup, props.clearGroupData)

    return {
      // Add New
      groupItem,
      onSubmit,

      // Form Validation
      resetForm,
      clearForm,
      refFormObserver,
      getValidationState,
    }
  },
}
</script>

<template>
  <b-card
    v-if="data"
    no-body
    class="card-statistics"
  >
    <b-card-header>
      <b-card-title>Dashboard</b-card-title>
      <b-card-text class="font-small-2 mr-25 mb-0" />
    </b-card-header>
    <b-card-body class="statistics-body">
      <b-row>
        <b-col
          v-for="item in data"
          :key="item.icon"
          xl="3"
          sm="6"
          :class="item.customClass"
        >
          <b-media no-body>
            <b-media-aside

              class="mr-2"
            >
              <b-avatar
                size="48"
                :variant="item.color"
              >
                <feather-icon
                  size="24"
                  :icon="item.icon"
                />
              </b-avatar>
            </b-media-aside>
            <b-media-body class="my-auto">
              <h4
                v-if="item.subtitle === 'Units'"
                class="font-weight-bolder mb-0"
              >
                {{ item.title | separator }}
              </h4>
              <h4
                v-else
                class="font-weight-bolder mb-0"
              >
                {{ item.title | numeral('0.[00]a') }}
              </h4>
              <b-card-text class="font-small-3 mb-0">
                {{ item.subtitle }}
              </b-card-text>
            </b-media-body>
          </b-media>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, BCardText, BCardBody, BRow, BCol, BMedia, BMediaAside, BAvatar, BMediaBody,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardText,
    BCardBody,
    BMedia,
    BAvatar,
    BMediaAside,
    BMediaBody,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

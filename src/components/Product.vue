<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template>
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-divider class="mx-4"></v-divider>
    <div class="card-footer my-4">
      <div class="d-flex">
        <v-card-title>Price</v-card-title>
        <div class="amount">$500</div>
      </div>
      <div class="btn px-4">
        <v-btn
          :loading="loading3"
          :disabled="loading3"
          color="blue-grey lighten-2"
          class="text-white"
          @click="loader = 'loading3'"
        >
          Add to Cart
          <v-icon right> mdi-cart-outline </v-icon>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "card-custom",
  data() {
    return {
      loading: false,
      selection: 1,
    };
  },

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
});
</script>


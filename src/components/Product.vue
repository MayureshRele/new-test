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
      :src="product.image"
      alt="https://randomwordgenerator.com/img/picture-generator/52e9d3414854aa14f1dc8460962e33791c3ad6e04e507441722a72dd964bc7_640.jpg"
    ></v-img>

    <v-card-title>{{product.name}}</v-card-title>
<v-card-text>{{product.description}}</v-card-text>
    <v-divider class="mx-4"></v-divider>
    <div class="card-footer my-4">
      <div class="d-flex">
        <v-card-title>Price</v-card-title>
        <div class="amount">${{product.price}}</div>
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
import { IProduct } from "@/interface/IProduct";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "card-custom",
  data() {
    return {
      loading: false,
      selection: 1,
    };
  },
  props: {
    product:{
      type: Object as PropType<IProduct>,
    }
  }
});
</script>


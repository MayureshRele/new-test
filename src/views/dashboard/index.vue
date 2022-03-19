<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="12" md="6" lg="4">
        <Product />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Product from "../../components/Product.vue";
export default defineComponent({
  name: "dash-Board",
  components: {
    Product,
  },
});
</script>

<style>
</style>
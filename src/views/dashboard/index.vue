<template>
  <v-container>
    <v-row no-gutters>
      <v-btn color="primary">Add Product</v-btn>
      <v-col cols="12" sm="12" md="6" lg="4">
        <Product />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, computed } from "@vue/runtime-core";
import { IProduct } from "../../interface/IProduct";
import Product from "../../components/Product.vue";
import { reactive } from "vue";
import { Actions } from "@/store/enums/StoreEnums";
export default defineComponent({
  name: "dash-Board",
  components: {
    Product,
  },
  setup() {
    const store = useStore();
    const Products = computed(() => {
      return store.getters.products;
    });
    const productsController = reactive({
      product: {},
      products: Products,
      create(product: IProduct) {
        debugger;
        store.dispatch(Actions.ADD_PRODUCT, product);
      },
      update(product: IProduct) {
        productsController.products = productsController.products.map(
          (existingProduct: any) => {
            if (product.id === existingProduct.id) {
              productsController.product = {};
              return product;
            } else {
              return existingProduct;
            }
          }
        );
      },
    });
    return {
      productsController,
    };
  },
});
</script>

<style>
</style>
<template>
  <v-container>
    <v-row no-gutters>
      <v-btn @click="open"> click me </v-btn>
      <Modal v-if="isadd" id="add" title="Add Product" @close="closeadd" />
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
import Modal from "../../components/Modal.vue";
import { reactive, ref } from "vue";
import { Actions } from "@/store/enums/StoreEnums";
export default defineComponent({
  name: "dash-Board",
  components: {
    Product,
    Modal,
  },
  setup() {
    const store = useStore();
    const Products = computed(() => {
      return store.getters.products;
    });
    const isadd = ref(false);
    const open = () => {
      isadd.value = true;
      store.dispatch(Actions.IS_MODAL, { isOpen: true });
    };

    const closeadd = () => {
      isadd.value = false;
    };
    // const productsController = reactive({
    //   product: {},
    //   products: Products,
    //   addProduct() {
    //     isAddOpen.value = true;
    //     store.dispatch(Actions.IS_MODAL, { isOpen: true });
    //   },
    //   create(product: IProduct) {
    //     debugger;
    //     store.dispatch(Actions.ADD_PRODUCT, product);
    //   },
    //   update(product: IProduct) {
    //     productsController.products = productsController.products.map(
    //       (existingProduct: any) => {
    //         if (product.id === existingProduct.id) {
    //           productsController.product = {};
    //           return product;
    //         } else {
    //           return existingProduct;
    //         }
    //       }
    //     );
    //   },
    // });
    return {
      isadd,
      open,
    };
  },
});
</script>

<style>
</style>
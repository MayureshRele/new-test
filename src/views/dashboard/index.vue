<template>
  <v-container>
    <v-row no-gutters>
      <v-btn @click="open"> click me </v-btn>
      <Modal
        id="add"
        v-if="isadd"
        title="Add Product"
        :product="productsController.emptyproduct"
        @submit="productsController.create"
        @close="closeadd"
      />
      <v-col cols="12" sm="12" md="6" lg="4" v-if="Products.length > 0">
        <div class="product-card" v-for="product in Products" :key="product.id">
          <Product
            :product="product"
            @editproduct="productsController.update"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, computed, isProxy } from "@vue/runtime-core";
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
    const isedit = ref(false);
    const EditProduct = ref<IProduct>({
      id: 0,
      name: "",
      price: 0,
      qty: 0,
      description: "",
      image: "",
    });
    const open = () => {
      isadd.value = true;
      store.dispatch(Actions.IS_MODAL, { isOpen: true });
    };
    const edit = () => {
      isedit.value = true;
      store.dispatch(Actions.IS_MODAL, { isOpen: true });
    };
    const closeedit = () => {
      console.log("close");

      isedit.value = false;
    };

    const closeadd = () => {
      isadd.value = false;
    };
    const productsController = reactive({
      emptyproduct: {
        id:0,
        name:"",
        description:"",
        image:"",
        price:0,
        qty:0
      },
      create(product: IProduct) {
        store.dispatch(Actions.ADD_PRODUCT, product);
      },
      editproduct(product: IProduct) {
        // console.log(product, "this is roduct");
        // store.dispatch(Actions.EDIT_PRODUCT, product);
        // productsController.products = productsController.products.map(
        //   (existingProduct: any) => {
        //     console.log({existingProduct});
        //     console.log({product});
        //     // if (product.id === existingProduct.id) {
        //     //   productsController.product = {};
        //     //   return product;
        //     // } else {
        //     //   return existingProduct;
        //     // }
        //   }
        // );
      },
    });
    return {
      isadd,
      open,
      productsController,
      Products,
      edit,
      EditProduct,
      closeadd,
      closeedit,
    };
  },
});
</script>

<style>
</style>
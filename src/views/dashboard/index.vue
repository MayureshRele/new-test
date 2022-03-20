<template>
  <v-container>
    <Button
      depressed
      color="blue-grey darken-3"
      class="text-white"
      label="Add Product"
      @click="modalController.open"
      type="submit"
    />
    <Modal
      id="add"
      v-if="isAddModal"
      title="Add Product"
      :product="productsController.emptyproduct"
      @submit="productsController.create"
      @close="modalController.close"
    />
    <v-row no-gutters v-if="Products.length > 0">
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="4"
        v-for="product in Products"
        :key="product.id"
      >
        <div class="product-card">
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
import {
  defineComponent,
  computed,
  isProxy,
  reactive,
  ref,
} from "@vue/runtime-core";
import { IProduct } from "../../interface/IProduct";
import Product from "../../components/Product.vue";
import Modal from "../../components/Modal.vue";
import Button from "@/components/Button.vue";
import { Actions } from "@/store/enums/StoreEnums";
export default defineComponent({
  name: "dash-Board",
  components: {
    Product,
    Modal,
    Button,
  },
  setup(props, emitter) {
    const store = useStore();
    const Products = computed(() => {
      return store.getters.products;
    });
    const isAddModal = ref(false);
    const EditProduct = ref<IProduct>({
      id: 0,
      name: "",
      price: 0,
      qty: 0,
      description: "",
      image: "",
    });

    const modalController = reactive({
      open() {
        isAddModal.value = true;
        store.dispatch(Actions.IS_MODAL, { isOpen: true });
      },
      close() {
        isAddModal.value = false;
      },
    });
    const productsController = reactive({
      emptyproduct: {
        id: 0,
        name: "",
        description: "",
        image: "",
        price: 0,
        qty: 0,
      },
      create(product: IProduct) {
        store.dispatch(Actions.ADD_PRODUCT, product);
      },
      editproduct(product: IProduct) {
        console.log(product, "this is roduct");
        store.dispatch(Actions.EDIT_PRODUCT, product);
      },
    });
    return {
      isAddModal,
      productsController,
      Products,
      modalController,
      EditProduct,
    };
  },
});
</script>

<style></style>

<template>
  <div class="text-center">
    <v-dialog v-model="isModal" id="id">
      <v-card v-for="item in product" :key="item.id" >
        <v-toolbar dark color="blue-grey darken-3">
          <v-toolbar-title class="text-white">Shopping Cart</v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-divider></v-divider>
        <v-card-text>
          <div class="cartContainer d-flex">
            <v-img
              src="https://picsum.photos/510/300?random"
              class="cartImage"
              contain
            ></v-img>
            <div class="d-flex flex-column justify-center ml-5 cartItem">
              <div class="grey--text text-darken-1 mb-2">{{item.name}}</div>
              <div
                class="text-truncate grey--text text-darken-1 mb-2"
                style="max-width: 200px"
              >
               {{item.description}}
              </div>
            </div>
            <div class="quantity d-flex align-center ml-5">
              <v-icon>mdi-minus</v-icon>
              <div class="grey--text text-darken-1 mx-3">1</div>
              <v-icon>mdi-plus</v-icon>
            </div>
            <div class="d-flex align-center ml-5">
              <v-icon>mdi-close-circle</v-icon>
            </div>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn color="blue darken-1" text @click="modalController.close">
            Pay Now
          </v-btn>
          <v-spacer></v-spacer>
          <div class="grey--text text-darken-1">Cart Total</div>
          <v-card-text class="text-h6">$5000</v-card-text>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive } from "vue";
import Button from "@/components/Button.vue";
import { IProduct } from "@/interface/IProduct";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
export default defineComponent({
  props: {
    id: {
      type: String,
    },
    title: {
      type: String,
    },
    product: {
      type: Object as PropType<IProduct>,
    },
  },
  setup(props, emitter) {
    const store = useStore();
    const isModal = computed(() => {
      return store.getters.Ismodal;
    });

    const modalController = reactive({
      close() {
        emitter.emit("close");
        store.dispatch(Actions.IS_MODAL, { isOpen: false });
      },
    });

    const productModalController = reactive({
      product: props.product as IProduct,
      submit() {
        emitter.emit(
          "submit",
          JSON.parse(JSON.stringify(productModalController.product))
        );
        modalController.close();
      },
    });

    return {
      isModal,
      modalController,
      productModalController,
    };
  },
});
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  width: 100%;
}
.cartImage {
  width: 100px;
  height: 100px;
}
.cartTitle {
  display: flex;
  align-items: center;
}
</style>

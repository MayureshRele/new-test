<template>
  <div class="formContainer">
    <v-dialog persistent v-model="isModal" :id="id">
      <v-card width="500">
        <v-card-title>
          <span class="text-h5">{{ title }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row no-gutters>
              <v-col cols="12" class="p-0">
                <Input
                  v-model="productController.product.name"
                  type="text"
                  label="Name"
                  :value="productController.product.name"
                />
              </v-col>
              <v-col cols="12" class="p-0">
                <Input
                  v-model="productController.product.description"
                  type="text"
                  label="Description"
                  :value="productController.product.description"
                />
              </v-col>
              <v-col cols="12" class="p-0">
                <Input
                  v-model="productController.product.image"
                  type="text"
                  label="Image"
                  :value="productController.product.image"
                />
              </v-col>
              <v-col cols="12" class="p-0">
                <Input
                  v-model="productController.product.price"
                  type="text"
                  label="Price"
                  :value="productController.product.price"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeModal"> Close </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" >
import { Actions } from "@/store/enums/StoreEnums";
import { computed, defineComponent, reactive } from "vue";
import Input from "./Input.vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "modal-test",
  props: {
    id: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  components: {
    Input,
  },
  setup(_, emitter) {
    const store = useStore();
    const isModal = computed(() => {
      return store.getters.Ismodal;
    });

    const closeModal = () => {
      emitter.emit("close");
      store.dispatch(Actions.IS_MODAL, { isOpen: false });
    };

    const productController = reactive({
      product: {
        email: "",
        name: "",
        description: "",
        image: "",
        price: "",
        qty: 0,
      },
      submit() {
        debugger;
        emitter.emit("submit", productController.product);
      },
    });

    return {
      isModal,
      closeModal,
      productController,
    };
  },
});
</script>

<style>
</style>
<template>
  <div class="formContainer">
    <v-dialog persistent scrollable v-model="isModal" id="id">
      <v-card width="500">
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="closeModal"><v-icon>mdi-close</v-icon> </v-btn>
        </v-toolbar>
        <v-card-title>
          <span class="text-h5">{{ title }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <Input
                  v-model="productModalController.product.name"
                  type="text"
                  label="Name"
                  :value="productModalController.product.name"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <Input
                  v-model="productModalController.product.description"
                  type="text"
                  label="Description"
                  :value="productModalController.product.description"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <Input
                  v-model="productModalController.product.image"
                  type="text"
                  label="Image"
                  :value="productModalController.product.image"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <Input
                  v-model="productModalController.product.price"
                  type="number"
                  label="Price"
                  :value="productModalController.product.price"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeModal"> Close </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="productModalController.submit"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" >
import { Actions } from "@/store/enums/StoreEnums";
import { computed, defineComponent, PropType, reactive } from "vue";
import Input from "./Input.vue";
import { useStore } from "vuex";
import { IProduct } from "@/interface/IProduct";
export default defineComponent({
  name: "modal-test",
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
  components: {
    Input,
  },
  setup(props, emitter) {
    const store = useStore();
    const isModal = computed(() => {
      return store.getters.Ismodal;
    });

    const closeModal = () => {
      emitter.emit("close");
      store.dispatch(Actions.IS_MODAL, { isOpen: false });
    };

    const productModalController = reactive({
      product: props.product as IProduct,
      submit() {
        emitter.emit(
          "submit",
          JSON.parse(JSON.stringify(productModalController.product))
        );
        closeModal();
      },
    });

    return {
      isModal,
      closeModal,
      productModalController,
    };
  },
});
</script>

<style>
</style>
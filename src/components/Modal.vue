<template>
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
                label="name"
                type="text"
                :value="productsController.name"
              />
            </v-col>
            <v-col cols="12" class="p-0">
              <Input
                label="description"
                type="text"
                :value="productsController.description"
              />
            </v-col>
            <v-col cols="12" class="p-0">
              <Input
                label="image"
                type="text"
                :value="productsController.image"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeModal"> Close </v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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

    const productsController = reactive({
      name: "",
      description: "",
      image: "",
    });
    const closeModal = () => {
      emitter.emit("close");
      store.dispatch(Actions.IS_MODAL, { isOpen: false });
    };

    return {
      isModal,
      closeModal,
      productsController,
    };
  },
});
</script>

<style>
</style>
<template>
  <div class="text-center">
    <v-dialog v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
          @click="dialog = true"
        >
          Click Me
        </v-btn>
      </template>
      <v-card>
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
              <div class="grey--text text-darken-1 mb-2">Lorem Ipsum</div>
              <div
                class="text-truncate grey--text text-darken-1 mb-2"
                style="max-width: 200px"
              >
                Lorem Ipsum Lorem Ipsum Lorem Ipsum
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
          <Button
            depressed
            color="blue-grey darken-3"
            class="mx-5"
            label="Pay Now"
            type="submit"
            @click="dialog = false"
          />
          <v-spacer></v-spacer>
          <div class="grey--text text-darken-1">Cart Total</div>
          <v-card-text class="text-h6">$5000</v-card-text>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button.vue";
export default defineComponent({
  components: {
    Button,
  },
  data() {
    return {
      dialog: false,
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

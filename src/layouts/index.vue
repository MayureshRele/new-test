<template>
  <div class="mainContainer">
    <div>
      <v-toolbar app dark color="blue-grey darken-1" class="hidden-xs">
        <v-toolbar-title>Rivulet Digital</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          clearable
          flat
          solo-inverted
          hide-details
          class="text-white"
          prepend-inner-icon="mdi-magnify"
          label="Search"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <div class="menu-item">
            <v-btn>Home<v-icon class="ml-2">mdi-home-outline</v-icon></v-btn>

            <!-- <v-badge
              v-if="Products.length !== 0"
              color="primary"
              :content="Products.length"
            >
              <v-btn
                >Cart{{ Products.length
                }}<v-icon class="ml-2">mdi-cart-outline</v-icon></v-btn
              ></v-badge
            > -->
            <v-btn
              >Cart{{ Products
              }}<v-icon class="ml-2">mdi-cart-outline</v-icon></v-btn
            >

            <v-btn>Logout<v-icon class="ml-2">mdi-logout</v-icon></v-btn>
          </div>
        </v-toolbar-items>
      </v-toolbar>
      <v-toolbar app dark color="blue-grey darken-3" class="hidden-sm-and-up">
        <v-toolbar-title>Rivulet Digital</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon
          class="text-white"
          @click="dialog = true"
        ></v-app-bar-nav-icon>
        <v-dialog
          v-model="dialog"
          fullscreen
          transition="dialog-bottom-transition"
          hide-overlay
        >
          <v-toolbar-side-icon dark></v-toolbar-side-icon>
          <v-card>
            <v-toolbar flat color="blue-grey darken-2">
              <v-toolbar-title class="text-white"
                >Rivulet Digital</v-toolbar-title
              >
              <v-spacer></v-spacer>
              <v-btn icon @click="dialog = false">
                <v-icon class="text-white">mdi-close</v-icon>
              </v-btn>
            </v-toolbar>

            <v-list>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>mdi-home-outline</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>mdi-cart-outline</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Cart</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>mdi-logout</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Logout</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-text-field
                v-model="search"
                clearable
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="Search"
              ></v-text-field>
            </v-list>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { IProduct } from "@/interface/IProduct";
import { computed, defineComponent, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
export default defineComponent({
  name: "custom-header",
  setup() {
    const store = useStore();
    const dialog = ref(false);
    const nav = ref([
      {
        icon: "home-outline",
        text: "Home",
        title: "Back to Home page",
        active: true,
      },
      {
        icon: "cart-outline",
        text: `Cart`,
        title: "Our Contact info",
        active: false,
      },
      {
        icon: "logout",
        text: "Logout",
        title: "Logout",
        active: false,
      },
    ]);
    const Products = computed(() => {
      let totalCount = 0;
      let cartArray = store.getters.cartList;
      cartArray.forEach((element: IProduct) => {
        totalCount += element.qty;
      });
      return totalCount;
    });
    return {
      Products,
      nav,
      dialog,
    };
  },
});
</script>

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

            <v-badge
              v-if="cart.length !== 0"
              color="primary"
              content="5"
            >
              <v-btn
                >Cart<v-icon class="ml-2">mdi-cart-outline</v-icon></v-btn
              ></v-badge
            >
            <v-btn v-else
              >Cart<v-icon class="ml-2">mdi-cart-outline</v-icon></v-btn
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
              <!-- <v-list-tile v-for="(item, index) in nav" :key="index" to="#">
                <v-list-tile-action>
                  <v-icon v-if="item.icon">mdi-{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title :title="item.title">{{
                    item.text
                  }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile> -->

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
    <!-- <span>hiii</span>
              {{ cart[0].name }} -->
    <router-view />
  </div>
</template>

<script lang="ts">
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
    const cart = computed(() => {
      return store.getters.cart;
    });
    return {
      cart,
      nav,
      dialog,
    };
  },
});
</script>

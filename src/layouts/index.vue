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
          <v-btn v-for="item in nav" :key="item.icon" class="menu-item"
            >{{ item.text
            }}<v-icon class="text-white ml-2"
              >mdi-{{ item.icon }}</v-icon
            ></v-btn
          >
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
              <v-list-tile v-for="(item, index) in nav" :key="index" to="#">
                <v-list-tile-action>
                  <v-icon v-if="item.icon">mdi-{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title :title="item.title">{{
                    item.text
                  }}</v-list-tile-title>
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
import { defineComponent } from "vue";
export default defineComponent({
  name: "custom-header",
  data() {
    return {
      dialog: false,
      nav: [
        {
          icon: "home-outline",
          text: "Home",
          title: "Back to Home page",
          active: true,
        },
        {
          icon: "cart-outline",
          text: "Cart",
          title: "Our Contact info",
          active: false,
        },
        {
          icon: "logout",
          text: "Logout",
          title: "Logout",
          active: false,
        },
      ],
    };
  },
});
</script>


<template>
  <v-app :style="{ background: 'lightskyblue', 'overflow-y': auto }">
    <v-app-bar dark app elevation="0" color="#00000000">
      <v-app-bar-nav-icon @click="menuOpen"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-dialog v-model="dialog" transition="fade-transition" fullscreen>
      <v-card elevation="0" :style="{ background: 'lightskyblue' }">
        <v-toolbar dark app elevation="0" color="#00000000">
          <v-icon @click="dialog = false">mdi-close</v-icon>
        </v-toolbar>
        <v-content>
          <v-row
            no-gutters
            justify="center"
            class="my-15"
            v-for="(menu, i) in appMenus"
            :key="`menu-${i}`"
          >
            <h2
              class="headline font-weight-bold white--text pointer"
              @click="route(menu)"
            >
              {{ menu.title }}
            </h2>
          </v-row>
        </v-content>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    dialog: false,
    appMenus: [
      {
        to: "Top",
        title: "Top",
      },
      {
        to: "About",
        title: "About",
      },
    ],
  }),
  methods: {
    menuOpen() {
      this.dialog = true;
    },
    route(menu) {
      console.log(menu);
      this.$router.push({ name: menu.to });
      this.dialog = false;
    },
  },
};
</script>

<style>
html {
  overflow-y: auto;
}
.routerLink {
  text-decoration: none;
}
.pointer {
  cursor: pointer;
  cursor: hand;
}
</style>
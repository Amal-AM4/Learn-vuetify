<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <v-app>
    <v-toolbar density="compact">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        
        <v-toolbar-title>
          <RouterLink to="/">Vuetify</RouterLink>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn to="/login" variant="outlined" color="pink-darken-4" size="small" text="Login"></v-btn>

    </v-toolbar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>

</template>

<style scoped>

</style>

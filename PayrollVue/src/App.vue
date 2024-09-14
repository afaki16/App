<template>
  <v-app>
    <!-- Sol tarafta açılır kapanır navigation drawer -->
    <v-navigation-drawer
      v-model="drawer" 
      app
      temporary
      class="ma-2"
    >
      <v-list dense>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- App bar ile navbar açma/kapama butonu -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Payroll Management System</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="mt-5">
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app color="primary" dark>
      <v-col class="text-center white--text">
        {{ new Date().getFullYear() }} — Payroll System
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false, // Açılır kapanır drawer'ın durumu
      menuItems: [
        { title: 'Employee', icon: 'mdi-account', route: '/employee' },
        { title: 'Pays', icon: 'mdi-cash-multiple', route: '/pay' },
        { title: 'EmployeePays', icon: 'mdi-account-cash', route: '/employeePays' }
      ]
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer; // Çekmeceyi aç veya kapat
    }
  }
}
</script>

<style>
/* Vuetify'nin varsayılan stilini kullanıyoruz */
html, body {
  font-family: 'Roboto', sans-serif;
}
</style>

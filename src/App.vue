<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :clipped="true" app :permanent="true">
      <v-list>
        <v-list-item link="/" @click="jump">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>栏目管理</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link="/articles">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>文章管理</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark :clipped-left="true">
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <img
        class="logo-img"
        src="http://img.gek6.com/Fjy8os_ZaB1O1ieE3qWjNDCLSsbY"
        alt=""
      />
      <v-toolbar-title>后台管理</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <div style="padding:15px;"><router-view></router-view></div>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  methods:{
    jump(){
      
    }
  }
};
</script>
<style>
.logo-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
}
</style>

<template>
  <v-toolbar app>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-for="item in menuItems"
        :key="item.title"
        :to="item.url"
        flat
      >{{ item.title }}</v-btn>
    </v-toolbar-items>
    <v-menu class="hidden-md-and-up">
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
    <v-btn
      flat
      href="mailto:michaeldtalley@gmail.com"
      target="_blank"
    >
      <span class="mr-2">Email Mike</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          title: 'Resume',
          url: ''
        },
        {
          title: 'Github Projects',
          links: [
            {
              title: '',
              url: ''
            }
          ]
        },
        {
          title: 'App Examples',
          links: [
            {
              title: '',
              url: ''
            }
          ]
        }
      ]
    };
  }
};
</script>

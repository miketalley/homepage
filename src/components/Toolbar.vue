<template>
  <v-toolbar app>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-menu
        v-for="item in menuItems"
        :key="item.title"
      >
        <template slot="activator">
          <v-btn
            :href="item.url"
            target="_blank"
            flat
          >
            {{ item.title }}
          </v-btn>
        </template>
        <v-list v-if="item.links">
          <v-list-tile v-for="link in item.links" :key="link.title">
            <v-list-tile-content>
              <v-list-tile-title>{{ link.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
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
          url: '/assets/MikeTalleyResume.pdf'
        },
        {
          title: 'Github',
          url: 'https://github.com/miketalley'
        },
        {
          title: 'App Examples',
          links: [
            {
              title: 'Test',
              url: ''
            },
            {
              title: 'Test2',
              url: ''
            }
          ]
        }
      ]
    };
  }
};
</script>

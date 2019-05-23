<template>
  <v-toolbar app>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-menu
        offset-y
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
              <v-btn
                :href="link.url"
                target="_blank"
                flat
              >
                {{ link.title }}
              </v-btn>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
    <v-toolbar-items
      class="hidden-md-and-up"
    >
      <v-menu
        offset-y
      >
        <template slot="activator">
          <v-toolbar-side-icon></v-toolbar-side-icon>
        </template>
        <v-list>
          <div v-for="item in menuItems" :key="item.title">
            <v-list-tile v-if="!item.links">
              <v-list-tile-content>
                <v-btn
                  :href="item.url"
                  target="_blank"
                  flat
                >
                  {{ item.title }}
                </v-btn>
              </v-list-tile-content>
            </v-list-tile>
            <div v-if="item.links">
              <v-divider></v-divider>
              <v-subheader>
                {{ item.title }}
              </v-subheader>
              <v-list-tile
                v-for="link in item.links"
                :key="link.title"
              >
                <v-list-tile-content>
                  <v-btn
                    :href="link.url"
                    target="_blank"
                    flat
                  >
                    {{ link.title }}
                  </v-btn>
                </v-list-tile-content>
              </v-list-tile>
            </div>
          </div>
        </v-list>
      </v-menu>
    </v-toolbar-items>
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
              title: 'Gamebonder',
              url: 'http://gamebonder.herokuapp.com/'
            },
            {
              title: 'Beerbonder',
              url: 'http://beerbonder.herokuapp.com/'
            },
            {
              title: 'Is it just me, or?',
              url: 'http://isitjustmeor.herokuapp.com/'
            },
            {
              title: 'Lunch Date',
              url: 'http://lunchdate.herokuapp.com/'
            }
          ]
        }
      ]
    };
  }
};
</script>

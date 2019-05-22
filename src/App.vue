<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-side-icon hidden-md-and-up>

      </v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>Mike Talley</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat hidden-sm>
        Foo
      </v-btn>
      <v-btn flat hidden-sm>
        Foo
      </v-btn>
      <v-btn flat hidden-sm>
        Foo
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="mailto:michaeldtalley@gmail.com"
        target="_blank"
      >
        <span class="mr-2">Email Mike</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <particles-container>
        <v-container>
          <main-content/>
        </v-container>
      </particles-container>
    </v-content>
  </v-app>
</template>

<script>
import MainContent from '@/components/MainContent.vue';
import ParticlesContainer from '@/components/ParticlesContainer.vue';

export default {
  name: 'App',
  components: {
    MainContent,
    ParticlesContainer
  },
  data() {
    return {};
  }
};
</script>

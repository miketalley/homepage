<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Mike Talley</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <particles-container>
        <main-content/>
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

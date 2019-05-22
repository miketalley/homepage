<template>
  <v-app dark>
    <toolbar />

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
import Toolbar from '@/components/Toolbar.vue';

export default {
  name: 'App',
  components: {
    MainContent,
    ParticlesContainer,
    Toolbar
  },
  data() {
    return {};
  }
};
</script>

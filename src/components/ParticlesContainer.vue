<template>
  <div id="particle-container">
    <div id="content-container">
      <slot />
    </div>
    <div id="particles-bg" />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import particlesJS from 'particles.js';

export default {
  data() {
    return {};
  },
  mounted() {
    window.particlesJS.load('particles-bg', '/assets/particles.json');
  }
};
</script>

<style scoped>
#particle-container {
  height: 100%;
  width: 100%;
}
#content-container {
  position: absolute;
  z-index: 100;
}
#particles-bg {
  width: 100%;
  height: 100%;
}
</style>

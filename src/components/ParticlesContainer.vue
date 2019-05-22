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
#content-container {
  position: relative;
  z-index: 1;
}
#particles-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

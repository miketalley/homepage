<template>
  <v-flex :class="generatedClass" ref="container">
    <div :data-depth="depth">
      <slot />
    </div>
  </v-flex>
</template>

<script>
import Parallax from 'parallax-js';

export default {
  props: {
    depth: {
      type: Number,
      required: true
    },
    mb: {
      type: Number,
      required: false
    },
    ml: {
      type: Number,
      required: false
    }
  },
  data() {
    return {};
  },
  mounted() {
    const { container } = this.$refs;

    // eslint-disable-next-line no-new
    new Parallax(container, {
      relativeInput: true
    });
  },
  computed: {
    generatedClass() {
      return `${this.marginBottom} ${this.marginLeft}`;
    },
    marginBottom() {
      return `mb-${this.mb}`;
    },
    marginLeft() {
      return `ml-${this.ml}`;
    }
  }
};
</script>

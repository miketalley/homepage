<template>
  <v-container>
    <v-layout
      justify-center
      wrap
    >
      <v-flex xs10 md8 lg6>
        <v-layout>
          <v-flex xs12 md2>
            <parallax-flex :depth="0.3" :mb="1">
              <img src="img/mike-512x512.png">
            </parallax-flex>
          </v-flex>
          <v-flex xs12 md10>
            <parallax-flex :depth="0.1" :mb="1" class="display-2">
              Mike Talley
            </parallax-flex>
            <parallax-flex :depth="0.2" :mb="1" class="title">
              Full Stack Web Developer
            </parallax-flex>
            <parallax-flex :depth="0.25" :mb="4" class="subheading">
              Boston, MA
            </parallax-flex>
          </v-flex>
        </v-layout>
        <parallax-flex :depth="0.6" :mb="3">
          I am currently working as a Front End Developer for ThriveHive, a small business
          marketing startup in Cambridge. My day to day focuses on using Javascript, and
          Durandal to build our dynamic, responsive single paged application. Some other
          libraries that we leverage are Knockout JS, Require, and jQuery.
        </parallax-flex>
        <parallax-flex :depth="0.9" :mb="3">
          Previous to ThriveHive, I was a full-time student in the Web Development Immersive
          program at General Assembly focusing on Javascript, Ruby on Rails, AngularJS, and D3.
        </parallax-flex>
        <parallax-flex :depth="1.3" :mb="3">
          Before pivoting into web development, I was working as a Financial Advisor for Merrill
          Lynch in Cambridge, MA. In my 8 years working with Bank of America/Merrill Lynch I
          gained both face-to-face experience assisting clients with a large spectrum of
          financial needs as well as experience working as part of a team to deliver on our
          goals.
        </parallax-flex>
        <parallax-flex :depth="1.8" :mb="3">
          My desire to work with more complex technical problems drove me to continue learning
          code. The career transition was streamlined by the WDI course that I completed at
          General Assembly.
        </parallax-flex>
        <parallax-flex :depth="2.4" :mb="3">
          JavaScript Durandal Knockout jQuery Angular JS D3.js - Data Driven Documents Ruby/Ruby
          on Rails Firebase PostgreSQL Redis Please feel free to view some of my projects on
          GitHub. I have worked on several solo projects and also been part of a collaborative
          effort using git. If you have any questions, or know of a position that may be a good
          match, please email me.
        </parallax-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ParallaxFlex from '@/components/ParallaxFlex.vue';

export default {
  data() {
    return {};
  },
  components: {
    ParallaxFlex
  }
};
</script>

<style scoped>
img {
  height: 100px;
  width: auto;
  border-radius: 50%;
}
</style>

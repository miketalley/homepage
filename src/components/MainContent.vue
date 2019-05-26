<template>
  <v-container>
    <v-layout
      justify-center
      wrap
    >
      <v-flex xs10 md8 lg6>
        <v-layout row wrap>
          <v-flex xs12 md3>
            <parallax-flex :depth="0.3" :mb="1">
              <img src="img/mike-512x512.png">
            </parallax-flex>
          </v-flex>
          <v-flex xs12 md9>
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
          I am a front end developer that loves working with new technologies. I write concise,
          easily understandable, and easily extensible code. I know the balance between doing things
          correctly and doing things quickly, while adhering to YAGNI principles. I
          believe that simplicity in code is important and achieveable when things are done right.
        </parallax-flex>
        <parallax-flex :depth="0.9" :mb="3">
          I am currently a Senior Front End Developer at ThriveHive in Boston, MA. We utilize Vue,
          Node, Express, and AWS to create a service-oriented architecture of applications that,
          together, deliver our guided marketing solution to small businesses. My day-to-day
          involves coding in mostly Javascript on the front-end to create highly intuitive UI
          components. A big part of being senior level is mentoring more junior developers and
          promoting their continued learning and growth.
        </parallax-flex>
        <parallax-flex :depth="1.3" :mb="3">
          Javascript is my native language and I look forward to learning more ways to solve
          problems and create new and beautiful applications with it. Vue and Node/Express are two
          technologies that I am extremely excited about and would like to work with in the future.
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

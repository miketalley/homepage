<template>
  <v-container>
    <v-layout
      justify-center
      wrap
    >
      <v-flex xs10 md8 lg6>
        <v-layout row wrap>
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
          I am a front end developer that loves learning and working with new
          technologies. My focus is on writing code that not only works, but is
          concise, easily understandable, and extensible. Continually improving as a
          developer is what I strive for and achieve through learning from my peers as
          well as finding and consuming online resources. I believe sharing knowledge
          between team members is an integral key of a successful team.
        </parallax-flex>
        <parallax-flex :depth="0.9" :mb="3">
          I am currently a Senior Front End Developer at ThriveHive in Boston, MA. We utilize
          many technologies including Vue, Node, Express, AWS, Java, AngularJS, Springboot, and
          Grails to create a service-oriented architecture of applications that, together, deliver
          our guided marketing solution to small businesses. My day-to-day involves coding in
          mostly Javascript on the front-end to create highly intuitive UI components. A big part
          of being senior level is mentoring more junior developers and promoting their continued
          learning and growth.
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

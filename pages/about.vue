<template>
  <div>
    <h1>About Data Triad</h1>
    <article>
      <h2>Vision</h2>
      <p>
        Vision: Cultivating a dynamic community of local and virtual data
        scientists focused on employing data for actionable and engaging
        applications.
      </p>
    </article>
    <article>
      <h2>Mission</h2>
      <p>Empowering and enhancing the practical application of data science.</p>
    </article>
    <article>
      <h2>Values</h2>
      <p>Community, Development, Application of Ideas</p>
    </article>
    <article>
      <h2>Areas of Recent Focus</h2>
      <p>
        Areas of recent focus: Machine Learning, Artificial Intelligence, Data
        Science, Data Analytics, Data Engineering, Big Data, Python, R, PyTorch,
        TensorFlow, Deep Learning, GANs to name a few.
      </p>
    </article>
    <Events />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Events from '@/components/Events.vue';
@Component({
  components: {
    Events,
  },
})
export default class Index extends Vue {}
</script>

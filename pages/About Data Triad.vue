<template>
    <div class="container">
        <article>
            <h1 class:"title">About Data Triad</h1>
    <div class="container">
        <article>
            <h2 class:"title">Vision</h2>
            <p> Vision: Cultivating a dynamic community of local and virtual data scientists focused on employing data for actionable and engaging applications.</p>
    <div class="container">
        <article>        
            <h2 class:"title">Mission</h2>
            <p> Empowering and enhancing the practical application of data science.</p>
    <div class="container">
        <article>
            <h2 class:"title">Values</h2>
            <p> Community, Development, Application of Ideas</p>
    <div class="container">
        <article>
            <h2 class:"title">Areas of Recent Focus</h2>
            <p> Areas of recent focus: Machine Learning, Artificial Intelligence, Data Science, Data Analytics, Data Engineering, Big Data, Python, R, TensorFlow, Deep Learning, GANs to name a few.</p>
<template>


  
<template>
  <div v-if="$fetchState.pending">
    <p> Events are loading... </p>
  </div>
  <div v-else class="eventList">
    <ul>
      <li v-for="event in upcomingEvents" :key="event.id">
        <a :href="event.link">
          {{ formatDate(event.local_date) }}, {{ formatTime(event.local_time) }}
        </a>
        <br>
        <strong>{{ event.name }}</strong>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Events extends Vue {
  public upcomingEvents: any = [];

  async fetch(): Promise<void> {
    this.upcomingEvents = await fetch('https://api.meetup.com/datatriad/events').then(res =>
      res.json(),
    );
  };

  // call fetch only on client-side
  fetchOnServer = false;

  public formatDate(eventDate: string): string {
    const formattedDate = new Date(eventDate);
    const splitDate = formattedDate.toString().split(' ');
    return `${splitDate[0]} ${splitDate[1]} ${splitDate[2]} ${splitDate[3]}`;
  }

  public formatTime(eventTime: string): string {
    const splitTime = eventTime.split(':');
    let amPm = 'am';
    if (parseInt(splitTime[0]) > 12) {
      splitTime[0] = (parseInt(splitTime[0]) - 12).toString();
      amPm = 'pm';
    }
    return `${splitTime[0]}:${splitTime[1]} ${amPm}`;
  }
};
</script>

<style scoped>
.eventList {
  text-align: left;
}
</style>
</template>
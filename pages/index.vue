<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="text-center mb-20">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4"
        >
          Data Triad
        </h1>
        <p
          class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"
        >
          A Data Science Collective.
        </p>
        <div class="mx-auto">
          <div
            class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"
          />
        </div>
        <Events />
      </div>
      <div
        class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"
      >
        <div
          class="mx-auto p-4 md:w-1/3 flex flex-col text-center items-center"
        >
          <div
            class="w-20 h-20 inline-flex items-center justify-center
            rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              class="w-10 h-10"
              viewBox="0 0 20 20"
            >
              <path
                d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,
                13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,
                10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,
                1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,
                1.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,
                12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,
                0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,
                6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,
                11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,
                10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,
                10L16.229,11.373z"
              />
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
              Vision
            </h2>
            <p class="leading-relaxed text-base">
              Cultivating a dynamic community of local and virtual data
              scientists focused on employing data for actionable and engaging
              applications.
            </p>
          </div>
        </div>
        <div
          class="mx-auto p-4 md:w-1/3 flex flex-col text-center items-center"
        >
          <div
            class="w-20 h-20 inline-flex items-center justify-center
            rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              class="w-10 h-10"
              viewBox="0 0 20 20"
            >
              <path
                d="M15.94,10.179l-2.437
                -0.325l1.62-7.379c0.047-0.235-0.132-0.458-0.372-0.458H5.25c-0.241,
                0-0.42,0.223-0.373,0.458l1.634,7.376L4.06,10.179c
                -0.312,0.041-0.446,0.425-0.214,0.649l2.864,
                2.759l-0.724,3.947c-0.058,0.315,0.277,0.554,
                0.559,0.401l3.457-1.916l3.456,1.916c-0.419-0.238,
                0.56,0.439,0.56-0.401l-0.725-3.947l2.863-2.759C16.388,
                10.604,16.254,10.22,15.94,10.179M10.381,
                2.778h3.902l-1.536,6.977L12.036,
                9.66l-1.655-3.546V2.778z M5.717,2.778h3.903v3.335L7.965,
                9.66L7.268,9.753L5.717,2.778zM12.618,13.182c-0.092
                0.088-0.134,0.217-0.11,0.343l0.615,
                3.356l-2.938-1.629c-0.057-0.03-0.122-0.048-0.184
                -0.048c-0.063,0-0.128,
                0.018-0.185,0.048l-2.938,1.629l0.616-3.356c0.022
                -0.126-0.019-0.255-0.11-0.343l-2.441-2.354l3.329-0.441c0.128-0.017,
                0.24-0.099,0.295-0.215l1.435-3.073l1.435,3.073c0.055,0.116,0.167,
                0.198,0.294,0.215l3.329,0.441L12.618,13.182z"
              />
            </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
              Mission
            </h2>
            <p class="leading-relaxed text-base">
              Empowering and enhancing the practical application of data
              science.
            </p>
          </div>
        </div>
        <div
          class="mx-auto p-4 md:w-1/3 flex flex-col text-center items-center"
        >
          <div
            class="w-20 h-20 inline-flex items-center
            justify-center rounded-full bg-indigo-100
            text-indigo-500 mb-5 flex-shrink-0"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              class="w-10 h-10"
              viewBox="0 0 20 20"
            >
              <path
                d="M18.125,15.804l-4.038-4.037c0.675-1.079,
                1.012-2.308,1.01-3.534C15.089,4.62,12.199,
                1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,
                3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,
                3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,
                0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,
                15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,
                2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,
                11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,
                0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"
              /> </svg>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
              Areas of Recent Focus
            </h2>
            <p class="leading-relaxed text-base">
              Areas of recent focus: Machine Learning, Artificial Intelligence,
              Data Science, Data Analytics, Data Engineering, Big Data, Python,
              R, PyTorch, TensorFlow, Deep Learning, GANs to name a few.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
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

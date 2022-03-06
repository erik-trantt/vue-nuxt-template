<template>
  <section class="flex flex-col items-start">
    <nuxt-link to="/" class="underline hover:no-underline">Home</nuxt-link>
    <nuxt-link
      to="/carousels/with-pagination"
      class="underline hover:no-underline"
    >
      With Pagination
    </nuxt-link>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

/* eslint-disable-next-line */
@Component
export default class Carousels extends Vue {}
</script>

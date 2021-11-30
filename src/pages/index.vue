<template>
  <section class="h-screen w-3/4 mx-auto">
    <web-editor />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WebEditor from "~/components/ckeditor.vue";

@Component({
  components: { WebEditor },
})
export default class Homepage extends Vue {}
</script>

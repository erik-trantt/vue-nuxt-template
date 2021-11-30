<template>
  <section class="h-screen w-3/4 mx-auto py-8">
    <editor
      api-key="no-api-key"
      :init="{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
      }"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Editor from "@tinymce/tinymce-vue";

/* eslint-disable-next-line */
@Component({
  components: { Editor },
})
export default class Layout extends Vue {
  timestamp = Date.now();

  get newTimestamp(): number {
    return Date.now();
  }
}
</script>
<style lang="postcss" scoped>
/* .item-h + .item-h {
  @apply pl-4;
}

.item-v + .item-v {
  @apply pt-4;
} */
</style>

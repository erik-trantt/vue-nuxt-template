<template>
  <client-only>
    <div ref="editorContainer"></div>
  </client-only>
</template>

<script lang="ts">
import { Vue, Component, Ref } from "vue-property-decorator";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-vue2";

Vue.use(CKEditor);

// CKEditor 5 is not working well with SSR mode, see more here:
// https://github.com/ckeditor/ckeditor5/issues/6071

@Component
export default class WebEditor extends Vue {
  @Ref()
  editorContainer!: HTMLDivElement;

  showEditor = false;
  editor!: typeof ClassicEditor;
  editorData = "<p>Enter your content...</p>";
  editorConfig = {
    // The configuration of the editor.
  };

  mounted(): void {
    ClassicEditor.create(this.editorContainer)
      .then((_editor) => {
        // eslint-disable-next-line no-console
        console.log("CKEditor is ready.");
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("Error: " + error);
      });
  }
}
</script>

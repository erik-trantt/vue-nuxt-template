declare module "@ckeditor/ckeditor5-vue2" {
  import { PluginObject } from "vue";

  interface CKEditor extends PluginObject<unknown> {
    CKEditor: CKEditor;
  }

  const CKEditor: CKEditor;
  export default CKEditor;
}

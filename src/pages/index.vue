<template>
  <section class="h-screen mx-auto p-8">
    <h1>Cuppe - Content Builder</h1>
    <div class="grid grid-rows-2 gap-16 lg:grid-rows-1 lg:grid-cols-2 py-8">
      <keep-alive>
        <editor
          id="tinymce-editor-container"
          ref="editorContainer"
          v-model="editorContent"
          initial-value="editorContent"
          api-key="no-api-key"
          :init="{
            height: 800,
            menubar: true,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
              'code | cuppeAccordion | removeCuppeAccordion | undo redo | formatselect | bold italic backcolor | \
                 alignleft aligncenter alignright alignjustify | \
                 bullist numlist outdent indent | removeformat | help',
            menu: {
              file: {
                title: 'File',
                items: 'newdocument restoredraft | preview | print ',
              },
              edit: {
                title: 'Edit',
                items: 'undo redo | cut copy paste | selectall | searchreplace',
              },
              view: {
                title: 'View',
                items:
                  'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen',
              },
              insert: {
                title: 'Insert',
                items:
                  'image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime',
              },
              format: {
                title: 'Format',
                items:
                  'bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align lineheight | forecolor backcolor | removeformat',
              },
              tools: {
                title: 'Tools',
                items: 'spellchecker spellcheckerlanguage | code wordcount',
              },
              table: {
                title: 'Table',
                items: 'inserttable | cell row column | tableprops deletetable',
              },
              help: { title: 'Help', items: 'help' },
            },
            setup: editorSetup,
          }"
          model-events="change keyup blur focus paste setContent"
          editor_css="/cuppe.css"
        />
      </keep-alive>
      <div>
        <h2 class="uppercase text-sm font-bold border-b-2 select-none">
          Preview
        </h2>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div :key="editorContent" v-html="editorContent"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { MetaInfo } from "vue-meta";
import { Component, Vue, Ref } from "vue-property-decorator";
import Editor from "@tinymce/tinymce-vue";
import { Editor as EditorType } from "tinymce";

/* eslint-disable-next-line */
@Component({
  components: { Editor },

  head() {
    const head: MetaInfo = {
      title: "Cuppe - Content Builder",
    };

    head.link = head.link || [];

    head.link.push({
      href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
      rel: "stylesheet",
      type: "text/css",
    });

    return head;
  },
})
export default class Layout extends Vue {
  editorContent = "<p>Enter your content here...</p>";

  @Ref()
  editorContainer!: HTMLElement;

  editorSetup = (editor: EditorType) => {
    const emptyParagraphTag = "<p>&nbsp;</p>";
    const emptyDivTag = "<div>&nbsp;</div>";

    const parseHTML = (html: string) => {
      const t = document.createElement("template");
      t.innerHTML = html;
      return t.content;
    };

    editor.ui.registry.addButton("cuppeAccordion", {
      text: "Add Accordion",
      onAction(): void {
        const content = editor.getContent();

        // replace last empty element with accordion
        const index =
          (content.lastIndexOf(emptyDivTag) !== -1
            ? content.lastIndexOf(emptyDivTag)
            : null) ||
          (content.lastIndexOf(emptyParagraphTag) !== -1
            ? content.lastIndexOf(emptyParagraphTag)
            : null);

        // whether the accordion should open by default
        const accordionOpenByDefault =
          parseHTML(content).querySelectorAll("details").length === 0;

        // content with accordion appended
        const updatedContent =
          (index ? content.substring(0, index) : content) +
          accordionTemplate(accordionOpenByDefault);

        editor.setContent(updatedContent);
      },
    });

    editor.ui.registry.addButton("removeCuppeAccordion", {
      text: "Remove Accordion",
      onAction(): void {
        const selectedBlocks = editor.selection.getSelectedBlocks();

        if (
          selectedBlocks.length === 1 &&
          selectedBlocks[0].classList.contains("cuppe-summary")
        ) {
          selectedBlocks[0].parentElement?.remove();
        }
      },
    });
  };
}

const accordionTemplate = (open = false) => `
  <details class="cuppe-details" ${open ? "open" : ""}>
    <summary class="cuppe-summary cuppe-font-accordion-label">Accordion label</summary>
    <div class="cuppe-details-content cuppe-font-accordion-content">
      <p>Accordion content</p>
    </div>
  </details>
  <div></div>
`;
</script>

<style lang="postcss">
details > summary {
  list-style: none;
}
.cuppe-font-accordion-label {
  color: #404040;
}
.cuppe-font-accordion-content {
  color: grey;
}
.cuppe-summary {
  cursor: pointer;
  padding: 1rem;
  width: 100%;
}
.cuppe-summary::after {
  font-family: "FontAwesome";
  content: "\f106";
  font-weight: bolder;
  float: right;
}
.cuppe-details[open] > .cuppe-summary::after {
  font-family: "FontAwesome";
  content: "\f107";
  transition: 0.5s;
}
.cuppe-details {
  width: 98%;
  margin: auto;
}
.cuppe-details-content {
  margin-left: 1rem;
  padding: 1rem;
  list-style: initial;
}
ul,
ol {
  list-style-position: inside;
}
ul {
  list-style-type: disc;
}
ol {
  list-style-type: decimal;
}
</style>

<template>
  <!--
  Having the <client-only> tag will pass styles and classes assigned
  from the parents through to the dynamic component to be rendered.
  -->
  <client-only>
    <keep-alive>
      <component :is="field" :data="data" />
    </keep-alive>
  </client-only>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ContentBuilderFields extends Vue {
  @Prop()
  readonly data!: unknown & {
    type: string;
  };

  get field(): unknown {
    return () =>
      import(`~/components/content-builder/${this.data.type}-field.vue`);
  }
}
</script>

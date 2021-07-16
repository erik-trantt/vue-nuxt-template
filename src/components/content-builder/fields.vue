<template>
  <keep-alive>
    <component :is="field" :data="data"></component>
  </keep-alive>
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

<style lang="postcss" scoped></style>

<template>
  <div>hello world from image field</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class LinkField extends Vue {
  @Prop()
  readonly data!: unknown;
}
</script>

<style lang="postcss" scoped></style>

<template>
  <div>
    <div>hello world from group field</div>
    <div
      v-for="(fieldData, index) in data.children"
      :key="'group-item-' + fieldData.type + index"
    >
      <cb-fields :data="fieldData" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import CbFields from "~/components/content-builder/fields.vue";

@Component({
  components: {
    CbFields,
  },
})
export default class GroupField extends Vue {
  @Prop()
  readonly data!: unknown;
}

export interface CBGroupField {
  direction: "horizontal" | "vertical";
}
</script>

<style lang="postcss" scoped></style>

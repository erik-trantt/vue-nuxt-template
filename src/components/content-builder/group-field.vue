<template>
  <div
    class="cb-group-field flex flex-wrap -mx-2"
    :class="{
      'flex-row': data.direction === 'horizontal',
      'flex-col': data.direction !== 'horizontal',
    }"
  >
    <template v-for="(fieldData, index) in data.children">
      <!-- All the group items -->
      <cb-fields
        :key="'group-item-' + fieldData.type + index"
        :data="fieldData"
        class="shadow-lg border-r last:border-r-0"
        :class="['p-2']"
        style="border-color: #ccc"
        :style="{
          width: `${data.itemWithds[index]}%`,
          maxWidth: `${data.itemWithds[index]}%`,
        }"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import CbFields from "~/components/content-builder/fields.vue";

export interface CBGroupField {
  type: "group";
  direction: "horizontal" | "vertical";
  isCenter: boolean;
  itemsPerRow: number;
  itemWithds: number[];
  children: Record<string, unknown>;
}

@Component({
  components: {
    CbFields,
  },
})
export default class GroupField extends Vue {
  @Prop()
  readonly data!: CBGroupField;
}
</script>

<style lang="postcss" scoped></style>

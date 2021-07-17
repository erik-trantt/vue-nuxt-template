<template>
  <nuxt-link v-if="'path' in link" :to="'/' + link.path">
    <slot>{{ link.label }}</slot>
  </nuxt-link>

  <a v-else :href="link.href" rel="noopener noreferrer">
    <slot>{{ link.label }}</slot>
  </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

export interface LinkLabel {
  label: string;
}

export interface ExternalLink extends LinkLabel {
  href: string;
}

export interface InternalLink extends LinkLabel {
  path: string;
}

export type Link = ExternalLink | InternalLink;

@Component
export default class BaseLink extends Vue {
  @Prop()
  readonly link!: Link;
}
</script>

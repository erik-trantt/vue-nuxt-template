import { Plugin } from "@nuxt/types";
import type { Workbox } from "workbox-window";

declare global {
  interface Window {
    onNuxtReady: (callback: () => void) => void;
    $workbox: Workbox;
  }
}

const plugin: Plugin = ({ store: _store }, _inject) => {
  window.onNuxtReady(async () => {
    const workbox = await window.$workbox;

    if (workbox) {
      // event 'installed' happen either the very first time a service worker is installed, or after an update to the current service worker is found
      // https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-window.Workbox#event:installed
      workbox.addEventListener("installed", (event) => {
        if (event.isUpdate) {
          // eslint-disable-next-line no-console
          console.info("new app version is available. refresh to update");
          if (confirm(`New content is available!. Click OK to refresh`)) {
            window.location.reload();
          }
        }
      });
    }
  });
};

export default plugin;

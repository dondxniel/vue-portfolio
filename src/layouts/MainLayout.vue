<template>
  <q-layout view="lHh Lpr lFf" class="start_layout">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink,
  },

  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.start_layout {
  margin: 0 !important;
}
</style>

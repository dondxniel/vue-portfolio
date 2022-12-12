<template>
  <q-page class="bg-dark main_page">
    <start-page />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StartPage from 'src/components/startPage.vue';

export default defineComponent({
  name: 'IndexPage',
  props: ['leftDrawerOpen'],
  components: {
    StartPage,
  },
  data() {
    return {};
  },
});
</script>

<style scoped></style>

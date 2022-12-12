<template>
  <div class="text-center">
    <div v-for="page in pages" :key="page">
      <VuePDF :pdf="pdf" :page="page" :scale="1.5" />
    </div>
  </div>
</template>

<script>
import { usePDF, VuePDF } from '@tato30/vue-pdf';

export default {
  components: {
    VuePDF,
  },
  setup() {
    const { pdf, pages } = usePDF('Don Daniel - Resume.pdf');
    return {
      pdf,
      pages,
    };
  },
};
</script>

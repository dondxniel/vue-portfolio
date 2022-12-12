<template>
  <div class="q-px-sm q-gutter-sm text-white">
    <q-tree
      :nodes="simple"
      node-key="label"
      :accordion="true"
      no-connectors
      icon="chevron_right"
      color="white"
      v-model:expanded="expanded"
      v-model:selected="selected"
      text-color="white"
      class="tree_text"
    >
      <template v-slot:default-header="prop">
        <div class="row items-center" @click="add(prop.node.label)">
          <q-icon
            v-if="prop.node.label !== 'DON DANIEL'"
            :name="prop.node.icon"
            :color="prop.node.iconColor"
            class="q-mr-sm"
          />
          <div class="text-weight-bold text-white">{{ prop.node.label }}</div>
        </div>
      </template>
      <!-- <template v-slot:default-body="prop">
        <span class="text-weight-bold">{{ prop.node.label }}</span>
        <span class="text-weight-light text-black"
          >This is some default content.</span
        >
      </template> -->
    </q-tree>
    <!-- <q-list v-for="(item, index) in simple" :key="index">
      <q-expansion-item
        expand-separator
        expand-icon="chevron_right"
        expanded-icon="expand_more"
        switch-toggle-side
        class="text-bold"
        :label="item.label"
        default-opened
      >
        <q-list dense>
          <q-item
            clickable
            @click="add(items.label)"
            v-ripple
            v-for="(items, i) in item.children"
            :key="i"
          >
            <q-item-section avatar>
              <q-icon :color="items.iconColor" :name="items.icon" />
            </q-item-section>

            <q-item-section> {{ items.label }}</q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
    </q-list> -->
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useTabs } from '../stores/tabs';

export default {
  // props: ['toggleLeftDrawer'],
  // props = {
  //  toggleLeftDrawer:{
  //   type: function
  //  }
  // },
  props: {
    toggleLeftDrawer: { type: Function },
  },
  data() {
    const selected = ref('');
    const store = useTabs();
    const screenWidth = ref(0);

    return {
      // add,
      store,
      selected,
      screenWidth,
      expanded: ref(['DON DANIEL']),

      simple: [
        {
          label: 'DON DANIEL',
          selectable: false,
          children: [
            {
              label: 'About.md',
              icon: 'mdi-information-outline',
              iconColor: 'cyan',
            },
            {
              label: 'Experience.vue',
              icon: 'fa-brands fa-vuejs',
              iconColor: 'green',
            },
            {
              label: 'Skills.jsx',
              icon: 'fa-brands fa-react',
              iconColor: 'blue',
            },
            {
              label: 'Projects.png',
              icon: 'mdi-image-multiple',
              iconColor: 'purple',
            },
            {
              label: 'Certifications.ts',
              icon: 'mdi-language-typescript',
              iconColor: 'blue-6',
            },
            {
              label: 'Contact.json',
              icon: 'mdi-code-braces',
              iconColor: 'yellow',
            },
            // {
            //   label: 'CV.pdf',
            //   icon: 'mdi-file-pdf-box',
            //   iconColor: 'red',
            // },
          ],
        },
      ],
    };
  },

  methods: {
    add(input: string) {
      if (input !== 'DON DANIEL') {
        this.store.addTab(input);
        if (this.screenWidth <= 830) this.toggleLeftDrawer?.();
        if (input) this.store.active = input;
      }
    },
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
  },

  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style scoped>
.tree_text {
  font-size: 0.85rem !important;
}
</style>

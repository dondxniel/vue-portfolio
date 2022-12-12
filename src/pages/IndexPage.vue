<template>
  <q-page class="bg-dark main_page">
    <div v-if="store.tabs == null || !store.tabs.length">
      <q-icon
        class="icon_"
        name="mdi-microsoft-visual-studio-code"
        size="20rem"
        color="grey-9"
      />
      <div class="instruction text-white">
        Click on the
        <span
          ><q-icon
            color="orange"
            size="1.5rem"
            name="mdi-file-multiple-outline"
        /></span>
        icon to open the sidebar to navigate through my portfolio
      </div>
    </div>

    <q-tabs
      v-model="store.active"
      v-if="items !== []"
      dense
      class="text-grey header_scrollable bg-positive"
      active-color="white"
      active-class="bg-dark"
      indicator-color="transparent"
      align="left"
    >
      <q-tab
        :name="item"
        v-for="(item, index) in store.tabs"
        :key="index"
        :label="item"
        :ripple="false"
        :icon="
          item === 'About.md'
            ? `mdi-information-outline`
            : item === 'Skills.jsx'
            ? `fa-brands fa-react`
            : item === 'Experience.vue'
            ? `fa-brands fa-vuejs`
            : item === 'Projects.png'
            ? `mdi-image-multiple`
            : item === 'Certifications.ts'
            ? `mdi-language-typescript`
            : item === 'CV.pdf'
            ? `mdi-file-pdf-box`
            : `mdi-code-braces`
        "
        :class="`tab_header ${item.replace('.', '_')}`"
        @click="setActive(item)"
      >
        <q-btn
          icon="close"
          @click="remove(index, item)"
          size="0.6rem"
          flat
          round
          class="close_icon text-white"
        />
      </q-tab>
    </q-tabs>

    <q-tab-panels v-model="store.active" animated class="bg-dark">
      <q-tab-panel
        :name="item"
        v-for="(item, index) in store.tabs"
        :key="index"
        class="bg-dark text-orange"
      >
        <AboutPage v-if="item === `About.md`" />
        <ExperiencePage v-if="item === `Experience.vue`" />
        <tools-page v-if="item === `Skills.jsx`" />
        <certification-page v-if="item === `Certifications.ts`" />
        <contact-page v-if="item === `Contact.json`" />
        <projects-page v-if="item === `Projects.png`" />
        <c-vpage v-if="item === `CV.pdf`" />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script lang="ts">
import AboutPage from 'src/components/pages/AboutPage.vue';
import CertificationPage from 'src/components/pages/CertificationPage.vue';
import ContactPage from 'src/components/pages/ContactPage.vue';
import ExperiencePage from 'src/components/pages/ExperiencePage.vue';
import ToolsPage from 'src/components/pages/ToolsPage.vue';
import { defineComponent, ref } from 'vue';
import { useTabs } from '../stores/tabs';
import { useQuasar } from 'quasar';
import ProjectsPage from 'src/components/pages/ProjectsPage.vue';
import CVpage from 'src/components/pages/CVpage.vue';

export default defineComponent({
  name: 'IndexPage',
  props: ['leftDrawerOpen'],
  components: {
    AboutPage,
    ExperiencePage,
    ToolsPage,
    CertificationPage,
    ContactPage,
    ProjectsPage,
    CVpage,
  },
  data() {
    // const tab = ref('');

    const store = useTabs();
    // const available = false;

    return {
      store,
      tab: store.active,
      splitterModel: ref(20),
      items: store.tabs,
      tabTitles: [],
      $q: useQuasar,
    };
  },

  methods: {
    setActive(tab: string) {
      this.store.active = tab;
      localStorage.setItem('active', tab);
    },
    remove(num: number, text: string) {
      let tabs = this.store.tabs.length;
      // console.log(tabs);
      if (num + 1 == tabs) {
        console.log('last one');
        let tabTitle = this.store.tabs[num - 1];
        // console.log(tabTitle);
        // this.tab = tabTitle;
        this.setActive(tabTitle);
      }
      this.store.removeTab(num, text);
    },
    // toggle() {
    //   this.$q.dark.toggle();
    //   console.log(this.$q.dark.isActive);
    // },
  },

  watch: {
    tab(newVal) {
      console.log(newVal);
      // this.tab = newVal;
      // console.log(this.tab);
    },
  },
  mounted() {
    //   setTimeout(() => {
    //     this.available = true;
    //   }, 4000);
  },
});
</script>

<style scoped>
.tab_header {
  /* display: flex !important;
  justify-content: space-between; */
  text-transform: capitalize;
}

.main_page {
  position: relative;
}
.header_scrollable {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2000;
  overflow: auto !important;
}
.close_icon {
  z-index: 1000;
}

.icon_ {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: grayscale(1);
}

.instruction {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 1.5em;
}

@media screen and (min-width: 1100px) {
  .instruction {
    width: 50%;
  }
}

@media screen and (max-width: 830px) {
  .icon_ {
    font-size: 15rem !important;
  }
}

@media screen and (max-width: 600px) {
  .instruction {
    font-size: 1.3em;
    width: 95%;
  }
}

@media screen and (max-width: 450px) {
  .icon_ {
    font-size: 10rem !important;
  }
  .instruction {
    font-size: 1.15em;
  }
}
</style>

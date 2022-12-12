<template>
  <div class="bg-accent sidebar">
    <div
      :class="first == true && leftDrawerOpen == true ? ` active_icon ` : ``"
      class="icon_cont"
    >
      <q-icon
        class="icon"
        name="mdi-file-multiple-outline"
        :color="first == true && leftDrawerOpen == true ? `white ` : `grey`"
        @click="leftDrawerOpen = !leftDrawerOpen"
        size="1.7rem"
      />
    </div>
    <div class="icon_cont">
      <q-icon class="icon" name="search" color="grey" size="1.7rem" />
    </div>
    <div class="icon_cont">
      <q-icon
        class="icon"
        name="mdi-source-branch"
        color="grey"
        size="1.7rem"
      />
    </div>
    <div class="icon_cont">
      <q-icon
        class="icon"
        name="important_devices"
        color="grey"
        size="1.7rem"
      />
    </div>
    <div class="icon_cont">
      <q-icon class="icon" name="play_arrow" color="grey" size="1.7rem" />
    </div>
  </div>

  <q-layout view="lHh Lpr lFf">
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="240"
      :breakpoint="758"
      transition-show="slide-left"
      transition-hide="slide-right"
      class="bg-positive"
    >
      <q-list>
        <q-item-label header class="text-bold text-grey-5 text-subtitle1">
          Explorer
        </q-item-label>
        <essential-link :toggleLeftDrawer="toggleLeftDrawer" />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="q-pa-none footer">
      <div class="footer_icon bg-green">
        <q-icon name="mdi-xml" size="1.3rem" color="white" />
      </div>

      <div class="footer_inner">
        <q-space />
        <p class="portfolio_text">©Don 2022</p>
        <q-space />
      </div>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'src/components/EssentialLink.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const sideMenu = ref(false);
    const first = ref(true);
    const second = ref(false);
    const third = ref(false);
    const fourth = ref(false);
    const fifth = ref(false);

    return {
      leftDrawerOpen,
      first,
      second,
      third,
      fourth,
      fifth,
      sideMenu,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
        return leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss" scoped>
._drawer {
  /* background: #252526 !important; */
  background-color: #333333 !important;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 70px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 0.5% 0;
  gap: 8px;
  z-index: 2001;
}
.sidebar .icon {
  cursor: pointer;
}
.icon_cont {
  padding: 15% 0;
  display: flex;
  justify-content: center;
  transition: 0.2s ease;
}
.active_icon {
  border-left: 3px solid orange;
}

.icon_cont:hover {
  /* border-left: 3px solid white; */
}
.footer_icon {
  width: 3%;
  height: 100%;
  padding: 0.3% 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer_inner {
  padding: 0 1%;
  font-weight: 500 !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.socials {
  display: flex;
  gap: 15px;
}

.social_icon {
  cursor: pointer;
}

@media screen and (max-width: 830px) {
  .sidebar {
    /* z-index: 3000; */
    z-index: 3001;
  }
  .footer {
    z-index: 3002;
  }
}

@media screen and (max-width: 700px) {
  .footer_icon {
    width: 78px;
  }
}

@media screen and (max-width: 500px) {
  .footer_icon {
    width: 58px;
  }
  .portfolio_text {
    font-size: 0.7rem;
  }
}
</style>

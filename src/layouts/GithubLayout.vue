<template>
  <q-layout view="lHh Lpr lff" class="github-section">
    <q-header>
      <q-toolbar
        class="justify-between text-white header"
        style="background-color: #161b22"
      >
        <div class="row items-center" style="gap: 10px">
          <q-icon name="mdi-github" size="3rem" color="white" />
          <q-input
            outlined
            v-model="empty"
            dense
            placeholder="Search or jump to..."
            class="bg-black input"
          >
            <template v-slot:append>
              <q-icon name="mdi-slash-forward-box" color="grey-8" />
            </template>
          </q-input>
          <div class="row" style="gap: 20px">
            <div>Pull requests</div>
            <div>Issues</div>
            <div>Marketplace</div>
            <div>Explore</div>
          </div>
        </div>

        <div class="row items-center">
          <q-btn flat round icon="notifications">
            <q-badge class="notif_badge" floating color="red" rounded />
          </q-btn>
          <q-btn flat dense no-wrap :ripple="false">
            <q-icon size="20px" name="add" />
            <q-icon size="20px" name="mdi-menu-down" />
          </q-btn>
          <q-btn dense flat no-wrap>
            <q-avatar rounded size="20px">
              <img src="https://cdn.quasar.dev/img/avatar3.jpg" />
            </q-avatar>
            <q-icon name="arrow_drop_down" size="16px" />

            <q-menu auto-close>
              <q-list dense>
                <q-item class="GL__menu-link-signed-in">
                  <q-item-section>
                    <div>Signed in as <strong>Mary</strong></div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link-status">
                  <q-item-section>
                    <div>
                      <q-icon name="tag_faces" color="blue-9" size="18px" />
                      Set your status
                    </div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Your profile</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Your repositories</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Your projects</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Your stars</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Your gists</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Help</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Sign out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="q-pa-none"> </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    const empty = ref('');
    return {
      empty,
    };
  },
});
</script>

<style>
.github-section {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
}

.header {
  padding: 0.3% 1.5%;
}

.github_general_padding {
  padding: 0 15%;
}
.github-section .input {
  border-radius: 8px;
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
.notif_badge {
  top: 15%;
  right: 15%;
}
</style>

<template>
  <q-page
    class="bg-dark main_page text-white github_general_padding relative-position"
  >
    <div class="body_content">
      <!-- <q-separator class="separator_line" /> -->

      <div>
        <div class="q-pa-md text-git-text">
          <q-avatar
            size="18rem"
            style="
              border: 1px solid grey;
              z-index: 1000;
              background-color: black;
            "
          >
            <img src="https://cdn.quasar.dev/img/avatar.png" />
            <!-- <q-icon name="person" size="10rem" /> -->
          </q-avatar>
          <div class="details q-my-md">
            <h4>Don Daniel</h4>

            <div class="q-my-md">
              <button class="contact_me_btn">Contact Me</button>
            </div>
          </div>

          <q-separator class="q-my-xl" color="grey-9" />
        </div>
      </div>

      <div>
        <div class="q-pa-md">
          <div class="q-gutter-y-md" style="max-width: 100%">
            <div>
              <q-tabs
                v-model="tab"
                dense
                no-caps
                class="text-grey text-capitalize tab_header bg-transparent"
                active-color="white"
                indicator-color="orange"
                :ripple="false"
                align="left"
              >
                <q-tab name="Overview" label="Overview" />
                <q-tab name="Experience" label="Experience" />
                <q-tab name="Skills" label="Skills" />
                <q-tab name="Projects" label="Projects" />
                <q-tab name="Certifications" label="Certifications" />
                <q-tab name="CV" label="CV" />
              </q-tabs>

              <q-tab-panels
                v-model="tab"
                animated
                class="text-white bg-transparent"
              >
                <q-tab-panel name="Overview">
                  <div class="text-h6">Overview</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>

                <q-tab-panel name="Experience">
                  <div class="text-h6">Experience</div>
                  <experience-page />
                </q-tab-panel>

                <q-tab-panel name="Projects">
                  <div class="text-h6">Projects</div>

                  <ProjectsPage />
                </q-tab-panel>

                <q-tab-panel name="Skills">
                  <div class="text-h6">Skills</div>
                  <div class="text-subtitle1 q-mb-md">
                    Here is a list of Languages, libraries, frameworks, and
                    tools which I use and is comfortable with
                  </div>
                  <SkillsPage />
                </q-tab-panel>

                <q-tab-panel name="Certifications">
                  <div class="text-h6">Certifications</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>

                <q-tab-panel name="CV">
                  <div class="text-h6">CV</div>

                  <c-vpage />
                </q-tab-panel>
              </q-tab-panels>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import ExperiencePage from 'src/components/githubPages/ExperiencePage.vue';
import ProjectsPage from 'src/components/githubPages/ProjectsPage.vue';
import SkillsPage from 'src/components/githubPages/SkillsPage.vue';
import CVpage from 'src/components/pages/CVpage.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  props: ['leftDrawerOpen'],
  components: { ProjectsPage, SkillsPage, CVpage, ExperiencePage },
  data() {
    const tab = ref('Overview');
    return {
      tab,
    };
  },
});
</script>

<style scoped>
h4,
h6 {
  margin: 0;
}

.body_content {
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 10px;
  /* align-items: center; */
  padding-top: 2.3%;
}
.contact_me_btn {
  height: 40px;
  width: 100%;
  font-size: 1.1rem;
  background: #21262d;
  color: #c9d1d9;
  border-radius: 6px;
  outline: none;
  border: 0;
  cursor: pointer;
  transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
}
.contact_me_btn:hover {
  border: 1px solid rgb(255, 255, 255, 0.5);
}

.main_page {
  position: relative;
  background: #0d1117 !important;
}
.separator_line {
  /* z-index: -1 !important; */
  position: absolute;
  top: 9.6%;
  left: 0;
  width: 100%;
  background-color: grey;
  opacity: 0.2;
}

/* .bg__gradient {
  height: 800px;
  width: 800px;
  background-image: linear-gradient(
    90deg,
    #eb3434,
    #eb5e34,
    #eb8334,
    #eba434,
    #ebcc34,
    #ebeb34,
    #c3eb34,
    #89eb34,
    #58eb34,
    #34eb52,
    #34ebcc,
    #34d5eb,
    #34a8eb,
    #346beb,
    #3734eb,
    #7734eb,
    #a834eb,
    #eb34c3,
    #eb3489,
    #eb3461
  );
  filter: blur(500px);
  border-radius: 100%;
  background-size: 1000% 100%;
  opacity: 0.3;

  animation: gradient 10s infinite ease-out;

  transform: translateX(-50%) translateY(-50%);

  z-index: 0;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 100%;
  }
} */
</style>

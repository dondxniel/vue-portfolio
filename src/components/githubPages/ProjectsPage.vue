<template>
  <div class="projectPage">
    <div class="project" v-for="(project, index) in projects" :key="index">
      <div>
        <div class="image_container">
          <img :src="project.image" alt="" />
        </div>
        <div class="tags q-my-md">
          <div
            class="tag"
            :style="`border: 1px solid rgb(${tool.color})`"
            :onmouseover="`this.style.background='rgb(${tool.color},0.4)'`"
            :onmouseout="`this.style.background='none'`"
            v-for="(tool, i) in project.tools"
            :key="i"
          >
            {{ tool.name }}
          </div>
        </div>
        <h6>{{ project.name }}</h6>
        <p class="description">
          {{ project.description }}
        </p>
        <div class="actions">
          <q-btn icon="mdi-github" outline no-caps rounded label="Repo" />
          <q-btn
            icon="mdi-web"
            :href="project.live_link"
            target="_blank"
            outline
            no-caps
            rounded
            label="Live"
          />
          <!-- <q-btn
          icon="mdi-progress-wrench"
          color="red"
          outline
          no-caps
          rounded
          label="Progress"
        /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { ref } from 'vue';

export default {
  data() {
    return {
      projects: [
        {
          image: 'buyandsell.png',
          carousel: ['', '', ''],
          name: 'Personal Portfolio',
          description:
            'A portfolio website that shows information about me, my experience, projects, certifications and CV',
          tools: [
            {
              name: 'Vue Js',
              color: '76, 175, 80',
            },
            {
              name: 'Quasar',
              color: '0, 123, 205',
            },
            {
              name: 'Vuex',
              color: '76, 175, 80',
            },
            {
              name: 'Node Js',
              color: '76, 175, 80',
            },
            {
              name: 'MongoDB',
              color: '165, 42, 42',
            },
          ],
          github: '',
          live_link: '',
        },

        {
          image: 'buyandsell.png',
          carousel: ['', '', ''],
          name: 'Buy and Sell Commerce',
          description: 'A multi-vendor ecommerce platform',
          tools: [
            {
              name: 'Vue Js',
              color: '76, 175, 80',
            },
            {
              name: 'Vuex',
              color: '76, 175, 80',
            },
            {
              name: 'Node Js',
              color: '76, 175, 80',
            },
            {
              name: 'MongoDB',
              color: '165, 42, 42',
            },
            {
              name: 'Paystack',
              color: '0, 123, 205',
            },
          ],
          github: '',
          live_link: 'https://vue-ecomm.netlify.app/',
        },

        {
          image: 'buyandsell.png',
          carousel: ['', '', ''],
          name: 'Dneleade Store',
          description: 'A single-vendor router store',
          tools: [
            {
              name: 'Vue Js',
              color: '76, 175, 80',
            },
            {
              name: 'Quasar',
              color: '0, 123, 205',
            },
            {
              name: 'Pinia',
              color: '255, 255, 0',
            },
            {
              name: 'Firebase',
              color: '255, 165, 0',
            },
          ],
          github: '',
          live_link: '',
        },
        {
          image: 'buyandsell.png',
          carousel: ['', '', ''],
          name: 'EMIS',
          description:
            'A communication system within a specific organization to ease the pysical communication',
          tools: [
            {
              name: 'Vue Js',
              color: '76, 175, 80',
            },
            {
              name: 'Quasar',
              color: '0, 123, 205',
            },
            {
              name: 'Vuex',
              color: '76, 175, 80',
            },
            {
              name: 'Node Js',
              color: '76, 175, 80',
            },
            {
              name: 'MongoDB',
              color: '165, 42, 42',
            },
          ],
          github: '',
          live_link: '',
        },

        {
          image: 'buyandsell.png',
          carousel: ['', '', ''],
          name: 'Enmech Engineering',
          description:
            'A company website/portfolio for Enmech Engineering Company',
          tools: [
            {
              name: 'Vue Js',
              color: '76, 175, 80',
            },
            {
              name: 'Nuxt Js',
              color: '76, 175, 80',
            },
            {
              name: 'Pinia',
              color: '255, 255, 0',
            },
            {
              name: 'Firebase',
              color: '255, 165, 0',
            },
          ],
          github: '',
          live_link: '',
        },
      ],
    };
  },

  methods: {},
};
</script>

<style scoped>
.projectPage {
  padding: 2% 3%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}
.project {
  /* height: 40vh; */
  /* background: white; */
  border-radius: 10px;
  padding: 3% 3% 7%;
  /* transition: all 0.8s ease; */
}

.project:hover {
  background: rgba(255, 255, 255, 0.1);
  /* border-radius: 16px; */
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transform: translateZ(20px);
  /* border: 1px solid rgba(255, 255, 255, 0.3); */
}
.image_container {
  height: 25vh;
  border-radius: 10px;
}
.image_container img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.tags {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.tag {
  border-radius: 20px;
  display: flex;
  justify-content: center;
  padding: 0.5%;
  font-size: 0.75rem;
  cursor: pointer;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition-property: all;
}
h6 {
  margin: 2% 0;
  font-weight: bold;
}
.actions {
  display: flex;
  justify-content: left;
  gap: 10px;
  margin-top: 4%;
}
</style>

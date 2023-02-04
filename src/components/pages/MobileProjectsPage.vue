<template>
  <div class="projectPage text-white">
    <div class="project" v-for="(project, index) in projects" :key="index">
      <div>
        <div class="image_container">
          <!-- <img :src="project.image" alt="" /> -->
          <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            animated
            control-color="primary"
            style="height: 100%; width: 100%"
            class="rounded-borders"
            infinite
            autoplay
          >
            <q-carousel-slide
              v-for="(image, index) in project.carousel"
              :key="index"
              :name="'style' + index"
              style="height: 100%; width: 100%; padding: 0"
            >
              <img :src="image" alt="" style="height: 100%; margin: 0" />
            </q-carousel-slide>
          </q-carousel>
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
        <!-- <div class="actions">
          <q-btn
            v-show="project.github"
            icon="mdi-github"
            class="btn"
            :href="project.github"
            target="_blank"
            outline
            no-caps
            rounded
            label="Repo"
          />
          <q-btn
            v-show="project.live_link"
            icon="mdi-web"
            :href="project.live_link"
            target="_blank"
            outline
            no-caps
            rounded
            label="Live"
            class="btn"
          />
          <q-btn
            v-show="!project.github && !project.live_link"
            icon="mdi-progress-wrench"
            color="orange"
            outline
            no-caps
            rounded
            label="Progress"
          />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  // components: { Tilt },
  data() {
    return {
      slide: ref('style0'),
      // options: { speed: 10000 },
      // slide: ref(1),
      autoplay: ref(true),
      projects: [
        {
          image: 'nft/nft.png',
          carousel: ['nft/nft.png', 'nft/nft1.png', 'nft/nft2.png'],
          name: 'NFT Marketplace',
          description: 'An NFT Marketplace to view NFT, comments and sellers.',
          tools: [
            {
              name: 'Typescript',
              color: '76, 175, 80',
            },
            {
              name: 'ReactNative',
              color: '0, 123, 205',
            },
            {
              name: 'Expo',
              color: '255, 255, 0',
            },
          ],
          github: '',
          live_link: 'https://dondaniel.netlify.app/',
        },

        {
          image: 'smartlight/smartlight4.png',
          carousel: [
            'smartlight/smartlight.png',
            'smartlight/smartlight1.png',
            'smartlight/smartlight2.png',
            'smartlight/smartlight3.png',
            'smartlight/smartlight4.png',
            'smartlight/smartlight5.png',
            'smartlight/smartlight6.png',
            'smartlight/smartlight7.png',
            'smartlight/smartlight8.png',
            'smartlight/smartlight9.png',
          ],
          name: 'SmartLight',
          description:
            'A platform for purchase of Meter Units and monitoring of power usage within a house.',
          tools: [
            {
              name: 'Typescript',
              color: '76, 175, 80',
            },
            {
              name: 'ReactNative',
              color: '0, 123, 205',
            },
          ],
          github: '',
          live_link: 'https://vue-ecomm.netlify.app/',
        },

        {
          image: 'ppfn/ppfn.png',
          carousel: ['ppfn/ppfn.png', 'ppfn/ppfn1.png', 'ppfn/ppfn2.png'],
          name: 'Planned Parenthood Federation of Nigeria',
          description:
            'Planned Parenthood Federation of Nigeria mobile app to link patients with patients for consultation and diagnosis.',
          tools: [
            {
              name: 'Typescript',
              color: '76, 175, 80',
            },
            {
              name: 'ReactNative',
              color: '0, 123, 205',
            },
          ],
          github: '',
          live_link: 'https://dneleade.store',
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
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 0 10% 0 0;
}
.project {
  border-radius: 10px;
  padding: 3% 3% 7%;
  transition: all 0.8s ease;
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
  height: 80vh;
  border-radius: 10px;
  overflow: hidden;
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
.border {
  border: 1px solid red;
}

@media screen and (max-width: 1450px) {
  .tags {
    grid-template-columns: repeat(3, 1fr);
  }
  .projectPage {
    gap: 25px;
    padding: 0 5% 0 0;
  }
}

@media screen and (max-width: 1280px) {
  .projectPage {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 0 10% 0 0;
  }
}

@media screen and (max-width: 1050px) {
  .projectPage {
    padding: 0;
  }
}

@media screen and (max-width: 810px) {
  .projectPage {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 0 5% 0 0;
  }
}

@media screen and (max-width: 640px) {
  .projectPage {
    grid-template-columns: repeat(1, 80%);
    /* place-items: center; */
    /* justify-content: center; */
    gap: 15px;
    padding: 0 5% 0 3%;
  }
}

@media screen and (max-width: 500px) {
  .projectPage {
    grid-template-columns: repeat(1, 90%);
    justify-content: center;
    gap: 15px;
    padding: 0 5% 0 3%;
  }
  .tag {
    padding: 0.2%;
    font-size: 0.68rem;
  }

  .project h6 {
    font-size: 1.1rem;
  }
  .project p {
    font-size: 0.8rem;
  }

  .actions .btn {
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 430px) {
  .projectPage {
    grid-template-columns: repeat(1, 100%);
    justify-content: center;
    gap: 35px;
    padding: 0 2%;
  }
  .tag {
    padding: 0.2%;
    font-size: 0.68rem;
  }
}
</style>

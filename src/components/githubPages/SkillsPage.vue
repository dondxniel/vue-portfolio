<template>
  <div>
    <div class="skillsPage">
      <div class="skill text-center" v-for="(item, n) in skills" :key="n">
        <q-avatar size="5rem">
          <q-icon
            v-if="item.name !== 'Quasar' && item.name !== 'Netlify'"
            :name="item.icon"
            :color="item.color"
            size="4rem"
          />
          <img v-else style="height: 4rem; width: 4rem" :src="item.icon" />
        </q-avatar>

        <p class="text-subtitle1 text-bold">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { ref } from 'vue';
interface skill {
  name: string;
  icon: string;
  color: string;
}

const skills: skill[] = [
  {
    name: 'HTML',
    icon: 'mdi-language-html5',
    color: 'red-7',
  },
  {
    name: 'CSS',
    icon: 'mdi-language-css3',
    color: 'purple-4',
  },
  {
    name: 'Typescript',
    icon: 'mdi-language-typescript',
    color: 'blue-5',
  },
  {
    name: 'Javascript',
    icon: 'javascript',
    color: 'yellow',
  },

  {
    name: 'Nuxt Js',
    icon: 'mdi-nuxt',
    color: 'green-5',
  },
  {
    name: 'Vue Js',
    icon: 'fa-brands fa-vuejs',
    color: 'green',
  },
  {
    name: 'React Js',
    icon: 'fa-brands fa-react',
    color: 'blue',
  },
  {
    name: 'Vuetify',
    icon: 'mdi-vuetify',
    color: 'blue-6',
  },

  {
    name: 'Quasar',
    icon: 'favicon.ico',
    color: '',
  },
  {
    name: 'Tailwind',
    icon: 'mdi-tailwind',
    color: 'blue-6',
  },

  {
    name: 'GraphQL',
    icon: 'mdi-graphql',
    color: 'pink',
  },

  {
    name: 'Docker',
    icon: 'mdi-docker',
    color: 'cyan',
  },

  {
    name: 'Version Control',
    icon: 'mdi-github',
    color: '',
  },
  {
    name: 'Firebase',
    icon: 'mdi-firebase',
    color: 'orange',
  },
  {
    name: 'Netlify',
    icon: 'netlify.png',
    color: 'blue-5',
  },
];

export default {
  data() {
    return {
      skills,
    };
  },

  methods: {},
};
</script>

<style scoped>
p {
  margin: 2% 0;
  line-height: 1.2;
}
.skillsPage,
.tools {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 15px;
}

.skill {
  padding: 2% 0;
}
.skill:hover {
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  animation: shake 1.1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* animation: bounce 0.8s infinite alternate; */
/* @keyframes bounce {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-10px);
  }
} */
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-3px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(3px, 0, 0);
  }
}
</style>

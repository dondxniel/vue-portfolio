<template>
  <div class="main">
    <div class="numbers">
      <div class="text-right" v-for="number in height" :key="number">
        {{ number }}
      </div>
    </div>

    <div class="q-px-sm text-white" ref="text_content" id="text_content">
      <div class="top_text text-secondary">
        <span class="text-negative">import </span>
        <span class="text-info"
          ><span class="text-warning">{ </span> Tools
          <span class="text-warning">} </span></span
        >
        <span class="text-negative">from</span> 'portfolio'
      </div>
      <br />

      <!-- OPening of class  -->
      <div class="text-negative">
        export default <span class="text-primary">class </span>
        <span class="text-help">skillSet </span>
        <span class="text-primary">extends </span>
        <span class="text-help">Tools </span>
        <span class="text-warning">{ </span>
      </div>
      <!-- <br /> -->

      <!-- content  -->
      <!-- first array  -->
      <div class="text-comment">
        //This is an array of skills which includes frameworks, <br />
        libraries and technologies I'm familiar with
      </div>

      <div class="text-blue firstIndentation">
        <span class="text-primary">const</span> skills<span class="text-white"
          >: <span class="text-help">string[]</span> =
        </span>
        <span class="text-primary">[ </span>
      </div>

      <div class="content" v-for="(i, index) in skills" :key="index">
        <span class="text-secondary"> '{{ i }}'</span>
        <span class="text-white">,</span>
      </div>

      <div class="text-primary firstIndentation">
        ]<span class="text-white">,</span>
      </div>
      <br />

      <!-- second array  -->
      <div class="text-comment">
        //This is an array of tools which includes work tools and <br />
        technologies I have used to work
      </div>

      <div class="text-blue firstIndentation">
        <span class="text-primary">const</span> tools<span class="text-white"
          >: <span class="text-help">string[]</span> =
        </span>
        <span class="text-primary">[ </span>
      </div>

      <div class="content" v-for="(i, index) in tools" :key="index">
        <span class="text-secondary"> '{{ i }}'</span>
        <span class="text-white">,</span>
      </div>

      <div class="text-primary firstIndentation">]</div>

      <!-- end of class  -->
      <div class="text-warning">}</div>
    </div>
  </div>
</template>

<script lang="ts">
// import { ref } from 'vue';

const height: number | null = 0;

export default {
  data() {
    return {
      height,
      skills: [
        'Typescript',
        'Javascript',
        'Vue Js',
        'Nuxt Js',
        'Quasar',
        'React Js',
        'Next js',
        'Mongo DB',
        'Node.js',
        'Version Control',
        'GraphQL',
        'Firebase',
        'Tailwind',
      ],
      tools: [
        'Figma',
        'AdobeXd',
        'Slack',
        'Trello',
        'Discord',
        'Netlify',
        'Cpanel',
      ],
    };
  },

  methods: {
    setHeight() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const obj: any = this.$refs.text_content;
      const digit: number = obj.offsetHeight;
      this.height = Math.floor(digit / 21);
    },
  },
  async mounted() {
    await this.setHeight();
    window.addEventListener('resize', this.setHeight);
  },
  unmounted() {
    window.removeEventListener('resize', this.setHeight);
  },
};
</script>

<style scoped>
.main {
  display: flex;
  gap: 5px;
}

#text_content {
  font-size: 1rem;
  /* margin: 0.1% 0; */
  height: fit-content;
  /* padding-right: 15%; */
}

#text_content div {
  /* margin: 0.1% 0; */
}
.numbers {
  /* width: 10%; */
  display: grid;
  /* justify-content: center; */
  color: grey;
  font-size: 1rem;
}
.firstIndentation {
  text-indent: 15px;
}
.secondIndentation {
  text-indent: 55px;
}
.content {
  text-indent: 35px;
  /* display: flex; */
  gap: 10px;
}
.main_content {
  text-indent: 0px;
  /* text-align: justify; */
}
.icon_image {
  margin-left: 55px;
  height: 18px;
  width: 18px;
}
@media screen and (max-width: 950px) {
  #text_content,
  .numbers {
    font-size: 0.95rem;
  }
}
@media screen and (max-width: 830px) {
  .main {
    position: relative;
  }
  #text_content {
    white-space: nowrap;
    /* padding-left: 35px; */
  }
  /*
  .numbers {
    position: fixed !important;
    width: fit-content;
    left: 70px;
    background: #1e1e1e;
    padding-right: 2%;
    padding-left: 1%;
    padding-bottom: 5%;
  } */
}

@media screen and (max-width: 500px) {
  /* #text_content {
    white-space: nowrap;
    padding-left: 35px;
  }
  .numbers {
    position: fixed !important;
    height: fit-content;
    width: fit-content;
    left: 50px;
    background: #1e1e1e;
    padding-right: 2%;
    padding-left: 1%;
    padding-bottom: 5%;
  } */

  #text_content,
  .numbers {
    font-size: 0.85rem;
  }
  .firstIndentation {
    text-indent: 12px;
  }

  .content {
    text-indent: 30px;
  }
  .secondIndentation {
    text-indent: 50px;
  }
}
</style>

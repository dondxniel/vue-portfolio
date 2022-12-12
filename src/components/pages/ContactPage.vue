<template>
  <div class="main">
    <div class="numbers">
      <div class="text-right" v-for="number in height" :key="number">
        {{ number }}
      </div>
    </div>

    <div class="q-px-sm text-white" ref="text_content" id="text_content">
      <!-- OPening of class  -->
      <div class="text-comment">//Get in touch with me. 😃</div>

      <div>
        <span class="text-warning">{ </span>
      </div>

      <!-- content  -->

      <div class="content" v-for="(i, index) in contacts" :key="index">
        <span class="text-info">"{{ i.platform }}": </span>

        <a
          v-if="i.platform === 'email'"
          :href="`mailto:${i.item}`"
          class="text-secondary main_content"
        >
          '{{ i.item }}'<span class="text-white">,</span></a
        >
        <a
          v-else-if="i.platform === 'phone'"
          :href="`tel:${i.item}`"
          class="text-secondary main_content"
        >
          '{{ i.item }}'<span class="text-white">,</span></a
        >
        <a
          v-else
          :href="`https://www.${i.item}`"
          target="_blank"
          class="text-secondary main_content"
        >
          '{{ i.item }}'<span class="text-white">,</span></a
        >
      </div>

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
      contacts: [
        { platform: 'email', item: 'dondaniel028@gmail.com' },
        { platform: 'phone', item: '+2349023830868' },
        { platform: 'github', item: 'github.com/dondxniel' },
        {
          platform: 'linkedIn',
          item: 'https://www.linkedin.com/in/don-daniel-748414190/',
        },
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
  mounted() {
    this.setHeight();
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
  height: fit-content;
}

.numbers {
  display: grid;
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
  gap: 10px;
}
.main_content {
  text-indent: 0px;
}
.icon_image {
  margin-left: 55px;
  height: 18px;
  width: 18px;
}
a {
  text-decoration: none;
}
.content a:hover {
  color: yellow !important;
}
@media screen and (max-width: 950px) {
  #text_content,
  .numbers {
    font-size: 0.95rem;
  }
  .content {
    text-indent: 25px;
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

  .content {
    text-indent: 18px;
  }
}
</style>

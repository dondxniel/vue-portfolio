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
          ><span class="text-warning">{ </span> Certifications
          <span class="text-warning">} </span></span
        >
        <span class="text-negative">from</span> 'portfolio'
      </div>
      <br />
      <!-- <div class="text-primary">
        const <span class="text-blue">experiencePage</span>
        <span class="text-white"> = </span>
        <span class="text-warning">{ }</span>
      </div>
      <br /> -->
      <div>
        <div>
          <span class="text-primary">interface</span>
          <span class="text-help"> Certificates </span>
          <span class="text-warning">{</span>
        </div>
        <div
          v-for="(item, index) in interfaces"
          :key="index"
          class="firstIndentation"
        >
          <span class="text-info"
            >{{ item }}<span class="text-white">: </span></span
          >
          <span class="text-help">string</span>
          <span class="text-white">;</span>
        </div>

        <div class="text-warning">}</div>
      </div>
      <br />

      <!-- OPening of class  -->
      <div class="text-negative">
        export default <span class="text-primary">class </span>
        <span class="text-help">certificateList </span>
        <span class="text-primary">extends </span>
        <span class="text-help">Experience </span>
        <span class="text-warning">{ </span>
      </div>

      <!-- content  -->
      <div class="text-blue firstIndentation">
        <span class="text-primary">const</span> experiencePage<span
          class="text-white"
          >: <span class="text-help">Certificates[]</span> =
        </span>
        <span class="text-primary">[ </span>
      </div>
      <!-- <br /> -->
      <div class="text-comment comment">
        //This is an object that contains certifications of different kinds
        including <br />
        educational, hackthons, conferences & bootcamps
      </div>

      <div class="content" v-for="(i, index) in content" :key="index">
        <span class="text-negative">{ </span>
        <br />
        <div class="secondIndentation">
          <span class="text-info">{{ interfaces[0] }}: </span>
          <span class="text-secondary main_content">
            '{{ i.institute }}'<span class="text-white">,</span>
          </span>
        </div>
        <div class="secondIndentation">
          <span class="text-info">{{ interfaces[1] }}: </span>
          <span class="text-secondary main_content">
            '{{ i.type }}'<span class="text-white">,</span>
          </span>
        </div>
        <div class="secondIndentation">
          <span class="text-info">{{ interfaces[2] }}: </span>
          <span class="text-secondary main_content">
            '{{ i.date }}'<span class="text-white">,</span>
          </span>
        </div>
        <div class="secondIndentation">
          <span class="text-info">{{ interfaces[3] }}: </span>
          <span class="text-secondary main_content">
            '{{ i.location }}'<span class="text-white">,</span>
          </span>
        </div>
        <div class="text-negative content">
          }<span class="text-white">,</span>
        </div>
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
      content: [
        {
          institute: 'Kaduna State University',
          type: 'Bsc. in Computer Science.',
          date: 'September, 2016 to July, 2021.',
          location: 'Kaduna, Nigeria',
        },
        {
          institute: 'VUE.JS FORGE CONFERENCE',
          type: 'Frontend Developer Participant',
          date: 'July 2022',
          location: 'Amsterdam, Netherlands (REMOTE)',
        },
        {
          institute: 'HACKATHON ON FINDING SOLUTIONS TO INSECURITY',
          type: 'Participant/Frontend Developer',
          date: 'Jan. 2022',
          location: 'Kaduna, Nigeria',
        },
      ],
      interfaces: ['institute', 'type', 'date', 'location'],
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
  text-indent: 65px;
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
.comment {
  width: 100%;
  margin-left: 15px;
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
  .comment {
    margin-left: 12px;
  }

  .content {
    text-indent: 30px;
  }
  .secondIndentation {
    text-indent: 50px;
  }
}
</style>

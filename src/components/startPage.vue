<template>
  <q-page class="position-relative flex flex-center start_container">
    <div v-if="!terminal" class="text-white start_page start_for_folder">
      <div class="firstheader row items-center q-pl-md">
        <div class="text-h5 text-bold">Portfolio Folder</div>
      </div>
      <div class="secondheader row items-center q-pl-md">
        <div class="row items-center">
          <div
            v-for="(crumb, index) in breadcrumbs"
            :key="index"
            :class="crumb.name === 'Folder' && secondLayer ? 'text-blue' : ''"
          >
            <span class="q-mx-xs" v-if="index >= 1">/</span>
            <span class="q-mr-sm" v-if="crumb.icon">
              <q-icon size="1.1rem" :name="crumb.icon" />
            </span>
            <span
              class="breadcrumb_text"
              @click="closeSecondLayer"
              :class="crumb.name === 'Folder' && secondLayer ? 'crumb' : ''"
              >{{ crumb.name }}</span
            >
          </div>
        </div>
      </div>
      <div class="folders" v-if="firstLayer">
        <q-icon
          class="folder_icon"
          @click="openSecondLayer"
          name="mdi-folder"
          size="4rem"
        />
        <div class="text-h6 text-bold">Don Daniel</div>
      </div>

      <div class="row text-center" v-if="secondLayer">
        <div class="folders">
          <q-icon
            class="folder_icon"
            color="white"
            name="mdi-file-code-outline"
            size="4rem"
            @click="terminal = true"
          />
          <div class="text-h6 text-bold">Portfolio</div>
        </div>
        <div class="folders">
          <a
            href="https://docs.google.com/document/d/1yMtuM5jornNAzPPXsUuDL5_7-LeZdbd1dv4JMVoS7fw/edit?usp=sharing"
            target="_blank"
          >
            <q-icon
              class="folder_icon"
              color="white"
              name="mdi-file"
              size="4rem"
            />
          </a>
          <div class="text-h6 text-bold">CV</div>
        </div>
      </div>
    </div>

    <div v-else class="start_page terminal text-grey q-pa-md">
      <v-typical
        class="typical_text first_typed"
        :steps="[
          'Microsoft Inspired Themed [ Version 1.0.0.0 ] (c) Don Daniel 2022. All rights reserved',
        ]"
        :loop="1"
        :wrapper="'h2'"
      ></v-typical>

      <br />

      <v-typical
        class="blink typical_text"
        :steps="[
          8000,
          `C:/Windows/Portfolio Folder/Don Daniel/Portfolio> code .`,
          kol,
        ]"
        :loop="1"
        :wrapper="'h2'"
      ></v-typical>
    </div>
  </q-page>
</template>

<script>
import VTypical from 'vue-typical';
export default {
  components: {
    VTypical,
  },
  data() {
    return {
      firstLayer: true,
      secondLayer: false,
      terminal: false,
      breadcrumbs: [
        {
          name: 'Folder',
          icon: 'mdi-folder',
        },
      ],
    };
  },
  methods: {
    openSecondLayer() {
      this.firstLayer = false;
      this.secondLayer = true;
      let newObj = {
        name: 'Don Daniel',
        icon: '',
      };
      this.breadcrumbs.push(newObj);
    },
    closeSecondLayer() {
      // console.log('please');
      if (this.secondLayer) {
        this.secondLayer = false;
        this.firstLayer = true;
        this.breadcrumbs = [
          {
            name: 'Folder',
            icon: 'mdi-folder',
          },
        ];
      }
    },
    kol() {
      setTimeout(() => {
        this.$router.push('/vscode-themed');
      }, 3000);
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap');
.crumb:hover {
  cursor: pointer;
  text-decoration: underline;
}
.folder_icon {
  color: #ffc107;
  padding: 0 !important;
  cursor: pointer;
}
.start_container {
  height: 100vh;
}
.start_page {
  height: 50%;
  width: 55%;
  background: rgb(245, 245, 245, 0.07);
  margin: auto 0;
  border-radius: 4px;
  /* color: black !important; */
  font-family: 'Roboto', '-apple-system', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
}

.terminal {
  background: black;
  border: 10px solid rgb(128, 128, 128, 0.5);
}
.folders a {
  color: white;
  text-decoration: none;
}

.folders {
  padding: 2%;
}
.firstheader {
  height: fit-content;
  padding-top: 1%;
  padding-bottom: 1%;
  width: 100%;
  background-color: rgb(128, 128, 128, 0.2);
  border-radius: 4px;
}
.secondheader {
  height: fit-content;
  padding-top: 1%;
  padding-bottom: 1%;
  width: 100%;
  background-color: rgb(128, 128, 128, 0.4);
  border-radius: 4px;
}

.first_typed {
  /* width: 53%; */
}

.typical_text {
  font-size: 1.25rem !important;
  line-height: 1.3;
  font-weight: 600;
  margin: 0;
  font-family: 'Inconsolata', monospace;
}

.blink::after {
  content: '_';
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@media screen and (max-width: 1300px) {
  .start_page {
    height: 50%;
    width: 70%;
  }
}

@media screen and (max-width: 1150px) {
  .start_page {
    height: 50%;
    width: 80%;
  }
}

@media screen and (max-width: 770px) {
  .folder_icon {
    font-size: 2.8rem !important;
  }
  .folders div {
    font-size: 1rem !important;
    line-height: normal;
    /* margin: 1% 0 0; */
  }
  .start_for_folder {
    height: 35% !important;
    width: 75% !important;
  }
  .firstheader div {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 750px) {
  .typical_text {
    font-size: 1.15rem !important;
  }
  .start_page {
    height: 50%;
    width: 85%;
  }
}

@media screen and (max-width: 580px) {
  .start_for_folder {
    height: 35% !important;
    width: 85% !important;
  }
  .folders {
    padding: 3%;
  }
}

@media screen and (max-width: 500px) {
  .typical_text {
    font-size: 1rem !important;
  }
  .start_page {
    height: 30%;
    width: 85%;
  }
  .terminal {
    border: 6px solid rgb(128, 128, 128, 0.5);
  }
}

@media screen and (max-width: 430px) {
  .start_for_folder {
    height: 30% !important;
    width: 85% !important;
  }
}

@media screen and (max-width: 410px) {
  .typical_text {
    font-size: 0.9rem !important;
  }
  .start_page {
    height: 25%;
    width: 90%;
  }
  .typical_text {
    font-weight: 700;
  }
  .firstheader,
  .secondheader {
    padding-top: 2%;
    padding-bottom: 2%;
  }
  .folder_icon {
    font-size: 2.3rem !important;
  }
  .firstheader div {
    font-size: 1.05rem;
  }
  .breadcrumb_text {
    font-size: 0.85rem !important;
  }
  .folders div {
    font-size: 0.9rem !important;
  }
  .folders {
    padding: 5% 3%;
  }
  .start_for_folder {
    height: 35% !important;
    width: 90% !important;
  }
}

@media screen and (max-width: 350px) {
  .start_page {
    height: 28%;
    width: 93%;
  }
  .terminal {
    border: 4px solid rgb(128, 128, 128, 0.5);
  }
}
</style>

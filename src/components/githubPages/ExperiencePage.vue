<template>
  <div>
    <div class="experiencePage">
      <div class="experience" tabindex="0" v-for="n in 4" :key="n">
        <div class="first row flex-center">
          <h3>Company Name</h3>
        </div>
        <div class="second scene-1">
          <h5 class="text-git-text">Frontend Developer & Tutor</h5>
          <h6 class="text-bold text-grey-6">
            Company Name <span class="text-subtitle2">( Period of Work )</span>
          </h6>

          <div class="text-git-text text-subtitle1">
            <p>Major responsibilities/achiveiments</p>
            <ul>
              <li>- one</li>
              <li>- one</li>
              <li>- one</li>
            </ul>
          </div>
        </div>

        <div class="number"><span v-if="n < 10">0</span>{{ n }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { ref } from 'vue';

export default {
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
h5,
h3,
h6,
p {
  margin: 0;
}
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
.experience {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transform: translateZ(20px);
  /* border: 1px solid rgba(255, 255, 255, 0.3); */
  height: fit-content;
  margin: 4% 0;
  position: relative;
  padding: 3%;
}
h5 {
  font-weight: 600;
  font-size: 1.8rem;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.number {
  font-family: 'Alfa Slab One', cursive;
  font-size: 4rem;
  font-weight: bold;
  position: absolute;
  top: 5%;
  right: 5%;
  color: rgb(128, 128, 128, 0.25);
}

.first {
  padding: 10%;
}

.second {
  // display: none;
  transform: translateX(0);
  transition: all 2s ease;
}

.experience:hover {
}
</style>

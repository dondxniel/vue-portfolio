<template>
  <div class="aboutPage text-white">
    <h1>Don Daniel</h1>
    <div class="about q-my-md">
      <h2>About</h2>
      <p>
        I'm a Frontend enthusiast, who enjoys creating and birthing designs that
        solve real challenges in the society at large.
      </p>
      <p>
        Working over the years in Tech as a Frontend developer has been
        interesting. I have been involved and priviledged to work with different
        teams and organizations, during which i have come accross different
        methods and approaches to the developing software. Coming accross new
        technologies are always interesting to me as it helps increase my
        options and makes me better in what I do.
      </p>
    </div>

    <div class="about q-my-md">
      <h2>Personal Qualities</h2>
      <p>- Open Minded and Inquisitive</p>
      <p>- Fast and Smart Learner</p>
      <p>- Time Conscious</p>
      <p>- Dedicated</p>
    </div>

    <div class="about q-my-md">
      <h2>Connect with me</h2>
      <div class="connect">
        <q-btn round flat>
          <q-avatar class="avatar" size="40px">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/don-daniel-748414190/"
            >
              <q-icon class="icon-linkedin" name="mdi-linkedin" />
            </a>
          </q-avatar>
        </q-btn>

        <q-btn round flat>
          <q-avatar class="avatar" size="40px">
            <a target="_blank" href="https://github.com/dondxniel">
              <q-icon class="icon-github" name="mdi-github" />
            </a>
          </q-avatar>
        </q-btn>

        <q-btn round flat>
          <q-avatar size="40px" class="gmail_background avatar">
            <a target="_blank" href="mailto:dondaniel028@gmail.com">
              <q-icon class="icon-gmail" name="mdi-gmail" />
            </a>
          </q-avatar>
        </q-btn>
      </div>
    </div>

    <div class="about q-my-md">
      <h2>About This Portfolio</h2>
      <p>
        After coming accross and researching different types of Frontend
        developers' websites, I stumbled on a certain one named "
        <span><a target="_blank" href="https://www.khagan.dev">Khagan</a></span
        >". Seeing how simple and attractive it was, I thought to myself that I
        should also come up with something similar.
      </p>
      <p>
        This whole ideation then came one afternoon at the begining of the month
        of November, 2022. I was on my PC doing some code writings and it
        clicked, I thought to myself this would be cool and so relateable by
        others and yet simple. I really wanted to do more than what I have
        presently put up, but I would have defeated the purpose of making it
        simply (that's what I thoght) and also why delay when I could also
        release different versions and add new improvements.
      </p>
      <p>
        I am happy with this concept in which I have presented or built my
        portfolio website in, and I think it's really cool.
      </p>
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

<style scoped>
h1,
h2,
p {
  margin: 0;
}
.aboutPage {
  padding: 0 1%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans',
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
}

.aboutPage h1,
.aboutPage h2 {
  font-size: 2rem;
  line-height: 1.5;
  font-weight: bold;
}

.aboutPage h2 {
  font-size: 1.5rem;
  margin: 1% 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  transition-duration: 0.9s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  transition-property: all;
}

.aboutPage h2::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: orange;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.aboutPage h2:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.aboutPage p {
  font-size: 1rem;
  font-weight: 400;
  color: rgb(255, 255, 255, 0.8);
}
.about {
  width: 65%;
}

.about a {
  color: orange;
  text-decoration: none;
}

.connect a {
  color: white;
}

.connect {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  padding: 1.5% 5%;
  width: fit-content;
  display: flex;
  gap: 15px;
  margin-top: 3%;
}
.icon-twitter:hover {
  color: #00acee;
}

.gmail_background {
  transition: all 0.4s ease-in-out !important;
}
.gmail_background:hover {
  background-color: white !important;
  color: #ea4335;
}

.icon-linkedin:hover {
  color: #00a0dc;
}

@media screen and (max-width: 1300px) {
  .about {
    width: 90%;
  }
}

@media screen and (max-width: 1000px) {
  .about {
    width: 100%;
  }
}

@media screen and (max-width: 580px) {
  .aboutPage h1 {
    font-size: 1.7rem;
  }
  .aboutPage h2 {
    font-size: 1.3rem;
    margin-top: 2%;
  }
  .aboutPage h1,
  .aboutPage h2 {
    line-height: 1.4;
  }
}
@media screen and (max-width: 500px) {
  p {
    font-size: 0.93rem !important;
  }
}

@media screen and (max-width: 405px) {
  .avatar {
    font-size: 35px !important;
  }
  .connect {
    padding: 1.5% 3%;
    gap: 8px;
    margin-top: 3%;
  }
}
</style>

<template>
  <v-container fluid class="d-flex flex-column align-center justify-center" style="height: 100vh;">
    <v-container fluid>
    <v-row class="d-flex justify-space-between">
      <v-col cols="6"></v-col>
      <v-col cols="6" class="d-flex flex-column align-end justify-center" style="font-size: 21px;">
        <v-subtitle1 class="font-weight-medium">Anton</v-subtitle1>
        <v-sheet class="d-flex align-center justify-center">
          <v-subtitle1 class="mr-2 font-weight-medium">1000</v-subtitle1>
          <v-img
            :width="25"
            :height="24"
            cover
            src="src/assets/coin.png"
          ></v-img>
        </v-sheet>
      </v-col>
    </v-row>
    </v-container>
    <v-container>
      <v-row class="d-flex space-between" fluid>
        <v-col>
          <v-sheet class="d-flex align-center">
            <button class="icon__button" disabled>
              <v-img
                :width="25"
                :height="25"
                cover
                src="src/assets/close_btn.png"
              ></v-img>
            </button>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="d-flex align-center justify-center">
            <div v-if="jsonData" class="d-flex flex-column align-center justify-center" style="word-wrap: break-word;">
                <v-card-title class="text-h6 font-weight-normal">{{ jsonData.conditions }}</v-card-title>
                <v-card-title class="text-h5 font-weight-normal">{{ jsonData.text }}</v-card-title>
            </div>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="d-flex align-center justify-end">
            <button class="icon__button" @click="openModal">
              <v-img
                :width="25"
                :height="25"
                cover
                src="src/assets/bulb.png"
              ></v-img>
            </button>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <v-row class="d-flex align-center">
      <v-img
        :width="731"
        :height="120"
        aspect-ratio="16/9"
        cover
        src="src/assets/task_img.png"
      ></v-img>
    </v-row>
    <v-container fluid style="background-color: #dddce0;">
      <v-row v-if="jsonData">
        <v-row class="pa-3">
          <v-col v-for="(option, index) in jsonData.answer_options" :key="index">
            <v-sheet class="option bg-transparent">
              <input class="input" type="radio" :value="option" v-model="selectedOption" name="btn">
              <button class="btn">{{ option }}</button>
            </v-sheet>
          </v-col>
          <v-col xs="2" lg="1">
            <v-sheet class="bg-transparent">
              <button class="button" @click="checkAnswer">Check</button>
            </v-sheet>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
    <div v-if="modalVisible" class="dark-layout" :class="{ 'dark-layout-show': modalVisible, 'dark-layout-hide': !modalVisible }" @click="closeModal">
      <div class="modal">
        <div class="d-flex">
          <button class="icon__button" @click="closeModal">
            <v-img
              :width="25"
              :height="25"
              aspect-ratio="16/9"
              cover
              src="src/assets/close_btn.png"
            ></v-img>
          </button>
        </div>
        <v-card-title class="text-h5 font-weight-normal">This is a modal window</v-card-title>
      </div>
    </div>
    </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      selectedOption: null,
      modalVisible: false
    };
  },
  computed: {
    ...mapState(['jsonData'])
  },
  created() {
    this.fetchJsonData();
  },
  methods: {
    checkAnswer() {
      if (this.selectedOption === this.jsonData.correct_answer) {
        alert('Correct!');
      } else {
        alert('Wrong!');
      }
      this.selectedOption = null;
    },
    toggleModal() {
      this.modalVisible = !this.modalVisible;
    },
    openModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    ...mapActions(['fetchJsonData']),
  }
};
</script>

<style>
.cont-b{
  border: 5px solid #111;
}
.cont {
  border: 5px solid #111;
  height: 100vh;
}
.option {
  display: flex;
  position: relative;
  top: 0px;
  left: 0px;
}
.input {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  appearance: none;
}
.btn {
  width: 100%;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #e6ebf3;
  cursor: pointer;
  transition: 0.2s ease;
  box-shadow: 0px 5px 2px #bcbfd0;
}
.input:checked + .btn {
  border-color: #646cff;
  box-shadow: 0px 0px 2px #bcbfd0;
}
.button {
  width: 100%;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #e6ebf3;
  cursor: pointer;
  transition: 0.2s ease;
  box-shadow: 0px 5px 2px #bcbfd0;
}
.button:hover {
  border-color: #646cff;
  box-shadow: 0px 0px 2px #bcbfd0;
}
.icon__button {
  display: flex;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #e6ebf3;
  cursor: pointer;
  transition: 0.2s ease;
  box-shadow: 0px 5px 2px #bcbfd0;
}
.icon__button:hover {
  box-shadow: 0px 0px 2px #bcbfd0;
}



.dark-layout {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(10, 10, 10, 0.5);
}
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 1rem;
  padding: 1rem;
  background-color: #eee;
}
.dark-layout-show {
  animation: showAnim 0.1s ease forwards;
}
.dark-layout-hide {
  animation: hideAnim 0.1s ease forwards;
}
@keyframes showAnim {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes hideAnim {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
</style>
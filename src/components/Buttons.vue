<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-6 d-flex justify-content-between"></div>
      <div class="col-xs-6 d-flex justify-content-between user__data">
        <p>Anton</p>
        <div class="flex__content">
          <p>1000</p>
          <img class="square__icon" src="../assets/coin.png" />
        </div>
      </div>
    </div>
    <div class="flex__between">
      <button class="icon__button" disabled>
        <img class="square__icon" src="../assets/close_btn.png" />
      </button>
      <div v-if="jsonData">
        <h3>{{ jsonData.conditions }}</h3>
        <h2>{{ jsonData.text }}</h2>
      </div>
      <button class="icon__button" @click="openModal">
        <img class="square__icon" src="../assets/bulb.png" />
      </button>
    </div>
    <div>
      <img src="../assets/task_img.png" />
    </div>
    <div class="row" v-if="jsonData">
      <div class="row">
        <label v-for="(option, index) in jsonData.answer_options" :key="index" class="option">
          <input class="input" type="radio" :value="option" v-model="selectedOption" name="btn">
          <button class="btn">{{ option }}</button>
        </label>
      </div>
      <div class="">
        <button class="button" @click="checkAnswer">Check</button>
      </div>
    </div>
    <div v-if="modalVisible" class="dark-layout" :class="{ 'dark-layout-show': modalVisible, 'dark-layout-hide': !modalVisible }" @click="closeModal">
      <div class="modal">
        <div class="flex__between">
          <div></div>
          <button class="icon__button" @click="closeModal">
            <img class="square__icon" src="../assets/close_btn.png" />
          </button>
        </div>
        <h2>This is a modal window</h2>
      </div>
    </div>
  </div>
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
.option {
  display: flex;
  width: 100%;
  height: 100%;
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




.user__data {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.flex__content {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.flex__between {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
}
.options {
  background-color: #dcdde0;
  width: 100%;
  padding: 18px;
}
.button {
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
.square__icon {
  width: 16px;
  height: 16px;
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
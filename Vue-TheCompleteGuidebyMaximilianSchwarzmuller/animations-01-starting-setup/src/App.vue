<template>
  <router-view v-slot="someProps">
    <transition name="fade-button" mode="out-in">
      <component :is="someProps.Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      isAnimate: false,
      randomText: false,
      isUsersVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    enterCancelled(el) {
      console.log('enterCancelled');
      console.log(el);
      clearInterval(this.enterInterval);
    },
    leaveCancelled(el) {
      console.log('leaveCancelled');
      console.log(el);
      clearInterval(this.leaveInterval);
    },
    beforeEnter(el) {
      console.log('beforeLeave');
      console.log(el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter' + ' ...Wait for 2 seconds to run afterEnter');
      console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.error('afterEnter');
      console.log(el);
    },
    beforeLeave(el) {
      console.log('beforeLeave');
      console.log(el);
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('leave' + ' ...Wait for 3 seconds to run afterLeave');
      console.log(el);
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 30);
    },
    afterLeave(el) {
      console.error('afterLeave');
      console.log(el);
    },
    setShowUsers() {
      this.isUsersVisible = true;
    },
    setHideUsers() {
      this.isUsersVisible = false;
    },
    toggleRandomText() {
      this.randomText = !this.randomText;
    },
    resetAnimate() {
      this.isAnimate = false;
    },
    setAnimate() {
      this.isAnimate = true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.btn-default {
  background-color: #c7ccd1;
  color: #000;
}
.btn-default:hover,
.btn-default:active {
  background-color: #8d8f93;
  border-color: #8d8f93;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-in; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-120px); */
  animation: slide-fade 0.5s ease-out forwards;
}

.reset-animate {
  transform: translateX(0px);
}

@keyframes slide-fade {
  0% {
    transform: translateX(0px) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

/* .v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.v-enter-active {
  transition: all 2s ease-out;
}

.v-enter-to {
  opacity: 1;
  transform: translateY(0);
} */

/* .v-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-active {
  transition: all 3s ease-in;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
} */

.route-enter-active {
  animation: slide-fade 0.5s ease-out;
}

.route-leave-active {
  animation: slide-fade 0.5s ease-in;
}

.fade-button-enter-from,
.fade-button-leave-from {
  opacity: 1;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-to {
  opacity: 0;
}
</style>

<template>
  <div class="page flex">
    <header class="primary-header flex">
      <div>
        <a href="#"
          ><img class="logo" src="./assets/give-sm.png" alt="give logo"
        /></a>
      </div>

      <nav>
        <ul
          id="primary-navigation"
          ref="visibility"
          data-visible="false"
          class="nav primary-navigation flex"
        >
          <li class="active-nav nav-a">
            <router-link to="/">home</router-link>
          </li>
          <li class="nav-a">
            <router-link to="/inspiration">inspiration</router-link>
          </li>
          <li class="nav-a">
            <router-link to="/profile">profile</router-link>
          </li>
          <li class="nav-a">
            <router-link to="login">login</router-link>
          </li>
        </ul>
      </nav>

      <button
        data-visible="false"
        @click="toggle"
        class="mobile-nav-toggle"
      ></button>
    </header>
    <router-view />
    <footer>
      <a href="https://github.com/Jacob-Zinn/aws/tree/master/jacobpzinn-web/give/vue/give"
        ><img src="./assets/GitHub_Logo.png"
      /></a>
    </footer>
  </div>
</template>

<script lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const windowSize = ref({ x: 0, y: 0 });
    const resizeListener = () => {
      ({ innerWidth: windowSize.value.x, innerHeight: windowSize.value.y } =
        window);
    };
    onMounted(() => window.addEventListener("resize", resizeListener));
    onUnmounted(() => window.removeEventListener("resize", resizeListener));
    resizeListener();

    const testing = computed(function learning() {
      console.log("testing");
      console.log(windowSize.value.x);
      console.log(windowSize.value.y);
      return windowSize.value.x;
    });

    let visibility = ref(false);
    console.log(visibility);
    function toggle() {
      if (visibility.value === false) {
        alert("visible");
        // primaryNav.setAttribute("data-visible", true);
        // navToggle.setAttribute("data-visible", true);
      } else {
        alert("not visibile");
        // primaryNav.setAttribute("data-visible", false);
        // navToggle.setAttribute("data-visible", false);
      }
    }
    
    return {
      visibility,
      toggle,
      windowSize,
    };
  },
};
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  --primary: #f2a488;
  --primary-dark: #2d3142;
  --primary-orange: #ff8b03;
  --dark-blue: #4c87a6;
  --dark-tan: #c7887f;
  --dark-purple: #734a51;
  --error: #ff0033;
  --primary-gradient: linear-gradient(
    to bottom right,
    var(--primary-orange),
    #c7887f,
    var(--primary)
  );
  --gray: rgb(128, 128, 128);
  --light-gray: rgb(169, 169, 169);
  --lighter-gray: rgb(211, 211, 211);
  --dark-gray: rgb(105, 105, 105);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* font-family: Arial, Helvetica, sans-serif; */
  font-family: "Lato", sans-serif;
}

body {
  overflow-x: hidden;
}

.button {
  padding: 0.5em 1em;
  border-radius: 2em;
  border: solid 1px var(--primary);
  color: var(--primary);
  text-decoration: none;
  background-color: transparent;
}

.button:hover {
  background-image: var(--primary-gradient);
  text-decoration: none;
  background-image: var(--primary-gradient);
  color: white;
}

button:focus {
  outline: none;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: none;
  color: inherit;
}

.flex {
  display: flex;
  gap: var(--gap, 1rem);
}

.flex-wrap {
  flex-wrap: wrap;
}

.grid {
  display: grid;
  gap: var(--gap, 1rem);
}

.text-white {
  color: white;
}

.text-error {
  color: var(--error);
}

.text-color-primary {
  color: var(--primary);
}

.text-color-primary-dark {
  color: var(--primary-dark);
}

.text-gray {
  color: var(--gray);
}

.page {
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

/* NAVIGATION */

.primary-header {
  align-items: center;
}

.logo {
  margin: 2rem;
  height: 2.3rem;
  object-fit: contain;
}

.primary-navigation {
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1000;
  background-color: transparent;
  backdrop-filter: blur(0.6rem);
}

.nav-a {
  padding-bottom: 0.5em;
}

.nav-a:hover {
  border-bottom: var(--primary) 2px solid;
}

.active-nav {
  border-bottom: var(--primary) 2px solid;
  font-weight: 800;
}

@media (max-width: 35em) {
  .primary-navigation {
    position: fixed;
    inset: 0 0 0 40%;
    --gap: 2.5rem;
    background-color: hsl(0, 0%, 0%, 0.35);
    flex-direction: column;
    padding: min(30vh, 10rem) 2em;
    transform: translateX(100%);
    transition: transform 250ms ease-out;
  }
  .primary-navigation[data-visible="true"] {
    transform: translateX(0%);
  }
  .mobile-nav-toggle {
    position: absolute;
    display: block;
    background-image: url("./assets/menu_black_24dp.svg");
    top: 2rem;
    width: 2rem;
    background-repeat: no-repeat;
    background-color: transparent;
    aspect-ratio: 1;
    border: 0;
    right: 2rem;
    z-index: 9999;
  }
  .mobile-nav-toggle[data-visible="true"] {
    background-image: url(./assets/close_black_24dp.svg);
    -webkit-filter: invert(100%);
  }
  .active-nav {
    border-bottom: 0;
  }
  .active-nav a {
    border-bottom: var(--primary) 2px solid;
  }
  .nav-a a {
    color: white;
  }
  .nav-a a:hover {
    border-bottom: var(--primary) 2px solid;
  }
  .nav-a:hover {
    border: none;
  }
}

@media (min-width: 35em) {
  html {
    font-size: 18px;
  }
}



/* FOOTER */

footer {
  background-color: white;
  color: white;
  height: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  width: 100%;
}

footer a {
  display: flex;
  align-items: center;
}

footer img {
  width: 4em;
}

@media (max-width: 40em) {
  .content {
    width: 80vw;
  }
  .inspiration-title h1 {
    font-size: 1.3rem;
  }
  .inspiration-title h4 {
    font-size: 0.8rem;
  }
}
</style>

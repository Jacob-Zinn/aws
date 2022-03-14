<template>
  <main class="flex">
    <div class="content flex">
      <div class="flex title">
        <h1 @click="showSugg = !showSugg">give</h1>
        <div id="give-suggestion-container">
          <Transition name="slide-fade">
            <h1 v-if="showSugg" @click="insertQuote(sugg1)" class="give-suggestion">{{ sugg1 }}</h1>
          </Transition>
          <Transition name="slide-fade">
            <h1 v-if="showSugg == false" @click="insertQuote(sugg2)" class="give-suggestion">
              {{ sugg2 }}
            </h1>
          </Transition>
        </div>
      </div>
      <p class="description">
        A simple site that gives you an excuse to change the world. Type any
        message you'd like, and we'll help you share it with anyone you'd like.
      </p>

      <div class="input-title">
        <p>message</p>
      </div>
      <search-bar :insertText="suggText" hintTextProp="i.e. I like the way you laugh" />
      <div class="input-title">
        <p>to:</p>
      </div>
      <search-bar hintTextProp="i.e. Tagg the man" />
      <div class="input-title">
        <p>from:</p>
      </div>
      <search-bar hintTextProp="i.e. Jacob" />

      <div>
        <button id="previewBtn" class="button">
          <p>preview message</p>
        </button>
      </div>

      <div id="messagePreview"></div>
    </div>
  </main>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import SearchBar from "../components/SearchBar.vue";
import utils from '../lib/utils';

export default {
  components: { SearchBar },
  setup() {
    
    let showSugg = ref(true);
    let sugg1 = ref(`...more`);
    let sugg2 = ref(`...happiness`);
    let suggText = ref("");

    let suggestionInterval: any = null;

    const insertQuote = function(matchWord: string) {
      utils.getQuote(matchWord).then((newQuote) => {suggText.value = newQuote});
    }

    onMounted(function () {
      startWordTranslationAnimation();
    });

    onBeforeUnmount(function () {
      clearInterval(suggestionInterval);
    });

    const startWordTranslationAnimation = async function () {
      try {
        const wordArray = await getNewSuggestion();
        console.log(suggestionInterval);
        suggestionInterval = setInterval(() => {
          changeGiveSuggestion(wordArray);
        }, 4000);
      } catch (error) {
        console.log(error);
      }
    };

    const changeGiveSuggestion = function (wordArray: any) {
      console.log("changing give suggestions");

      if (showSugg.value) {
        sugg2.value = wordArray[utils.getRandomInt(Object.keys(wordArray).length)].word;
      } else {
        sugg1.value = wordArray[utils.getRandomInt(Object.keys(wordArray).length)].word;
      }
      showSugg.value = !showSugg.value
    };

    const getNewSuggestion = async function () {
      let rand = utils.getRandomInt(10);
      console.log(rand);

      const baseUrl = process.env.VUE_APP_BASE_URL;
      const url = baseUrl + `kindWords.txt`;
      return await fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
          return json; // array
        });
    };

    return {
      showSugg,
      sugg1,
      sugg2,
      suggText,
      insertQuote
    };
  },
};
</script>



<style 
SearchBarscoped>
main {
  justify-content: center;
}

.content {
  width: 55vw;
  flex-direction: column;
}

.title {
  padding: 0;
  margin: 0;
}

#give-suggestion-container {
  position: relative;
  inset: 0 0 0 0;
  width: 100%;
}

.give-suggestion {
  position: absolute;
  text-shadow: 2px 2px var(--lighter-gray);
  color: var(--primary);
  border-bottom: solid 1px var(--primary);
}

#give-suggestion:hover {
  cursor: pointer;
}

.description {
  color: var(--gray);
}

.button p {
  padding: 0 0.3rem;
}

.input-title p {
  font-weight: 200;
  color: var(--light-gray);
  margin-top: 0.4rem;
}

#previewBtn {
  margin-top: 0.5rem;
}

.slide-fade-enter-active {
  transition: opacity 0.9s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.9s cubic-bezier(0, 0.55, 0.45, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(3rem);
  opacity: 0;
}
</style>

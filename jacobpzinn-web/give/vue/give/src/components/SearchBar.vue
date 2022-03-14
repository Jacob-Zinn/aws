<template>
  <p class="searchbar" :style="{ color: hintTextColor }" @click="clearHintText">
    <span
      class="textarea"
      role="textbox"
      :style="{ content: hintText }"
      contenteditable
    >
      {{ hintText }}
    </span>
  </p>
  <!--  :style="{ :empty::before: hintText }" -->
</template>

<script lang="ts">
import { computed, ref } from "vue";

export default {
  props: {
    hintTextProp: String,
    insertText: String,
  },
  setup(props: any) {
    const hintTextColor = ref("var(--light-gray)");
    let hideText = ref(false);

    const clearHintText = function () {
      hideText.value = true;
      hintTextColor.value = "black";
    };

    let hintText = computed(() => {
      if (props.insertText != null && props.insertText.length > 0){
        clearHintText();
        return props.insertText;
      } else if (hideText.value) {
        return "";
      } else {
        return props.hintTextProp;
      } 
    });

    return {
      hintTextColor,
      hintText,
      clearHintText,
      hideText,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* SEARCH BAR */

.searchbar {
  border: none;
  font-size: 16px;
  outline: none;
}

.textarea {
  display: block;
  width: 100%;
  overflow: hidden;
  resize: both;
  padding: 6px 18px;
  border-radius: 30px;
  border: 1px solid var(--primary);
}

.altborder {
  border: 1px solid var(--error);
}

.textarea:hover {
  box-shadow: 1px 1px 8px 1px #dcdcdc;
}

.textarea:focus-within {
  box-shadow: 1px 1px 8px 1px #dcdcdc;
  outline: none;
}

.textarea[contenteditable]:empty::before {
  color: gray;
}

#from[contenteditable]:empty::before {
  content: "Jacob";
}
</style>

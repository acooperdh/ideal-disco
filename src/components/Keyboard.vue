<script> 
import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import { store } from '../store/store';

export default {
  name: 'SimpleKeyboard',
  props: {
    keyboardClass: {
      default: 'simple-keyboard',
      type: String,
    },
    input: {
      type: String,
    },
    guessedLetters: Array,
    wrongLetters: Array,
    rightLetters: Array,
    rightSpot: Array,
  },
  data: () => ({
    keyboard: null,
    word: '',
    row: 0,
    store,
  }),
  methods: {
    onKeyPress(button) {
      // const letters = /^[a-zA-Z]+$/;
      console.log(button);
    },
  },
  mounted() {
    this.keyboard = new Keyboard(this.keyboardClass, {
      onChange: this.onChange,
      onKeyPress: this.onKeyPress,
      physicalKeyboardHighlightPress: true,
      physicalKeyboardHighlight: true,
      theme: 'hg-theme-default hg-layout-default',
      layout: {
        default: [
          'q w e r t y u i o p {bksp}',
          'a s d f g h j k l {enter}',
          '{shift} z x c v b n m , . {shift}',
          '{alt} {space} {alt}',
        ],
      },
      display: {
        '{enter}': 'Enter',
        '{bksp}': 'Backspace',
        '{space}': ' ',
        '{alt}': 'Alt',
        '{shift}': 'Shift',
      },
    });
  },
};
</script>

<template> 
	<div :class="keyboardClass">
	</div>
</template>

<template>
  <h1> Wordle Clone </h1>
  <Grid v-if='showKeyboard' />
  <Keyboard v-if='showKeyboard' v-bind="this.guessedLetters"/>
  <button v-if='showKeyboard' @click='endGame'>End Game</button>
  <button @click="startGame" v-else>Start Game</button>
</template>

<script>
import Keyboard from './components/Keyboard.vue';
import Grid from './components/Grid.vue';

export default {
  name: 'App',
  components: {
    Keyboard,
    Grid,
  },
  data() {
    const wordList = ['abuse', 'adult', 'agent', 'anger', 'apple', 'award', 'basis', 'beach', 'birth', 'block', 'blood', 'board', 'brain', 'bread', 'break', 'brown', 'buyer', 'cause', 'chain', 'chair', 'chest', 'chief', 'child', 'china', 'claim', 'class', 'clock', 'coach', 'coast', 'court', 'cover', 'cream', 'crime', 'cross', 'crowd', 'crown', 'cycle', 'dance', 'death', 'depth', 'doubt', 'draft', 'drama', 'dream', 'dress', 'drink', 'drive', 'earth', 'enemy', 'entry', 'error', 'event', 'faith', 'fault', 'field', 'fight', 'final', 'floor', 'focus', 'force', 'frame', 'frank', 'front', 'fruit', 'glass', 'grant', 'grass', 'green', 'group', 'guide', 'heart', 'henry', 'horse', 'hotel', 'house', 'image', 'index', 'input', 'issue', 'japan', 'jones', 'judge', 'knife', 'laura', 'layer', 'level', 'lewis', 'light', 'limit', 'lunch', 'major', 'march', 'match', 'metal', 'model', 'money', 'month', 'motor', 'mouth', 'music', 'night', 'noise', 'north', 'novel', 'nurse', 'offer', 'order', 'other', 'owner', 'panel', 'paper', 'party', 'peace', 'peter', 'phase', 'phone', 'piece', 'pilot', 'pitch', 'place', 'plane', 'plant', 'plate', 'point', 'pound', 'power', 'press', 'price', 'pride', 'prize', 'proof', 'queen', 'radio', 'range', 'ratio', 'reply', 'right', 'river', 'round', 'route', 'rugby', 'scale', 'scene', 'scope', 'score', 'sense', 'shape', 'share', 'sheep', 'sheet', 'shift', 'shirt', 'shock', 'sight', 'simon', 'skill', 'sleep', 'smile', 'smith', 'smoke', 'sound', 'south', 'space', 'speed', 'spite', 'sport', 'squad', 'staff', 'stage', 'start', 'state', 'steam', 'steel', 'stock', 'stone', 'store', 'study', 'stuff', 'style', 'sugar', 'table', 'taste', 'terry', 'theme', 'thing', 'title', 'total', 'touch', 'tower', 'track', 'trade', 'train', 'trend', 'trial', 'trust', 'truth', 'uncle', 'union', 'unity', 'value', 'video', 'visit', 'voice', 'waste', 'watch', 'water', 'while', 'white', 'whole', 'woman', 'world', 'youth'];
    return {
      word: '',
      words: wordList,
      solution: '',
      showKeyboard: false,
      round: 0,
      gameBoard: [[], [], [], [], []],
      isRoundOver: false,
      isGameOver: false,
      guessedLetters: [],
      wrongLetters: [],
      attempts: [[], [], [], [], []],
      rightSpot: [[], [], [], [], []],
      rightLetters: [],
      numTries: 0,
      invalidMsg: '',
      letterArray: [[], [], [], [], []],
    };
  },
  mounted() {},
  computed() {},
  methods: {

    startGame() {
      this.round += 1;
      this.solution = this.words[Math.floor(Math.random() * this.words.length)];
      this.showKeyboard = true;
      console.log(this.solution);
    },

    endGame() {
      this.round = 0;
      this.showKeyboard = false;
    },

    invalidWord() {
      this.invalidMsg = 'Invalid word';
      setTimeout(function f() { this.invalidMsg = ''; }, 3000);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

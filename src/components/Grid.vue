<template>
	<div class="table-container">
		<table>
			<tr>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? '' : '' }}
					</div>
				</td>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? store.attempts[1].toUpperCase() : '' }}
					</div>
				</td>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[2].toUpperCase() : '' }}
					</div>
				</td>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[3].toUpperCase() : '' }}
					</div>
				</td>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[4].toUpperCase() : '' }}
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[5].toUpperCase() : '' }}
					</div>
				</td>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[6].toUpperCase() : '' }}
					</div>
				</td>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[7].toUpperCase() : '' }}
					</div>
				</td>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[8].toUpperCase() : '' }}
					</div>
				</td>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[9].toUpperCase() : '' }}
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[10].toUpperCase() : '' }}
					</div>
				</td>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[11].toUpperCase() : '' }}
					</div>
				</td>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[12].toUpperCase() : '' }}
					</div>
				</td>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[13].toUpperCase() : '' }}
					</div>
				</td>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[14].toUpperCase() : '' }}
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[15].toUpperCase() : '' }}
					</div>
				</td>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[16].toUpperCase() : '' }}
					</div>
				</td>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[17].toUpperCase() : '' }}
					</div>
				</td>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[18].toUpperCase() : '' }}
					</div>
				</td>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[19].toUpperCase() : '' }}
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[20].toUpperCase() : '' }}
					</div>
				</td>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[21].toUpperCase() : '' }}
					</div>
				</td>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[22].toUpperCase() : '' }}
					</div>
				</td>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[23].toUpperCase() : '' }}
					</div>
				</td>
				<td>
					<div class='letter-tile'>
						{{ guessedLetters ? guessedLetters[24].toUpperCase() : '' }}
					</div>
				</td>
			</tr>
		</table>
	</div>

</template> 

<script> 
import { store } from '../store/store';

export default {
  name: 'Grid',
  data() {
    return (
      store
    );
  },
  props: {
    guessedLetters: Array,
    letterArray: Array,
    rightSpot: Number,
    rightLetter: Number,
  },
  methods: {
    temp() {
      console.log(store.gameBoard);
    },
  },
};
</script>

<style scoped>
.table-container {
	margin: 0;
	padding: 15px;
}

table {
	margin: 0 auto;
}

.letter-tile {
	width: 50px;
	height: 50px;
	border: 1px solid black;
	background-color: lightgrey;
	font-size: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
}
</style>

function getAttackValue($max, $min) {
  $max = $max + 1;
  return Math.floor(Math.random() * ($max - $min)) + $min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: []
    };
  },
  watch: {
    playerHealth(value) {
      //Fix progress bars
      if (value <= 0) this.playerHealth = 0;
      if (value >= 100) this.playerHealth = 100;

      // Set game status
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      //Fix progress bars
      if (value <= 0) this.monsterHealth = 0;
      if (value >= 100) this.monsterHealth = 100;

      // Set game status
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
  },
  computed: {
    disableAttack() {
      return this.currentRound % 3 !== 0;
    },
    monsterProgressBar() {
      return { width: this.monsterHealth + "%" };
    },
    playerProgressBar() {
      return { width: this.playerHealth + "%" };
    },
  },
  methods: {
    setMonsterHealth() {
      this.currentRound++;

      const attackValue = getAttackValue(10, 3);

      this.monsterHealth -= attackValue;

      this.addLogMessage('attack', 'monster', attackValue);
      this.setPlayerHealth();
    },
    setPlayerHealth() {
      const attackValue = getAttackValue(12, 5);
      this.playerHealth -= attackValue;

      this.addLogMessage('attack', 'player', attackValue);
    },
    attackMonster() {
      this.setMonsterHealth();
    },
    specialAttack() {
      this.currentRound++;

      const attackValue = getAttackValue(20, 12);

      this.monsterHealth -= attackValue;

      this.addLogMessage('damage', 'monster', attackValue);

      this.setPlayerHealth();
    },
    healPlayer() {
      this.currentRound++;

      const healValue = getAttackValue(20, 8);

      this.playerHealth += healValue;

      this.addLogMessage('heal', 'player', healValue);

      this.setPlayerHealth();
    },
    surrenderPlayer() {
      this.winner = "monster";
    },
    startGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    addLogMessage(action, who, value) {
      this.logMessages.unshift({
        actionType: action,
        actionBy: who,
        actionValue: value
      });
    }
  },
});

app.mount("#game");

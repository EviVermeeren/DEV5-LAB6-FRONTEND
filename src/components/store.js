// store.js
import { ref } from "vue";

export const scoreboardStore = {
  teams: ref([
    { name: "Team A", score: 20 },
    { name: "Team B", score: 15 },
  ]),
};

export const websocketStore = {
  socket: null,
  connect() {
    this.socket = new WebSocket("ws://localhost:3000/primus");

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const teamIndex = scoreboardStore.teams.value.findIndex(
        (t) => t.name === data.team
      );

      if (teamIndex !== -1) {
        scoreboardStore.teams.value[teamIndex].score = data.score;
      }
    };
  },
};

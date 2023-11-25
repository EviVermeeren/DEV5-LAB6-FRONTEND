<!-- ScoreBoard.vue -->
<script setup>
import { ref, onMounted } from "vue";

const teams = ref([]);

let socket = null;

onMounted(() => {
  // Establish a WebSocket connection
  socket = new WebSocket("ws://dev5-lab6-backend.onrender.com/primus");

  // Handle incoming messages
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const teamIndex = teams.value.findIndex((t) => t.name === data.team);

    if (teamIndex !== -1) {
      // Update the score for the existing team
      teams.value[teamIndex].score = data.score;
    } else {
      // Add a new team to the scoreboard
      teams.value.push({ name: data.team, score: data.score });
    }
  };
});
</script>

<template>
  <div>
    <h1>Scoreboard</h1>

    <table class="team-table">
      <thead>
        <tr>
          <th>Team</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(team, index) in teams" :key="index">
          <td>{{ team.name }}</td>
          <td>{{ team.score }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.team-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
.team-table th,
.team-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.team-table th {
  background-color: #f2f2f2;
}

.team-table tr:hover {
  background-color: #f5f5f5;
}
</style>

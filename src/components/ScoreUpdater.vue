<script setup>
import { ref, onMounted, inject } from "vue";

const teams = inject("teams"); // Inject the teams ref to access the shared state

let socket = null;
const selectedOption = ref("team 1");
const score = ref("");

const updateScore = () => {
  if (socket) {
    const teamName = selectedOption.value;
    const newScore = parseInt(score.value) || 0;

    // Assuming you have a server endpoint that accepts score updates
    socket.send(JSON.stringify({ team: teamName, score: newScore }));
  } else {
    console.error("WebSocket connection not established.");
  }
};

onMounted(() => {
  // Establish a WebSocket connection
  socket = new WebSocket("wss://dev5-lab6-backend.onrender.com/primus");
});
</script>

<template>
  <div>
    <h1>Update scores</h1>

    <select v-model="selectedOption">
      <option value="team 1">Team 1</option>
      <option value="team 2">Team 2</option>
    </select>

    <div>
      <p>Score:</p>
      <input v-model="score" type="text" />
      <button @click="updateScore">Update Score</button>
    </div>
  </div>
</template>

<style scoped></style>

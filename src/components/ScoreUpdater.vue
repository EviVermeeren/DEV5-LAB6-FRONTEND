<script setup>
import { ref, onMounted, inject } from "vue";

const teams = inject("teams"); // Inject the teams ref to access the shared state

let socket = null;
const selectedOption = ref("Giacomo Agostini");
const score = ref("");

const updateScore = () => {
  if (socket) {
    const riderName = selectedOption.value; // Use the rider name consistently
    const newScore = parseInt(score.value) || 0;

    // Assuming you have a server endpoint that accepts score updates
    socket.send(JSON.stringify({ team: riderName, score: newScore }));
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
    <h1>Update lap time</h1>

    <select v-model="selectedOption">
      <option value="Giacomo Agostini">Giacomo Agostini</option>
      <option value="Valentino Rossi">Valentino Rossi</option>
      <option value="Marc Marquez">Marc Marquez</option>
      <option value="Mike Hailwood">Mike Hailwood</option>
      <option value="Jorge Lorenzo">Jorge Lorenzo</option>
    </select>

    <div>
      <p>Best lap time in seconds:</p>
      <input v-model="score" type="text" />
      <button @click="updateScore">Update time</button>
    </div>
  </div>
</template>

<style scoped></style>

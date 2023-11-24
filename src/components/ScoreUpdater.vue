<!-- UpdateScores.vue -->
<script setup>
import { ref, onMounted } from "vue";
import { scoreboardStore } from "../components/store";
import { websocketStore } from "../components/store";

const selectedOption = ref("option1");
const score = ref("");

const updateScore = () => {
  const teamName = `Team ${selectedOption.value}`;
  const newScore = parseInt(score.value) || 0;

  // Assuming you have a server endpoint that accepts score updates
  websocketStore.socket.send(
    JSON.stringify({ team: teamName, score: newScore })
  );
};

onMounted(() => {
  websocketStore.connect();
});
</script>

<template>
  <div>
    <h1>Update scores</h1>

    <select v-model="selectedOption">
      <option value="option1">Team 1</option>
      <option value="option2">Team 2</option>
    </select>

    <div>
      <p>Score:</p>
      <input v-model="score" type="text" />
      <button @click="updateScore">Update Score</button>
    </div>
  </div>
</template>

<style scoped></style>

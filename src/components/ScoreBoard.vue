<script setup>
import { ref } from "vue";

const teams = ref([
  { name: "Team A", score: 20 },
  { name: "Team B", score: 15 },
]);
</script>

<template>
  <div>
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

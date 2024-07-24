<script setup>
import {ref, onMounted } from "vue";

import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";

  const tasksValue = ref([]);
  onMounted(() => {

  tasksValue.value =[
    { id: 1, text: "task 1", day: "March 1st at 2:30", reminder: true },
    { id: 2, text: "task 2", day: "March 1st at 2:30", reminder: true },
    { id: 3, text: "task 3", day: "March 1st at 2:30", reminder: true }
  ];
});

</script>

<template>
  <div class="contaner">
    <Header title=" Task tracker" />
    <Tasks :tasksValue="tasksValue" />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>

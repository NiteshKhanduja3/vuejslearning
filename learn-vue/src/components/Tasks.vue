<!-- scripts -->
<script setup>
const props = defineProps({
    tasksValue: { type: Array, required: true },
});

console.log("Props",props.tasksValue)

</script>

<!-- template -->
<template>
  <div :key="task.id" v-for="task in tasksValue">
    <h3>{{ task.text }}</h3>
  </div>
</template>

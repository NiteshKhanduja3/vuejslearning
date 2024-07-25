<!-- scripts -->
<script setup>
import Task from "./Task.vue";

defineProps({
  tasksValue: { type: Array, required: true },
  onDelete:{
    type:Function,
    required:true
  }
});

defineEmit()
</script>

<!-- template -->
<template>
  <div :key="task.id" v-for="task in tasksValue">
    <Task :task="task" :onDelete:"onDelete" />
  </div>
</template>

<!-- Script -->
<script setup>
import Button from "./Button.vue";

defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>

<!-- Template -->
<template>
    <header>
        <h1>
            {{ title }}
        </h1>
        <Button textValue="Add Task" color="green" />
        <Button textValue="Update Task" color="blue" />
        <Button textValue="Delete Task" color="red" />
    </header>
</template>

<!-- stylee -->
<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>

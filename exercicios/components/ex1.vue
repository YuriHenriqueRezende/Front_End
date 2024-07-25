<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
    label: {type: String, required: true},
});

</script>

<template>
    <select v-model="props">
    <option></option>
    <option value="apple">B</option>
    <option value="maca">C</option>
    </select>
    <label for="props">{{ props.label }}</label>
    <p>{{ props.label }}</p>
</template>

<style scoped lang="scss">
    .painel {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

</style>
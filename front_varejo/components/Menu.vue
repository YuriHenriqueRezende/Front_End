<script setup lang="ts">
    const props = defineProps({
        label: {type: String, required: true},
        type: {type: String, default: 'text'},
});


</script>

<template>
    <div class="position color">
        <label></label>
        
    </div>

</template>

<style scoped lang="sass">
    .color
        color: #dedede

    .position
        position: absolute
        top: 3vh
        left: 150vh

</style>
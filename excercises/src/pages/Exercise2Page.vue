<script setup>
import Tabs from '@/components/Tabs.vue';
import data from '@/assets/data/data.json';
</script>

<template>
    <div class="container d-flex justify-content-center align-items-center">
        <Tabs :tabsData="data" />
    </div>
</template>

<style>
.container {
    min-height: 100vh;
}
</style>

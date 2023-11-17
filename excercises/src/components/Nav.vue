<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

const isNavHidden = ref(true);

const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    isNavHidden.value = scrollY < 100;
};

onMounted(() => {
    nextTick(() => {
        window.addEventListener('scroll', handleScroll);
    });
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
    <nav :class="['nav d-flex justify-content-center', {'nav--hidden': isNavHidden}]">
        <router-link class="nav__link" to="/">Exercise 1</router-link>
        <router-link class="nav__link" to="exercise2">Exercise 2</router-link>
    </nav>
</template>
<style scoped lang="scss">
    .nav {
        position: sticky;
        top: 0;
        z-index: 1000;
        background-color: #fff;
        padding: 25px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease-in-out;

        &--hidden {
            transform: translateY(-100%);
            margin-bottom: -74px;
        }
        &__link {
            text-decoration: none;
            margin-right: 20px;
            color: #000;
            font-weight: 600;
        }
    }
</style>
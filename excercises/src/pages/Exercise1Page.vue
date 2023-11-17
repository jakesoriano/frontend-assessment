<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import router from '@/router';
import Banner from '@/components/Banner.vue';
import CardsList from '@/components/CardsList.vue';
import cardData from '@/assets/data/cardData.json';

const bannerImage = {
    desktop: 'https://via.placeholder.com/1920x650',
    mobile: 'https://via.placeholder.com/600x600'
}

const bannerTexts = {
    title: "Hello, MindArc!",
    subtitle: "Looking forward to working with you."
}

const isMobile = ref(false);

let resizeTimeout;

const checkIfMobile = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        isMobile.value = window.innerWidth < 768;
    }, 80);
};

onMounted(() => {
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', checkIfMobile);
});
</script>
<template>
    <div class="wrapper">
        <Banner
            :title="bannerTexts.title"
            :subtitle="bannerTexts.subtitle"
            :imageUrl="isMobile ? bannerImage.mobile : bannerImage.desktop"
        />
        <div class="container my-5">
            <CardsList :cards="cardData" />
        </div>
    </div>
</template>
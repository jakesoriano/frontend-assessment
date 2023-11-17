<script setup>
import ImageLoader from './ImageLoader.vue';

const props = defineProps({
    imageUrl: '',
    title: '',
    subtitle: ''
});
</script>
<template>
    <div class="banner w-100">
        <div class="banner__img">
            <ImageLoader
                :imageUrl="imageUrl"
                :lazyLoad="true"
                containerClass="container-class"
            />
        </div>
        <div class="banner__texts d-flex justify-content-center align-items-center flex-column">
            <h1 class="banner__title">
                {{ title }}
            </h1>
            <p class="banner__subtitle">
                {{ subtitle }}
            </p>
        </div>
    </div>
</template>
<style scoped lang="scss">
.banner {
    position: relative;

    &__img {
        position: relative;


        &:deep() .image-loader {
            @media (min-width: 768px) {
                padding-bottom: 33.8542%;
            }
        }

        &:after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.3);
        }
    }

    &__texts {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        color: #fff;
        text-align: center;
    }

    &__title {
        font-size: 4rem;

        @media (max-width: 767px) {
            font-size: 3rem;
        }
    }

    &__subtitle {
        font-size: 2.5rem;

        @media (max-width: 767px) {
            font-size: 1.5rem;
        }
    }
}
</style>
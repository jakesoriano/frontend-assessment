<script setup>
import { ref, computed } from 'vue';
import ImageLoader from './ImageLoader.vue';

defineProps({
    imageUrl: '',
    description: '',
    buttonText: ''
});

const onBtnClick = () => {
    isDescrToggled.value = !isDescrToggled.value;
}

const isDescrToggled = ref(false);
const descrContainerEl = ref(null);
const descrEl = ref(null);

const isTruncated = computed(() => {
    const descrContainerHeight = descrContainerEl.value ? descrContainerEl.value.offsetHeight : 0;
    const descrHeight = descrEl.value ? descrEl.value.offsetHeight : 0;
    return descrHeight > descrContainerHeight;
});
</script>
<template>
    <div class="card w-100 d-flex flex-column p-3">
        <div class="card__img">
            <ImageLoader :imageUrl="imageUrl" :lazyLoad="true" />
        </div>
        <div class="card__info d-flex flex-md-grow-1 justify-content-between align-items-center flex-column py-2">
            <div :class="['card__description__container', {'card__description__container--truncated': (!isDescrToggled && isTruncated), 'toggled-on': isDescrToggled }]" ref="descrContainerEl">
                <p class="card__description" ref="descrEl">
                    {{ description }}
                </p>
            </div>
            <button
                v-if="isTruncated"
                class="card__btn py-1 px-3"
                @click="onBtnClick"
            >
                {{ isDescrToggled ? 'Show less' : 'Read more'}}
            </button>
        </div>
    </div>
</template>
<style scoped lang="scss">
.card {
    &:deep() .image-loader {
        border-radius: 6px;
        padding-bottom: 75%;
    }

    &__info {
        text-align: center;
    }

    &__description {
        margin: unset;

        &__container {
            position: relative;
            max-height: 95px;
            overflow: hidden;
            margin-bottom: 1rem;

            &--truncated {
                &:after {
                    content:'';
                    width:100%;
                    height:100%;
                    position:absolute;
                    left:0;
                    top:0;
                    background: linear-gradient(180deg, transparent 0%, #FFFFFF 100%);;
                }
            }

            &.toggled-on {
                max-height: unset;
            }
        }

    }

    &__btn {
        background-color: transparent;
        border-radius: 20px;
        border-width: 3px;
        border-color: #000;
        text-transform: uppercase;
        font-weight: bold;
    }
}
</style>
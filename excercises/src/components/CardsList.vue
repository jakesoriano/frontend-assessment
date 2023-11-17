<script setup>
import Card from '@/components/Card.vue';

defineProps({
    cards: Array
});
</script>
<template>
    <div class="cards-list">
        <Card
            v-if="cards && cards.length"
            v-for="(item, index) in cards"
            :key="index"
            :imageUrl="item.image"
            :description="item.content"
            buttonText="Read more"
            @onBtnClickCallback="onBtnClick"
        />
        <h3 v-else>No data.</h3>
    </div>
</template>
<style scoped lang="scss">
.cards-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
}
</style>
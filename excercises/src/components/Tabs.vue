<script setup>
import { ref } from 'vue';

const props = defineProps({
    tabsData: Array
});

const activeTab = ref(0);

const setActiveTab = (index) => {
    if (typeof index !== 'undefined') {
        if (activeTab.value === index) {
            activeTab.value = null;
            return;
        }
        activeTab.value = index
    }
}

</script>
<template>
    <div class="tabs row m-auto">
        <div class="tabs-group col-12 col-md-4 px-sm-0">
            <div v-for="(item, index) in tabsData"
                :class="`tabs-group__item py-3 py-md-0 d-flex flex-column flex-md-row justify-content-center align-items-md-center w-100 ${index === activeTab ? 'active' : ''}`"
                :key="index"
                @click="setActiveTab(index)"
            >
                <a class="tabs-group__action d-block text-center flex-md-1">
                    {{ item.title }}
                </a>

                <div
                    :class="`tab-content__container d-block d-md-none col-12 ${index === activeTab ? 'show-tab' : 'hide-tab'}`">
                    <div class="px-5 py-4" v-html="item.content">
                    </div>
                </div>
            </div>
        </div>

        <div class="tab-content d-none d-md-flex col-8 p-4">
            <div v-for="(item, index) in tabsData"
                :class="`tab-content__container ${index === activeTab ? 'show-tab' : 'hide-tab'}`" :key="index"
                v-html="item.content">
            </div>
            <h3 class="align-self-center text-center w-100" v-show="activeTab === null">Select a tab.</h3>
        </div>
    </div>
</template>
<style scoped lang="scss">
.tabs {
    min-height: 200px;
    box-shadow: 1px 2px 13px 3px rgba(0,0,0,0.2);
    width: 60%;

    @media (max-width: 767px) {
        width: 100%;
    }
}

.tabs-group {
    &__item {
        cursor: pointer;
        position: relative;
        background-color: #F3F3F3;
        min-height: 100px;
        transition: 0.3s ease-in-out;

        &.active {
            background-color: #FFFFFF;

            &:before {
                content: '';
                position: absolute;
                background-color: #D08458;
                width: 5px;
                height: 100%;
                left: 0;
            }
            .tabs-group__action {
                color: #D08458;
            }
        }
    }

    &__action {
        text-decoration: none;
        text-align: center;
        color: #ABABAB;
    }
}

.tab-content {
    background-color: #FFFFFF;

    &__container {
        transition: opacity ease-in-out 0.2s;
        overflow: hidden;

        @media (max-width: 767px) {
            &:not(.hide-tab) {
                transition: max-height ease-in 0.4s;
            }
        }
    }
}

.hide-tab {
    max-width: 0;
    max-height: 0;
    opacity: 0;
}

.show-tab {
    opacity: 1;

    @media (max-width: 767px) {
        max-height: 500px;
    }
}
</style>
<script setup lang="ts">
// imports
import { onMounted } from 'vue';
import { useIndexStore } from '../store/index'

// use store
const index_store = useIndexStore()

onMounted(() => {
    console.log(index_store.store_title)
})
</script>

<template>
    <div>
        home page
    </div>
</template>
<template>
    <div>
        Count: {{ count }}<br />
        Double count: {{ doubleCount }}<br />
        Double count + 1: {{ doubleCountPlusOne }}<br />
        <button @click="count++">Increment</button>
        <button @click="count--">Decrement</button>
    </div>
</template>
<script setup>
import { storeToRefs } from 'pinia';

const store = useStore();
const { count, doubleCount, doubleCountPlusOne} = storeToRefs(store);
</script>
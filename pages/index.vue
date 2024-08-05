<script lang="ts" setup>
import Table from '~/components/Table.vue';

definePageMeta({
  middleware: ['auth'],
});
const fruits = [
  {
    name: 'Strawberry',
    price: 4.5,
    inventoryKg: 200,
    inventoryPieces: 100,
    rating: 5,
  },
  {
    name: 'Apple',
    price: 1.99,
    inventoryKg: 3000,
    inventoryPieces: 200,
    rating: 3,
  },
  {
    name: 'Banana',
    price: 3.75,
    inventoryKg: 18000,
    inventoryPieces: 300,
    rating: 4,
  },
];
const isMounted = ref(false); //set to true to see hydration issues

onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <div class="table-container">
    <Table v-if="isMounted" :fruits="fruits" />
  </div>
  <StaticTable />
  <OwnTable :fruits="fruits" />
</template>

<style scoped>
.table-container {
  width: 100%;
  margin: 0 auto;
}
</style>

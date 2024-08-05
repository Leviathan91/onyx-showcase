<script lang="ts" setup>
interface Fruit {
  name: string;
  price: number;
  inventoryKg: number;
  inventoryPieces: number;
  rating: number;
}
const props = defineProps<{
  fruits: Fruit[];
}>();
</script>
<template>
  <h2>Own Table</h2>
  <table>
    <thead>
      <tr>
        <th>Fruit</th>
        <th>Price (€/kg)</th>
        <th>Inventory (kg)</th>
        <th>Inventory (pieces)</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="fruit in props.fruits" :key="fruit.name">
        <td>{{ fruit.name }}</td>
        <td>{{ fruit.price.toFixed(2) }}</td>
        <td>{{ fruit.inventoryKg }}</td>
        <td>{{ fruit.inventoryPieces }}</td>
        <td>{{ fruit.rating }}</td>
      </tr>
    </tbody>
  </table>
</template>

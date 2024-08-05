<script lang="ts" setup>
import { OnyxTable } from 'sit-onyx';
</script>

<template>
  <OnyxTable>
    <tr>
      <td>Strawberry</td>
      <td>4.50</td>
      <td>200</td>
      <td>100</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Apple</td>
      <td>1.99</td>
      <td>3000</td>
      <td>200</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Banana</td>
      <td>3.75</td>
      <td>18000</td>
      <td>300</td>
      <td>4</td>
    </tr>

    <template #head>
      <tr>
        <th>Fruit</th>
        <th>Price (€/kg)</th>
        <th>Inventory (kg)</th>
        <th>Inventory (pieces)</th>
        <th>Rating</th>
      </tr>
    </template>
  </OnyxTable>
</template>

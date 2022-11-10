<template>
  <div class="showcase">
    <product-cart v-for="item in products"
                  :key="item.id"
                  :product="item"
                  :removeButton="showRmBtn"
    />
  </div>
</template>

<script>
import {mapState} from "vuex";
import ProductCart from "@/components/ProductCart";

export default {
  name: "ShowCase",
  components: {ProductCart},
  props: ['showRmBtn'],
  computed: {
    ...mapState([
      'products',
    ])
  }
}
</script>

<style scoped>
.showcase {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>

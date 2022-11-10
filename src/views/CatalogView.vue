<template>
  <div>
    <h1>Каталог</h1>
    <loading-status/>

    <div class="showcase">
      <product-cart v-for="idx in products"
                    :key="idx"
      />
    </div>


  </div>
</template>

<script>
import ProductCart from "@/components/ProductCart";
import {mapState} from "vuex";
import LoadingStatus from "@/components/LoadingStatus";

export default {
  components: {ProductCart, LoadingStatus},
  computed: {
    ...mapState([
      'products',
      'errorLoad'
    ])
  }
}
</script>

<style lang="scss" scoped>
.showcase {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>

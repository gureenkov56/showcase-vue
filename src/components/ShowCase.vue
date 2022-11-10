<template>
  <div class="showcase" ref="showcase">
    <product-cart v-for="item in products"
                  :key="item.id"
                  :product="item"
                  :removeButton="showRmBtn"
    />
  </div>
  <loading-status/>
</template>

<script>
import {mapState} from "vuex";
import ProductCart from "@/components/ProductCart";
import store from "@/store";
import LoadingStatus from "@/components/LoadingStatus";

export default {
  name: "ShowCase",
  components: {ProductCart, LoadingStatus},
  props: ['showRmBtn'],
  computed: {
    ...mapState([
      'products',
    ])
  },
  mounted() {
    const timer = setInterval(() => {
      const coords = this.$refs.showcase.getBoundingClientRect();
      if (coords.bottom - window.innerHeight < 250) {
        fetch(`https://api.escuelajs.co/api/v1/products?offset=${store.state.pagination}&limit=10`)
            .then(res => {
              if (!res.ok) throw new Error('Something went wrong');
              return res.json();
            })
            .then(res => store.commit('SET_PRODUCT', res))
            .catch(error => {
              store.commit('SET_ERROR_LOAD');
              clearInterval(timer);
              console.log(error);
            })
      }
    }, 1000)
  },
}
</script>

<style scoped>
.showcase {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  margin-top: 1rem;
}
</style>

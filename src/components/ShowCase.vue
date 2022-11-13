<template>
  <div ref="showcase">
    <TransitionGroup name="list" tag="div" class="showcase">
      <product-cart v-for="item in products"
                    :key="item.id"
                    :product="item"
                    :removeButton="showRmBtn"
      />
      <div class="fake" key="fake1"></div>
      <div class="fake" key="fake2"></div>
      <div class="fake" key="fake3"></div>
    </TransitionGroup>
    <loading-status/>
  </div>
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
  data: () => ({
    timer: null
  }),
  computed: {
    ...mapState([
      'products',
    ])
  },
  mounted() {
    store.dispatch('fetchData');

    this.timer = setInterval(() => {
      const coords = this.$refs.showcase.getBoundingClientRect();
      if (coords.bottom - window.innerHeight < 250) {
        store.dispatch('fetchData');
        if (store.state.errorLoad) clearInterval(this.timer);
      }
    }, 250)
  },
  unmounted() {
    clearInterval(this.timer);
  }
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

.fake {
  flex: 1;
  flex-basis: 300px;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0);
}

.list-leave-active {
  position: absolute;
}
</style>

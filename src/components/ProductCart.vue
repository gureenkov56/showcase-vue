<template>
  <div class='product-cart'>
    <button v-if="removeButton"
            @click="removeProducts(product.id)"
            class="product-cart__remove-btn"
    >
      <img src="@/assets/images/svg/trash.svg" alt="remove">
    </button>
    <div class="product-cart__image">
      <img :src="product.images[0]" alt="product image">
    </div>
    <div class="product-cart__info">
      <h3>{{ product.title }}</h3>
      <p>{{ product.description }}</p>
      <div class="price">{{ product.price }} руб.</div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: 'ProductCart',
  props: [
    'product',
    'removeButton'
  ],
  methods: {
    removeProducts(id) {
      store.commit('REMOVE_PRODUCT', id);
    }
  }
}
</script>

<style lang="scss" scoped>
.product-cart {
  position: relative;
  width: 380px;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;
  transition: box-shadow .3s;
  flex-grow: 1;

  &__remove-btn {
    position: absolute;
    top: -10px;
    right: -10px;

    height: 30px;
    width: 30px;
    padding-top: 4px;
    display: none;

    border-radius: 6px;
    border: none;
    background-color: #F08183;
    cursor: pointer;
  }

  &:hover {
    box-shadow: 0 0 10px 10px #dedede;

    button {
      display: block;
    }
  }

  &__image {
    img {
      width: 100%;
      border-radius: 6px 6px 0 0;
      max-height: 200px;
      object-fit: cover;
    }
  }

  &__info {
    padding: 16px;

    h3 {
      padding: 0;
      margin: 0;
      font-weight: 600;
      font-size: 20px;
    }

    p {
      font-size: 16px;
      font-weight: 400;
    }

    .price {
      font-size: 24px;
      font-weight: 600;
      margin-top: 2rem;
    }
  }
}
</style>

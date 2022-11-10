<template>
  <div class='product-cart'>
    <div class="product-cart__image">
      <img src="https://m.media-amazon.com/images/I/71Hy3IHViRL.jpg" alt="product image">
    </div>
    <div class="product-cart__info">
      <h3>Название</h3>
      <p>Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк</p>
      <div class="price">10 000 руб.</div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCart'
}
</script>

<style lang="scss">
.product-cart {
  max-width: 332px;
  border-radius: 6px;
  overflow: hidden;
  background-color: #fff;

  &__image {
    img {
      width: 100%;
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

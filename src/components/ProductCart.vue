<template>
  <div class='product-cart'>
    <button class="product-cart__remove-btn">
      <img src="@/assets/images/svg/trash.svg" alt="remove">
    </button>
    <div class="product-cart__image">
      <img src="https://m.media-amazon.com/images/I/71Hy3IHViRL.jpg" alt="product image">
    </div>
    <div class="product-cart__info">
      <h3>Название</h3>
      <p>Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в
        несколько строк</p>
      <div class="price">10 000 руб.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCart'
}
</script>

<style lang="scss" scoped>
.product-cart {
  position: relative;
  max-width: 332px;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;
  transition: box-shadow .3s;
  margin: 10px;

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
      border-radius: 6px;
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

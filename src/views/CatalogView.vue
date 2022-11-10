<template>
  <div>
    <div class="pageTitle">
      <div class="pageTitle__top">
        <h1>Каталог</h1>
        <div class="select-wrapper">
          <select>
            <option value="cheaperFirst">Сначала дешевле</option>
            <option value="cheaperLast">Сначала дороже</option>
          </select>
          <img src="@/assets/images/svg/arrow-left.svg" alt="arrow">
        </div>
      </div>
      <loading-status/>
    </div>


    <div class="showcase">
      <product-cart v-for="item in products"
                    :key="item.id"
                    :product="item"
                    :removeButton="false"
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
.pageTitle {
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .select-wrapper {
      position: relative;
      select {
        appearance: none;
        //display: block;
        border: none;
        height: 2.5rem;
        border-radius: 4px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        outline: none;
        padding: 0 40px 0 20px;
        color: #B4B4B4;

        &~img {
          display: block;
          position: absolute;
          top: 13px;
          right: 10px;

          width: 20px;
          height: 20px;
          transform: rotate(-90deg);


        }
      }
    }


  }
}

.showcase {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>

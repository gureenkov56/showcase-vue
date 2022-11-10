<template>
  <div class="pageTitle">
    <div class="pageTitle__top">
      <h1><slot></slot></h1>
      <div class="select-wrapper">
        <select v-model="sortBy">
          <option value="default" selected>По умолчанию</option>
          <option value="cheaperFirst">Сначала дешевле</option>
          <option value="cheaperLast">Сначала дороже</option>
          <option value="byName">По имени</option>
        </select>
        <img src="@/assets/images/svg/arrow-left.svg" alt="arrow">
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "PageTitle",
  data: () => ({
    sortBy: 'default'
  }),
  watch: {
    sortBy(newValue) {
      store.commit('SORT_PRODUCTS_BY', newValue);
    }
  }
}
</script>

<style lang="scss" scoped>
.pageTitle {
  &__top {
    display: flex;
    flex-wrap: wrap;

    justify-content: space-between;
    align-items: center;

    .select-wrapper {
      position: relative;
      select {
        appearance: none;
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

</style>

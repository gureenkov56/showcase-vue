<template>
  <div class="loading-status">
    <div v-if="errorLoad"
         class="error">
      {{ errorLoad }}
    </div>
    <div v-else-if="lengthOfProductsList === 0">
      <img src="@/assets/images/svg/loader.svg">
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  name: "LoadingStatus",
  computed: {
    ...mapState([
        "errorLoad"
    ]),
    ...mapGetters([
        "lengthOfProductsList"
    ])
  }

}
</script>

<style lang="scss" scoped>
.loading-status {
  text-align: center;
  .error {
    color: #f37070;
  }
}
</style>


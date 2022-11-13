<template>
  <div class="loading-status">
    <div v-if="errorLoad"
         class="error">
      {{ errorLoad }}
    </div>
    <div v-else>
      <img src="@/assets/images/svg/loader.svg">
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "LoadingStatus",
  computed: {
    ...mapState([
        "errorLoad"
    ])
  }

}
</script>

<style lang="scss" scoped>
.loading-status {
  text-align: center;
  margin-top: 2rem;
  .error {
    color: #f37070;
  }
}
</style>


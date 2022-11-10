<template>
  <div>
    <page-title>Каталог</page-title>
    <show-case showRmBtn=""/>
  </div>
</template>

<script>
import {mapState} from "vuex";
import PageTitle from "@/components/PageTitle";
import ShowCase from "@/components/ShowCase";

export default {
  components: {PageTitle, ShowCase},
  computed: {
    ...mapState([
      'products',
    ])
  }
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <div class="mx-5 table-header">
    <b-row>
      <b-col cols="2" class=""><p class="text-muted small-font">Azonosító</p></b-col>
      <b-col cols="2" class=""><p class="text-muted small-font text-nowrap">Befizetés módja</p></b-col>
      <b-col cols="2" class=""><p class="text-muted small-font">Dátum</p></b-col>
      <b-col cols="2" class=""><p class="text-muted small-font">Összeg</p></b-col>
      <b-col cols="2" class=""><p class="text-muted small-font">Státusz</p></b-col>
    </b-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .small-font {
    font-size: $font-small !important;
  }

  .table-header {
    max-width: 822px;
    margin: 0 auto;
  }

</style>
<template>
  <aside class="sidebar-nav shadow bg-white">
    <div class="sidebar-header">
      <h1 class="font-weight-bold p-3 sidebar-title">Folyamatos Díjfizetésű Ultra Prémium Életbiztosítás</h1>
    </div>

    <div class="dropdown-divider"></div>

    <div class="sidebar-body">
      <div class="label-and-text py-2 px-3">
        <p class="mb-1">Szerződő neve</p>
        <p class="m-0">Kovács István</p>
      </div>

      <div class="label-and-text py-2 px-3">
        <p class="mb-1">Szerződés száma</p>
        <p class="m-0">87562443</p>
      </div>

      <div class="label-and-text py-2 px-3">
        <p class="mb-1">Utolsó befizetés</p>
        <p class="m-0">2019.06.25.</p>
      </div>

      <div class="label-and-text py-2 px-3">
        <p class="mb-1">Biztosítási díj rendezve</p>
        <p class="m-0">2019.07.01.</p>
      </div>
    </div>
  </aside>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.sidebar-nav {
  width: 100%;
  height: calc(100vh - 80px);
  position: sticky;
  top: 80px;
}

.sidebar-header {
  h1 {
    font-size: $font-mediumsmall;
    color: $blue;
  }
}

@media only screen and (min-width: 768px) {
  .sidebar-nav {
    max-width: 303px;
  }
}

</style>
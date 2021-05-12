<template>
<div class="navigation-container shadow bg-white">
  <div class="navigation-bar d-flex justify-content-between align-items-center p-4">
    <img src="@/assets/icons/groupama-logo.png" alt="Groupama logo">
    <div class="action-section">
      <img class="d-lg-none mr-3" src="@/assets/icons/mobile-menu.svg" alt="Menu">
      <img src="@/assets/icons/logout-icon.svg" alt="Kilépés">
    </div>
  </div>  
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .navigation-container {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    height: 80px;
  }
  .navigation-bar {
    max-width: 1173px;
    margin: 0 auto;
  }

</style>
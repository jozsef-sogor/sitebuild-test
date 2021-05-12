<template>
  <div class="tabbar mw-100 d-flex justify-content-start m-4 pb-0">


    <p v-for="(tab, index) in tabs" 
    :key="index" 
    class="p-4 m-0 text-left tabbar-tab"
    :class="{'active-tab': activeTabIndex == index}"
    @click="activeTabIndex = index"
    >
      {{tab.title}}
    </p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTabIndex: 2,
      tabs: [
        {title: 'Fizetendő tételek'},
        {title: 'Eseti díj befizetése'},
        {title: 'Fizetési előzmények'},
      ],
    }
  }

}
</script>

<style lang="scss" scoped>
  .tabbar {
    position: relative;
    max-width: 1173px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: $accent-color;
    }
  }

  .tabbar-tab {
    cursor: pointer;
    font-size: $font-small;
  }

  .active-tab {
    position: relative;
    color: $blue;
    font-weight: bold;
    &::after {
     content: '';
     position: absolute;
     bottom: 0;
     left: 0;
     width: 100%;
     height: 3px;
     background-color: $success;
     z-index: 1;
     border-radius: 3px;
    }
  }
</style>
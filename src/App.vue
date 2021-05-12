<template>
  <div id="app">
    <nav-bar />
    <main class="d-flex min-vh-100">
      <sidebar-info class="d-none d-lg-block" />
      <div class="transactioncard-holder w-100">
        <tab-bar />
        <table-header class="d-none d-md-block" />
        <transaction-card 
          v-for="transaction in transactions"
          :key="transaction._id"
          :transaction="transaction"
        />
      </div>
    </main>
  </div>
</template>

<script>
import TransactionCard from '@/components/TransactionCard'
import SidebarInfo from '@/components/SidebarInfo'
import TableHeader from '@/components/TableHeader'
import NavBar from '@/components/NavBar'
import TabBar from '@/components/TabBar'

import testData from '@/assets/data.json'

export default {
  name: 'App',
  data() {
    return {
      transactions: testData.transactions

    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData: function() {
      //const url = process.env.BASE_URL;
      fetch(`/data.json`)
      .then(data => console.log(JSON.parse(data.body)))
    }
  },
  components: {
    TransactionCard,
    SidebarInfo,
    TableHeader,
    NavBar,
    TabBar
  }
}
</script>

<style lang="scss">
#app {
  background-color: #FAFAFC;
}

main {
  max-width: 1173px;
  margin: 0 auto;
}
</style>

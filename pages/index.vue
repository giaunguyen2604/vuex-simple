<template>
  <div class="container">
    <div>
      <ItemPerson :singlePerson="{name: 'AAAAAAAAA'}"/>
      <ItemPerson :singlePerson="{name: 'BBBBBBBBB'}"/>
      <ItemPerson :singlePerson="{name: 'CCCCCCCCC'}"/>
      <ItemPerson :singlePerson="{name: 'DDDDDDDDD'}"/>
    </div>
    <h2 class='count-total'>Total click: {{ number }}</h2>
  </div>
</template>

<script>
import ItemPerson from '../components/item'

export default {
  components: {
    ItemPerson
  },
  computed: {
    number () {
      return this.$store.state.counter.totalCount
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.count-total {
  margin-top: 10px;
}
</style>

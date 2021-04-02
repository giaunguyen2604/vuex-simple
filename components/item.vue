<template>
  <div class='attendee'>
    <div>{{ singlePerson.name }}</div>
    <button @click='updateCount'>Click me</button>
    <div>Sum: {{ count }}</div>
  </div>
</template>

<script>
export default {
  name: 'ItemPerson',

  props: {
    singlePerson: {
      type: Object
    }
  },

  data(){
    return {
      count: 0
    }
  },

  methods: {
    updateCount() {
      this.count += 1
      this.$store.commit('counter/update')
    }
  }
}
</script>

<style scoped>
.attendee {
  width: 300px;
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
}
</style>

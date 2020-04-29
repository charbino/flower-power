<template>
  <div class="home">
    <Nav class="mb-6" />
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
      <Flowers></Flowers>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Nav from '@/components/Nav.vue'
import Flowers from '@/components/Flowers.vue'
import Flower from '@/components/Flower.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Nav,
    Flowers,
    Flower
  }
}
</script>

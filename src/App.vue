<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view/>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './components/common/Header'
import Footer from './components/common/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "./assets/all.scss";
</style>

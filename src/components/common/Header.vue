<template>
    <header class="navbar sticky-top navbar-expand-lg navbar-light bg-transparent">
        <div class="container">
            <router-link class="navbar-brand" to="/">
              <img src="../../assets/images/logo.svg" alt="台北小春">
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample07">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item" v-for="(item, index) in menu" :key="index"
                    :class="{ 'active': ( '/' + item.link ) === searchText}"
                    >
                        <router-link class="nav-link" :to='item.link'>{{ item.name }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <!-- <div class="header">
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-transparent">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                  <img src="../../assets/images/logo.svg" alt="台北小春">
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarsExample07">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item" v-for="(item, index) in menu" :key="index"
                        :class="{ 'active': ( '/' + item.link ) === searchText}"
                        >
                            <router-link class="nav-link" :to='item.link'>{{ item.name }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div> -->
</template>
<script>
import menujson from '../../../static/data/menu.json'

export default {
  name: 'HelloWorld',
  data () {
    return {
      menu: menujson
    }
  },
  computed: {
    searchText () {
      return this.$route.path
    }
  },
  created () {
    console.log(this.menu)
    console.log(this.$route)
  }
}
</script>
<style lang="scss">
  .bg-transparent{
    background: rgba(255,255,255,0);
  }
</style>

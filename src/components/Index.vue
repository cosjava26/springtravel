<template>
  <div class="index_wrap">
    <coverPage></coverPage>
    {{ msg }}
    index_wrap
  </div>
</template>

<script>
import coverPage from './common/coverPage'

export default {
  name: 'Index',
  data () {
    return {
      msg: 'Index'
    }
  },
  components: {
    coverPage
  }
}
</script>

<style scoped>

</style>

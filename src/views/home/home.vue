<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>getRes: {{ getRes }}</p>
    <p>postRes: {{ postRes }}</p>
    <p>jsonpRes: {{ jsonpRes }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getDemo, postDemo, jsonpDemo } from '@/api/index'

export default {
  name: 'home',
  data () {
    return {
      getRes: '',
      postRes: '',
      jsonpRes: ''
    }
  },
  components: {
    HelloWorld
  },
  mounted () {
    getDemo({ id: 11 }).then((res) => {
      this.getRes = res.msg
    })
    postDemo({ id: 13 }).then((res) => {
      this.postRes = res.msg
    })
    jsonpDemo().then((res) => {
      this.jsonpRes = JSON.stringify(res)
    })
  }
}
</script>

<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>getRes: {{ getRes }}</p>
    <p>postRes: {{ postRes }}</p>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { getDemo, postDemo } from '@/api/index'
// import { getOther, getConfig, postOther, jsonpDemo } from '@/api/other'

export default {
  name: 'index',
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
    postDemo({ id: 11 }).then((res) => {
      this.postRes = res.msg
    }).catch(err => {
      console.log(err)
    })

    // getOther({ id: 22 }).then((res) => {
    //   this.getRes = res.msg
    // })
    // getConfig().then((res) => {
    //   // this.getRes = res.msg
    // })
    // postOther({ id: 22 }).then((res) => {
    //   this.postRes = res.msg
    // })
    // jsonpDemo().then((res) => {
    //   this.jsonpRes = JSON.stringify(res)
    // })
  }
}
</script>

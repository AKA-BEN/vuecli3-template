<template>
  <div class="home">
    <h1>community Demo</h1>
    <p>Demo getRes: {{ getRes }}</p>
    <p>Demo postRes: {{ postRes }}</p>
    <p>Demo jsonpRes: {{ jsonpRes }}</p>
  </div>
</template>

<script>
// import { getDemo, postDemo } from '@/api/index'
import { getOther, getConfig, postOther, jsonpDemo } from '@/api/other'

export default {
  name: 'index',
  data () {
    return {
      getRes: '',
      postRes: '',
      jsonpRes: ''
    }
  },
  mounted () {
    // getDemo({ id: 11 }).then((res) => {
    //   this.getRes = res.msg
    // })
    // postDemo({ id: 11 }).then((res) => {
    //   this.postRes = res.msg
    // }).catch(err => {
    //   console.log(err)
    // })

    getOther({ id: 22 }).then((res) => {
      this.getRes = res.msg
    })
    getConfig().then((res) => {
      // this.getRes = res.msg
    })
    postOther({ id: 22 }).then((res) => {
      this.postRes = res.msg
    })
    jsonpDemo().then((res) => {
      this.jsonpRes = JSON.stringify(res)
    })
  }
}
</script>

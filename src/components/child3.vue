<template>
    <div>Child3</div>
</template>

<script>
import myVue from '../myVue.js'
export default {
    extends:myVue,
    data(){
      return{
          name:'child3'
      }
  }
}
</script>
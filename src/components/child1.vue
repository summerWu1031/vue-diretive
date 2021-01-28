<template>

    <div>
        <change-theme/>
        Child1
        
    </div>
</template>

<script>
import log from '../mixins/log.js'
import changeTheme from './changeTheme.vue'
export default {
  mixins:[log],
  data(){
      return{
          name:'child1'
      }
  },
  components:{changeTheme}
}
</script>
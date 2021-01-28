<template>
    <div ip='app'>
        <Child1 v-if="c1Visible"/>
        <button @click='c1Visible=false'>x</button>
        <Child2 v-if="c2Visible"/>
        <button @click='c2Visible=false'>x</button>
        <Child3 v-if="c3Visible"/>
        <button @click='c3Visible=false'>x</button>
    </div>
</template>

<script>
import Child1 from './components/child1.vue'
import Child2 from './components/child2.vue'
import Child3 from './components/child3.vue'
export default {
    components:{
        Child1,
        Child2,
        Child3
    },
    data(){
        return {
            c1Visible:true,
            c2Visible:true,
            c3Visible:true
        }
    }
}
</script>
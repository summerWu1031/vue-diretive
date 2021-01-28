<template>
    <div :class="`app theme-${themeName} fontSize-${fontSizeName}`">
        <Child1/>
        <Child2/>
        <Child3/>
    </div>
</template>

<script>
import Child1 from './components/child1.vue'
import Child2 from './components/child2.vue'
import Child3 from './components/child3.vue'
export default {
    data(){
        return{
            themeName:'blue',
            fontSizeName:'normal'
        }
    },
    components:{
        Child1,
        Child2,
        Child3
    },
    methods:{
        changeTheme(){
            if(this.themeName==='blue'){
                this.themeName='red'
            }else{
                this.themeName="blue"
            }   
        },
        changeFontSize(size){
            if(['normal','big','small'].indexOf(size)===-1){
                throw new Error('没有这个尺寸')
            }else{
                this.fontSizeName=size
            }
        }
    },
    provide(){
        return {
            themeName:this.themeName,
            changeTheme:this.changeTheme,
            fontSizeName:this.fontSizeName,
            changeFontSize:this.changeFontSize

        }
    }
}
</script>

<style>
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app.theme-blue button {
  background: blue;
  color: white;
}
.app.theme-blue {
  color: darkblue;
}

.app.theme-red button {
  background: red;
  color: white;
}
.app.theme-red {
  color: darkred;
}
.app.fontSize-normal {
  font-size: 16px;
}
.app button {
  font-size: inherit;
}
.app.fontSize-small {
  font-size: 12px;
}
.app.fontSize-big {
  font-size: 20px;
}
</style>


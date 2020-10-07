<template>
    <div>
        <p>{{$store.state.num}}</p>
        <!-- commit  触发函数的方法 -->
        <button @click="$store.commit('reduce')">-</button>
        <button @click="$store.commit('add')">+</button>
    </div>
</template>
 
<script>
    import store from "../store"
 
    export default{
       name:"shortcut",
        store
      }
 
</script>
 
<style>
</style>

<script setup>
import { RouterView } from 'vue-router'
import navigator from './components/Heading.vue'
import footing from './components/Footing.vue'
</script>

<template>
  <div class="content">
    <div class="navi">
      <navigator />
    </div>
    <div class="main">
      <RouterView />
    </div>
    <div class="foot">
      <footing />
    </div>
  </div>
</template>

<script>

</script>

<style lang="sass" scoped>

*
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
  

  .navi
    position: sticky
    top: 5px
    right: 5px
    padding: 0 0 0 0
    margin: 0 0 10px 0           
    width: 100%
    height: auto
    z-index: 10   

  .main
    display: flex
    flex-direction: column
    position: relative
    top: -3px
    margin: 0 0 0 0 
    padding: 0 0 10px 0
    height: auto
    width: 100%
    z-index: 5  

  .foot
    display: flex
    flex-direction: column
    justify-content: center
    position: relative   
    bottom: 5px
    margin-top: 10px       
    width: auto
    height: auto
    z-index: 10


</style>


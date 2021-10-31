

<template>
 


 <div class="min-h-screen  setbg">
  <div class="hero">
    <div >
      <div>
        <h1 class="headTile">
          铁路运输车辆安全监控可视化平台
        </h1>   
      </div>
    </div>
  </div>
  
  <div class="videoLeft">
    <vue3VideoPlay 
      v-bind="options"
      :src = simUrl
    />
  </div>

  <div class="videoMiddle">
    <vue3VideoPlay 
      v-bind="options"
      :src = simUrl
    />
  </div>

  <div class="videoRight">
    <vue3VideoPlay 
      v-bind="options"
      :src = simUrl
    />
  </div>

</div>




</template>


<script setup lang="ts">

import {options,getUrl} from './services/video';
import type {SimUrl} from './model/simVideo';
import { ref } from '@vue/reactivity';
const simUrl = ref<SimUrl>('');

getUrl().then( result => simUrl.value = result.data );

</script>

<style lang="css">
  .setbg{
    background-image: url(./assets/界面背景.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 0;
    -webkit-background-size: cover
  }

  .headTile{
  
    max-width: 95rem;
    margin-top: 6%;
    font-size: 2.5vw;
    line-height: 1;
    font-weight: 700;
    color: beige;
    padding:  0 auto;
  }

  .videoLeft{
    float: left;
    margin-top: 3%;
    margin-left: 0%;
  }

  .videoMiddle{
    float: left;
    margin-top: 3%;
    margin-left:3.5%;
  }

  .videoRight{
    float: right;
    margin-top: 3%;
    margin-right: 0%;
  }

</style>
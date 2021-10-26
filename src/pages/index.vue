<template>

<div class="min-h-screen setbg">
  <div class="hero">
    <div >
      <div>
        <h1 class="headTile">
          铁路运输车辆安全监控可视化平台
        </h1>   
      </div>

      <div class="mt-32 text-center">
      </div>
    </div>
  <!-- 
    <div>
      {{user}}
    </div> -->
    
  </div>
</div>
</template>

<script setup lang='ts'>
import { login } from "~/services/video";
import { ref } from 'vue';
import type { LoginParam, User } from "~/model/user";



const user = ref<User>('');
  const loginData: LoginParam = {
    workNumber: 'admin',
    password: 'admin'
  };
login(loginData).then(result => user.value = result.data);

</script>

<style lang="css">
  .setbg{
    background-image: url(../assets/界面背景.png);
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
</style>


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
  
  <!-- <video controls autoplay src="http://localhost:8080/se/video/video"></video> -->

    <div>




      <div>
      
        <!-- <form action="#" class="layui-form form form-horizontal" id="form-patient-add"
         th:action="@{/se/video/upload}" enctype="multipart/form-data" method="post">	
          <div class="layui-form-item">
            <label class="layui-form-label"><span class="x-red">*</span>模拟视频：</label>
            <input type="file" name="file" id="file"/>
          </div>
           
	          <button class="layui-btn" id="subbtn" type="submit">
                    提交
            </button>
         </form> -->

         <input type= "file" class="hide" onchange="upload(this)"/>
         <!-- <a href="#" class="btn btn-default" id="btnUpload"/> -->
         <button id="upload" class="btn btn-primary btn-sm"  @click="upload">上传视频</button> 

          <div class="dropdown dropdown-right">
          <div tabindex="0"  class="m-1 btn btn-sm" @click="getSimVideo"  > 视频目录</div> 
          <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-40" style="height:200px;overflow:scroll">
            <li v-for="item in simVideoList">
              <a @click="playSimVideo(item.name)">{{item.name}}</a>
            </li> 
          </ul>
        </div>

      </div> 
     
      <!-- <button class="btn btn-sm" @click="show">视频目录</button>  -->
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
   
  </div>

</template>


<script setup lang="ts">

import {defineComponent,onMounted} from "vue"
import { conditionalExpression } from '@babel/types';

import { http } from "./utils/http";
import {options} from './services/video';
import type {SimUrl,SimVideo} from './model/simVideo';
import { ref } from '@vue/reactivity';
const simUrl = ref<SimUrl>('');
const simVideoList = ref<SimVideo[]>([]);
const getSimVideo=simList; 
const playSimVideo=getUrl;




async function upload(input:File){
    const formData=new window.FormData();
    formData.append('multipartFile',$(input)[0].files[0]);
    const result = await http.post<String>('/se/video/upload',formData,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
    console.log(result);
}


function getUrl(data: string) {
    simUrl.value="http://localhost:8080/se/video/video?name="+data;
}


async function simList() {
   const result = await http.get<SimVideo[]>('/se/video/simList');
    simVideoList.value=result.data;
}

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
    /* margin-top: 3%; */
    margin-left: 0%;
  }

  .videoMiddle{
    float: left;
    /* margin-top: 3%; */
    margin-left:3.5%;
  }

  .videoRight{
    float: right;
    /* margin-top: 3%; */
    margin-right: 0%;
  }

</style>


<template>
 
 <div class="min-h-screen  setbg">
  
    <div class="hero">
      <div >
        <div>
          <h1 class="headTitle">
            铁路运输车辆安全监控可视化平台
          </h1>   
        </div>
      </div>
    </div>
  

      <div>

          <input ref='uploadInput' type= "file" class="hidden" name="icon" @change="Dealfilechange"/>  
          <button id="upload" class="btn btn-primary btn-sm"  style=" width: 6vw; height: 3vh;"  @click="Upload">
            <h1 style="font-size: 1vw;">
              上传视频
            </h1>
          </button> 


          <div class="dropdown dropdown-right">
          <div tabindex="0"  class="m-1 btn btn-sm" @click="getSimVideo" style=" width: 6vw; height: 3vh;" > 
            <h1 style="font-size: 1vw;">
              视频目录
            </h1>
          </div> 
          <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-40" style="height:200px;overflow:scroll">
            <li v-for="item in simVideoList">
              <a @click="playSimVideo(item.name)">{{item.name}}</a>
            </li> 
          </ul>
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

      <!-- <div class="unityLeft">
        <vue3VideoPlay 
          v-bind="options"
          :src = simUrl
        />
      </div>  -->

    

      <div class="simDataMiddle">

        <div>
          <h1 class="simDataTitle">
            仿真数据分析
          </h1>   
        </div>
        <div>
          <button id="deformation" class="btn btn-primary btn-sm simDataButton" @click="setDeformationProjectId(projectId)" >变形响应</button> 
        </div>
        <div>
          <button id="velocity" class="btn btn-primary btn-sm simDataButton" @click="setVelocityProjectId(projectId)" >速度响应</button> 
        </div>
        <div>
          <button id="acceleration" class="btn btn-primary btn-sm simDataButton"  @click="setAccelerationProjectId(projectId)">加速度响应</button> 
        </div>
        <div>
          <button id="force" class="btn btn-primary btn-sm simDataButton" @click="setForceProjectId(projectId)" >界面力</button> 
        </div>
        <div>
          <button id="internalEnergy" class="btn btn-primary btn-sm simDataButton" @click="setInternalProjectId(projectId)" >内能响应</button> 
        </div>
        <div>
          <button id="kineticEnergy" class="btn btn-primary btn-sm simDataButton" @click="setKineticProjectId(projectId)" >动能响应</button> 
        </div>
        <div>
          <button id="totalEnergy" class="btn btn-primary btn-sm simDataButton"  @click="setTotalProjectId(projectId)" >总能量响应</button> 
        </div>
      </div>

      <div class="simDataEchartsMiddle">
        <div class="dropdown dropdown-right" @click="getAllProject" style="margin-top: 4%; margin-left: 65%;">
          <div tabindex="0"  class="m-1 btn btn-sm"  style=" width: 6vw; height: 3vh;" > 
            <h1 style="font-size: 1vw;">
              工况选择
            </h1>
          </div> 
          <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box " style="height:200px;width: 11rem;overflow:scroll">
            <li v-for="item in slaveProjectList">
              <a @click="setDeformationProjectId(item.projectId)">{{item.name}}</a>
            </li> 
          </ul>
          </div>

         <div id="sim" style="width: 41vw;height:24vw;"/>
      </div>

      <div class="sensorRight">
        <div id="sensor"  style="width: 26vw;height:21vw;margin-right: 0%; "/>
      </div>

</div>
   

</template>


<script setup lang="ts">

import * as echarts from 'echarts';
import Vue from 'vue'
import {defineComponent,onMounted} from "vue"
import { conditionalExpression } from '@babel/types';
import { getDeformation,getProject,getAcceleration,getForce,getInternal,getKinetic,getTotal,getVelocity} from './services/simData';

import { http } from "./utils/http";
import {options} from './services/video';
import type {SimUrl,SimVideo} from './model/simVideo';
import { ref } from '@vue/reactivity';
import type { SlaveSimDataProject } from './model/deformation';


const simUrl = ref<SimUrl>('');
const simVideoList = ref<SimVideo[]>([]);
const slaveProjectList = ref<SlaveSimDataProject[]>([]);

const getSimVideo=simList; 
const playSimVideo=getUrl;


const uploadInput = ref<HTMLElement| null>(null);

const Dealfilechange=dealfilechange;
const Upload=upload;
const uploadResult=ref<string>('');



const projectId = ref<number>(1);

var sim = ref<any>();


let newPromise = new Promise((resolve) => {
		resolve()
	})
	//然后异步执行echarts的初始化函数
	newPromise.then(() => {
		//	此dom为echarts图标展示dom

    sim = echarts.init(document.getElementById('sim'));
    // var sensor = echarts.init(document.getElementById('sensor'));

    // simEchartGet(sim);
    getDeformation(projectId.value,sim);
    // simEchartGet(sensor);
    window.addEventListener("resize",() => {
      sim.resize();
      // sensor.resize();
    })
	})



async function dealfilechange(e:Event){
    const input  = e.target as HTMLInputElement;
    let files = input.files;
    if(files){
        const formData=new window.FormData();
        formData.append('multipartFile',files[0]);
        const result = await http.post<string>('/se/video/upload',formData,{
          headers:{
            'Content-Type':'multipart/form-data'
          }
        }).then(result=> uploadResult.value=result.data);
        alert(uploadResult.value);
    }
}

async function setDeformationProjectId(tempId:number){
   projectId.value=tempId;
   console.log(projectId.value);
   getDeformation(projectId.value,sim);
}


async function setAccelerationProjectId(tempId:number){
   projectId.value=tempId;
   console.log(projectId.value);
   getAcceleration(projectId.value,sim);
}

async function setForceProjectId(tempId:number){
   projectId.value=tempId;
   console.log(projectId.value);
   getForce(projectId.value,sim);
}

async function setInternalProjectId(tempId:number){
   projectId.value=tempId;
   console.log(projectId.value);
   getInternal(projectId.value,sim);
}

async function setKineticProjectId(tempId:number){
   projectId.value=tempId;
   console.log(projectId.value);
   getKinetic(projectId.value,sim);
}

async function setTotalProjectId(tempId:number){
   projectId.value=tempId;
   console.log(projectId.value);
   getTotal(projectId.value,sim);
}

async function setVelocityProjectId(tempId:number){
   projectId.value=tempId;
   console.log(projectId.value);
   getVelocity(projectId.value,sim);
}

function upload(){
  // console.log(uploadInput.value)
  let oBtn = uploadInput.value as HTMLInputElement;
  oBtn.click();
}


function getAllProject(){
    getProject().then(result => slaveProjectList.value = result)
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

  .headTitle{
  
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


  .unityLeft{
    margin-top: 3%;
    float: left;
    margin-left: 0%;
  }

  .simDataMiddle{
    margin-top: 3%;
    float: left;
    margin-left: 1.5%;
  }

  .simDataEchartsMiddle{
    margin-top: 0%;
    float: left;
    margin-left: 0%;
  }

  .sensorRight{
    margin-top: 5.5%;
    float: right;
    margin-right: 0%;
  }

  .simDataTitle{
    max-width: 65rem;
    margin-top: 0%;
    font-size: 1.5vw;
    line-height: 1;
    font-weight: 600;
    color: beige;
    padding:  0 auto;
  }

  .simDataButton{
    margin-top: 10%;
    width: 7.5vw;
    height: 3.5vh;
  }

  

</style>
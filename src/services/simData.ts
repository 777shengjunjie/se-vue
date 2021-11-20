import * as echarts from 'echarts';
import { http } from '../utils/http';
import type { Deformation ,SlaveSimDataProject} from '../model/SlaveSimdata';



export async function getProject() {

  const result=await http.get<SlaveSimDataProject[]>('/se/slaveSim/getProject');
  return result.data;

}


export async function getDeformation(projectId:number,myChart:any) {
  const result =await http.get<any>('/se/slaveSim/deformation/'+projectId);
  if (Object.keys(result.data).length==1||"当前数据不存在于数据中"==(result.data)){
    myChart.clear();
    alert("数据不存在，请重新上传");
    return
  }
  runDeformationEcharts(result.data,myChart);
}


function runDeformationEcharts(_rawData:any,myChart:any) {

  const datasetWithFilters = [];
  const seriesList = [];

    var datasetId = 'dataset_deformation';
    datasetWithFilters.push({
      id: datasetId,
      fromDatasetId: 'dataset_raw',
      transform: {
        type: 'filter',
        config: {
          and: [
            { dimension: 'crashTime', gte: 0 },
          ]
        }
      }
    });
    console.log(datasetWithFilters)
    seriesList.push({
      type: 'line',
      datasetId: datasetId,
      showSymbol: false,
      name: "纵向变形",
      endLabel: {
        show: true,
        formatter: function (params:any) {
          return "纵向变形"+" : "+ params.value[1] ;
        }
      },
      labelLayout: {
        moveOverlap: 'shiftY'
      },
      emphasis: {
        focus: 'series'
      },
      encode: {
        x: 'crashTime',
        y: 'deformationX',
        label: ['Time', 'deformationX'],
        itemName: 'deformationX',
        tooltip: ['deformationX']
      }
    });

  console.log(seriesList)

  var option = {
    animationDuration: 10000,
    dataset: [
      {
        id: 'dataset_raw',
        source: _rawData
      },
      ...datasetWithFilters
    ],
    // title: {
    //   text: 'Income of Germany and France since 1950'
    // },
    tooltip: {
      order: 'valueDesc',
      trigger: 'axis'
    },
    xAxis: {
      name: '碰撞时间',
      type: 'category',
      // nameLocation: 'right'
    },
    yAxis: {
      name: '纵向变形(mm)'
    },
    grid: {
      right: 140
    },
    
    series: seriesList
  };
  myChart.clear();
  myChart.setOption(option);
}


export async function getAcceleration(projectId:number,myChart:any) {
  const result =await http.get<any>('/se/slaveSim/acceleration/'+projectId);
  if (Object.keys(result.data).length==1||"当前数据不存在于数据中"==(result.data)){
    myChart.clear();
    alert("数据不存在，请重新上传");
    return
  }
  runAccelerationEcharts(result.data,myChart);
}


function runAccelerationEcharts(_rawData:any,myChart:any) {

  const datasetWithFilters = [];
  const seriesList = [];

    var datasetId = 'dataset_deformation';
    datasetWithFilters.push({
      id: datasetId,
      fromDatasetId: 'dataset_raw',
      transform: {
        type: 'filter',
        config: {
          and: [
            { dimension: 'crashTime', gte: 0 },
          ]
        }
      }
    });
    console.log(datasetWithFilters)
    seriesList.push({
      type: 'line',
      datasetId: datasetId,
      showSymbol: false,
      name: "纵向加速度",
      endLabel: {
        show: true,
        formatter: function (params:any) {
          return "纵向加速度"+" : "+ params.value[1] ;
        }
      },
      labelLayout: {
        moveOverlap: 'shiftY'
      },
      emphasis: {
        focus: 'series'
      },
      encode: {
        x: 'crashTime',
        y: 'accelerationX',
        label: ['Time', 'accelerationX'],
        itemName: 'accelerationX',
        tooltip: ['accelerationX']
      }
    });

  console.log(seriesList)

  var option = {
    animationDuration: 10000,
    dataset: [
      {
        id: 'dataset_raw',
        source: _rawData
      },
      ...datasetWithFilters
    ],
    // title: {
    //   text: 'Income of Germany and France since 1950'
    // },
    tooltip: {
      order: 'valueDesc',
      trigger: 'axis'
    },
    xAxis: {
      name: '碰撞时间',
      type: 'category',
      // nameLocation: 'right'
    },
    yAxis: {
      name: '纵向加速度(mm/s^2)'
    },
    grid: {
      right: 140
    },
    
    series: seriesList
  };
  myChart.clear();
  myChart.setOption(option);
}

export async function getForce(projectId:number,myChart:any) {
  const result =await http.get<any>('/se/slaveSim/force/'+projectId);
  if (Object.keys(result.data).length==1||"当前数据不存在于数据中"==(result.data)){
    myChart.clear();
    alert("数据不存在，请重新上传");
    return
  }
  runAccelerationEcharts(result.data,myChart);
}


function runForceEcharts(_rawData:any,myChart:any) {

  const datasetWithFilters = [];
  const seriesList = [];

    var datasetId = 'dataset_deformation';
    datasetWithFilters.push({
      id: datasetId,
      fromDatasetId: 'dataset_raw',
      transform: {
        type: 'filter',
        config: {
          and: [
            { dimension: 'crashTime', gte: 0 },
          ]
        }
      }
    });
    console.log(datasetWithFilters)
    seriesList.push({
      type: 'line',
      datasetId: datasetId,
      showSymbol: false,
      name: "界面力",
      endLabel: {
        show: true,
        formatter: function (params:any) {
          return "界面力"+" : "+ params.value[1] ;
        }
      },
      labelLayout: {
        moveOverlap: 'shiftY'
      },
      emphasis: {
        focus: 'series'
      },
      encode: {
        x: 'crashTime',
        y: 'forceX',
        label: ['Time', 'forceX'],
        itemName: 'forceX',
        tooltip: ['forceX']
      }
    });

  console.log(seriesList)

  var option = {
    animationDuration: 10000,
    dataset: [
      {
        id: 'dataset_raw',
        source: _rawData
      },
      ...datasetWithFilters
    ],
    // title: {
    //   text: 'Income of Germany and France since 1950'
    // },
    tooltip: {
      order: 'valueDesc',
      trigger: 'axis'
    },
    xAxis: {
      name: '碰撞时间',
      type: 'category',
      // nameLocation: 'right'
    },
    yAxis: {
      name: '界面力(N)'
    },
    grid: {
      right: 140
    },
    
    series: seriesList
  };
  myChart.clear();
  myChart.setOption(option);
}



export async function getInternal(projectId:number,myChart:any) {
  const result =await http.get<any>('/se/slaveSim/internal/'+projectId);
  if (Object.keys(result.data).length==1||"当前数据不存在于数据中"==(result.data)){
    myChart.clear();
    alert("数据不存在，请重新上传");
    return
  }
  runInternalEcharts(result.data,myChart);
}


function runInternalEcharts(_rawData:any,myChart:any) {

  const datasetWithFilters = [];
  const seriesList = [];

    var datasetId = 'dataset_deformation';
    datasetWithFilters.push({
      id: datasetId,
      fromDatasetId: 'dataset_raw',
      transform: {
        type: 'filter',
        config: {
          and: [
            { dimension: 'crashTime', gte: 0 },
          ]
        }
      }
    });
    console.log(datasetWithFilters)
    seriesList.push({
      type: 'line',
      datasetId: datasetId,
      showSymbol: false,
      name: "内能",
      endLabel: {
        show: true,
        formatter: function (params:any) {
          return "内能"+" : "+ params.value[1] ;
        }
      },
      labelLayout: {
        moveOverlap: 'shiftY'
      },
      emphasis: {
        focus: 'series'
      },
      encode: {
        x: 'crashTime',
        y: 'internal',
        label: ['Time', 'internal'],
        itemName: 'internal',
        tooltip: ['internal']
      }
    });

  console.log(seriesList)

  var option = {
    animationDuration: 10000,
    dataset: [
      {
        id: 'dataset_raw',
        source: _rawData
      },
      ...datasetWithFilters
    ],
    // title: {
    //   text: 'Income of Germany and France since 1950'
    // },
    tooltip: {
      order: 'valueDesc',
      trigger: 'axis'
    },
    xAxis: {
      name: '碰撞时间',
      type: 'category',
      // nameLocation: 'right'
    },
    yAxis: {
      name: '内能（10^-3J）'
    },
    grid: {
      right: 140
    },
    
    series: seriesList
  };
  myChart.clear();
  myChart.setOption(option);
}

export async function getKinetic(projectId:number,myChart:any) {
  const result =await http.get<any>('/se/slaveSim/kinetic/'+projectId);
  if (Object.keys(result.data).length==1||"当前数据不存在于数据中"==(result.data)){
    myChart.clear();
    alert("数据不存在，请重新上传");
    return
  }
  runKineticEcharts(result.data,myChart);
}


function runKineticEcharts(_rawData:any,myChart:any) {

  const datasetWithFilters = [];
  const seriesList = [];

    var datasetId = 'dataset_deformation';
    datasetWithFilters.push({
      id: datasetId,
      fromDatasetId: 'dataset_raw',
      transform: {
        type: 'filter',
        config: {
          and: [
            { dimension: 'crashTime', gte: 0 },
          ]
        }
      }
    });
    console.log(datasetWithFilters)
    seriesList.push({
      type: 'line',
      datasetId: datasetId,
      showSymbol: false,
      name: "动能",
      endLabel: {
        show: true,
        formatter: function (params:any) {
          return "动能"+" : "+ params.value[1] ;
        }
      },
      labelLayout: {
        moveOverlap: 'shiftY'
      },
      emphasis: {
        focus: 'series'
      },
      encode: {
        x: 'crashTime',
        y: 'kineticl',
        label: ['Time', 'kinetic'],
        itemName: 'kinetic',
        tooltip: ['kinetic']
      }
    });

  console.log(seriesList)

  var option = {
    animationDuration: 10000,
    dataset: [
      {
        id: 'dataset_raw',
        source: _rawData
      },
      ...datasetWithFilters
    ],
    // title: {
    //   text: 'Income of Germany and France since 1950'
    // },
    tooltip: {
      order: 'valueDesc',
      trigger: 'axis'
    },
    xAxis: {
      name: '碰撞时间',
      type: 'category',
      // nameLocation: 'right'
    },
    yAxis: {
      name: '动能（10^-3J）'
    },
    grid: {
      right: 140
    },
    
    series: seriesList
  };
  myChart.clear();
  myChart.setOption(option);
}


export async function getTotal(projectId:number,myChart:any) {
  const result =await http.get<any>('/se/slaveSim/total/'+projectId);
  if (Object.keys(result.data).length==1||"当前数据不存在于数据中"==(result.data)){
    myChart.clear();
    alert("数据不存在，请重新上传");
    return
  }
  runTotalEcharts(result.data,myChart);
}


function runTotalEcharts(_rawData:any,myChart:any) {

  const datasetWithFilters = [];
  const seriesList = [];

    var datasetId = 'dataset_deformation';
    datasetWithFilters.push({
      id: datasetId,
      fromDatasetId: 'dataset_raw',
      transform: {
        type: 'filter',
        config: {
          and: [
            { dimension: 'crashTime', gte: 0 },
          ]
        }
      }
    });
    console.log(datasetWithFilters)
    seriesList.push({
      type: 'line',
      datasetId: datasetId,
      showSymbol: false,
      name: "总能量",
      endLabel: {
        show: true,
        formatter: function (params:any) {
          return "总能量"+" : "+ params.value[1] ;
        }
      },
      labelLayout: {
        moveOverlap: 'shiftY'
      },
      emphasis: {
        focus: 'series'
      },
      encode: {
        x: 'crashTime',
        y: 'total',
        label: ['Time', 'total'],
        itemName: 'total',
        tooltip: ['total']
      }
    });

  console.log(seriesList)

  var option = {
    animationDuration: 10000,
    dataset: [
      {
        id: 'dataset_raw',
        source: _rawData
      },
      ...datasetWithFilters
    ],
    // title: {
    //   text: 'Income of Germany and France since 1950'
    // },
    tooltip: {
      order: 'valueDesc',
      trigger: 'axis'
    },
    xAxis: {
      name: '碰撞时间',
      type: 'category',
      // nameLocation: 'right'
    },
    yAxis: {
      name: '总能量（10^-3J）'
    },
    grid: {
      right: 140
    },
    
    series: seriesList
  };
  myChart.clear();
  myChart.setOption(option);
}


export async function getVelocity(projectId:number,myChart:any) {
  const result =await http.get<any>('/se/slaveSim/velocity/'+projectId);

  if (Object.keys(result.data).length==1||"当前数据不存在于数据中"==(result.data)){
    myChart.clear();
    alert("数据不存在，请重新上传");
    return
  }
  runVelocityEcharts(result.data,myChart);
}


function runVelocityEcharts(_rawData:any,myChart:any) {

  const datasetWithFilters = [];
  const seriesList = [];

    var datasetId = 'dataset_deformation';
    datasetWithFilters.push({
      id: datasetId,
      fromDatasetId: 'dataset_raw',
      transform: {
        type: 'filter',
        config: {
          and: [
            { dimension: 'crashTime', gte: 0 },
          ]
        }
      }
    });
    console.log(datasetWithFilters)
    seriesList.push({
      type: 'line',
      datasetId: datasetId,
      showSymbol: false,
      name: "速度",
      endLabel: {
        show: true,
        formatter: function (params:any) {
          return "速度"+" : "+ params.value[1] ;
        }
      },
      labelLayout: {
        moveOverlap: 'shiftY'
      },
      emphasis: {
        focus: 'series'
      },
      encode: {
        x: 'crashTime',
        y: 'velocityX',
        label: ['Time', 'velocityX'],
        itemName: 'velocityX',
        tooltip: ['velocityX']
      }
    });

  console.log(seriesList)

  var option = {
    animationDuration: 10000,
    dataset: [
      {
        id: 'dataset_raw',
        source: _rawData
      },
      ...datasetWithFilters
    ],
    // title: {
    //   text: 'Income of Germany and France since 1950'
    // },
    tooltip: {
      order: 'valueDesc',
      trigger: 'axis'
    },
    xAxis: {
      name: '碰撞时间',
      type: 'category',
      // nameLocation: 'right'
    },
    yAxis: {
      name: '速度(mm/s)'
    },
    grid: {
      right: 140
    },
    
    series: seriesList
  };
  myChart.clear();
  myChart.setOption(option);
}

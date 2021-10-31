import { reactive } from "vue";
import mv from '../assets/mp4/movie.mp4';
import { http } from "../utils/http";






export async function getUrl() {
    const result=await http.post<string>('/se/video/url');
    return result;
}


export const options = reactive({
  width: "31vw", //播放器高度
  height: "20vw", //播放器高度
  color: "#409eff", //主题色
  title: "", //视频名称
  // src: simUrl.value, //视频源
  muted: false, //静音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面ya
  ligthOff: false, //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制
  controlBtns: [
    "audioTrack",
    "quality",
    "speedRate",
    "volume",
    "setting",
    "pip",
    "pageFullScreen",
    "fullScreen",
  ], //显示所有按钮,
});
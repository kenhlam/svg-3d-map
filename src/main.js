
import "./style.css";
import _SVG_Initialize from './lib/index';
import CD_SVG from './lib/chengdu';
initSvgMap()
function initSvgMap() {
  const svgPath = CD_SVG.map(v => {
      return v.path
  })
  const MZInit = new _SVG_Initialize(svgPath);
  MZInit.init('app', {
      tags: {
          fontColor: "RGBA(200,223,249,.9)",//文字 
          fontSize: 2,
          fontHover: "rgba(255,0,0,1)"

      },
      sceneStyle: {
          blockColor: "RGBA(27,46,94,.6)",//区域

          blockHeight: 1,

          borderColor: "RGBA(53,110,195,.7)",//区域边框
          borderWidth: 1,
      },
      texture: {
      },
      // 外发光
      outerGlow: {
          glowColor: "rgba(22,71,121,.9)",
          size: 1,
          perTime: 2,
      },
      controls: {
          enableZoom: true, enableRotate: true,
      },
      camera: { fov: 50 }
  });

  const series = CD_SVG.map((v, i) => {
      return {
          _id: v.id, name: v.name, coord: "", color: "", height: 0, weight: 0, showSpot: true,
          point: [
              { txue: 's1', size: 4, text: [v.name], offset: v.offset || [0, 0], textOffset: [0, -40], color: '#02F42C', mouseEvent: true }
          ]
      }
  })
  const svgData = {
      _width: 1230.31396484375,
      _height: 1019.344970703125,
      series: series
  };


  MZInit.setSVGMap(svgData, { type: 0, perTime: 1.8 });

  MZInit.render();

  MZInit.onMouseDownEvent(function (name, position, obj, type) {
      console.log(name, position, obj, type);
  });

}
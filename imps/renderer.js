define([

],function(

){
  var canvas = document.getElementById('three_demo');
  var renderer = new THREE.WebGLRenderer({antialias:true});//生成渲染器对象（属性：抗锯齿效果为设置有效）
  renderer.setSize(canvas.clientWidth, canvas.clientHeight );//指定渲染器的高宽（和画布框大小一致）
  canvas.appendChild(renderer.domElement);//追加 【canvas】 元素到 【canvas3d】 元素中。
  renderer.setClearColor(0xFFFFFF, 1.0);//设置canvas背景色(clearColor)
  return renderer;
});
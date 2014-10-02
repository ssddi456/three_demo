define([

],function(

){
  var camera = new THREE.PerspectiveCamera( 35, 700/400, 0.1 , 100 );//设置透视投影的相机,默认情况下相机的上方向为Y轴，右方向为X轴，沿着Z轴朝里（视野角：fov 纵横比：aspect 相机离视体积最近的距离：near 相机离视体积最远的距离：far）
  camera.position.set(7.5,-6.5,1);
  
  var up = camera.up;
  up.x = 0;//设置相机的上为「x」轴方向
  up.y = 0;//设置相机的上为「y」轴方向
  up.z = 1;//设置相机的上为「z」轴方向
  camera.lookAt({ x:-5, y:3.5, z:2 });//设置视野的中心坐标
  return camera;
});
require.config({
  baseUrl: './imps'
});

require([
  './top_renderer',
  './top_camera',
  './camera',
  './scene',
  './renderer'
],function(
  top_renderer,
  top_camera,
  camera,
  scene,
  renderer
){
  
  function set_up_scence ( renderer, camera ) {
    var _scene = scene.get();
    function animate () {
      _scene.update && _scene.update();
      render();
      requestAnimationFrame(animate);
    }
    function render () {
      renderer.clear(); 
      renderer.render(_scene, camera);
    }

    animate();
  }
  set_up_scence(renderer,    camera    );
  set_up_scence(top_renderer,top_camera);


});
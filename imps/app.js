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
    
  renderer.clear(); 
  renderer.render(scene.get(), camera);
  
  setTimeout(function() {
    top_renderer.clear();
    top_renderer.render(scene.get(), top_camera);
  })

});
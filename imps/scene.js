define([
  '../models/cave'
],function(
  cave
){
  return {
    get:function() {

      var scene = new THREE.Scene();

      var light_d = new THREE.PointLight(0xffffff, 1.0, 100);
      light_d.position.set( 10,10,10 );
      scene.add(light_d);

      var light_dim = new THREE.Mesh(
                      new THREE.BoxGeometry(1,1,1),
                      new THREE.MeshLambertMaterial({ "color": 0x00ff00}));
      light_dim.position.set(10,10,11 );
      scene.add(light_dim);
        
      var loader = new THREE.JSONLoader();
      var res    = loader.parse(cavemodels);

      var cave = new THREE.Mesh(
                    res.geometry,
                    new THREE.MeshLambertMaterial({
                         "color": 0xff0000,
                         "ambient": 0xff00ff,
                         "emissive": 0,
                         "opacity": 1,
                         "shading": THREE.FlatShading,
                         // "wireframe":true,
                         "blending": "NormalBlending" }) 
                 );
      cave.castShadow     = 
      cave.receiveShadow  = true;
      cave.position.set(0, -0.0297058, -0.244215);
      scene.add(cave);

      var camera = new THREE.Mesh(
                      new THREE.BoxGeometry(1,1,1),
                      new THREE.MeshLambertMaterial({ "color": 0x00ff00}));
      camera.position.set(7.5,-6.5,1);
      scene.add(camera);
      return scene;
    }
  };
});
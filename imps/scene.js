define([
  '../models/cave.curves',
  '../models/cave'
],function(
  _curves,
  cave
){
  return {
    get:function() {

      var scene = new THREE.Scene();

      var light_d = new THREE.PointLight(0x8FF9FF, 0.8, 50);
      light_d.position.set( 10,10,10 );
      scene.add(light_d);
      
      (function dims () {
          
        var light_dim = new THREE.Mesh(
                        new THREE.BoxGeometry(1,1,1),
                        new THREE.MeshLambertMaterial({ "color": 0x00ff00 }));

        light_dim.position.set(10,10,11 );
        scene.add(light_dim);
        
        var camera = new THREE.Mesh(
                        new THREE.BoxGeometry(1,1,1),
                        new THREE.MeshLambertMaterial({ "color": 0x00ff00 }));
        camera.position.set(7.5,-6.5,1);
        scene.add(camera);

      })();


      var loader = new THREE.JSONLoader();
      var res    = loader.parse(cavemodels);

      var cave = new THREE.Mesh(
                    res.geometry,
                    new THREE.MeshPhongMaterial({
                      "color"        : 0x3DBAE7,
                      "specular"     : 0x3DBAE7,
                      "shading"      : THREE.FlatShading,
                      "shininess"    : 80,
                      // "wireframe" : true,
                    }) 
                 );
      cave.castShadow     = 
      cave.receiveShadow  = true;
      cave.position.set(0, -0.0297058, -0.244215);
      scene.add(cave);


      function arr_to_point ( arr ) {
        return {
          x : arr[0],
          y : arr[1],
          z : arr[2]
        };
      }
      function create_curve_path( bp1, idx, arr ) {
        var bp2 = arr[idx + 1];
        if(!bp2){
          return
        }
        return new THREE.CubicBezierCurve3( arr_to_point(bp1[1]),
                                            arr_to_point(bp1[2]),
                                            arr_to_point(bp2[0]),
                                            arr_to_point(bp2[1]));
      }

      var curvepath = new THREE.CurvePath();
      for(curve in curves){
        curves[curve].forEach(function() {
          var path = create_curve_path.apply(null,arguments);
          path && curvepath.add(path);
        });
      }


      curvepath.closePath();

      // scene.add(
      //   new THREE.Line(
      //     curvepath.createPointsGeometry(curvepath.curves.length * 6),
      //     new THREE.LineBasicMaterial({color: 0x000000 , linewidth : 1 })));

      var spirits = new THREE.Mesh(
                      new THREE.SphereGeometry(0.08,10,10),
                      new THREE.MeshLambertMaterial({
                        emissive : 0xff33ff
                      }));
      scene.add(spirits);

      var frames = 30*30;
      var counter = 0;
      function update () {
        var d = (counter++ ) / frames;
        d > 1 && (counter = 0, d = 0);
        var p = curvepath.getPoint(d);
        spirits.position.set(p.x,p.y,p.z);
      }

      scene.update = update;

      return scene;
    }
  };
});
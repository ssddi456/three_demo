{

"metadata" :
{
	"formatVersion" : 3.2,
	"type"          : "scene",
	"sourceFile"    : "cave.blend",
	"generatedBy"   : "Blender 2.7 Exporter",
	"objects"       : 3,
	"geometries"    : 1,
	"materials"     : 1,
	"textures"      : 0
},

"urlBaseType" : "relativeToScene",


"objects" :
{
	"Cube" : {
		"geometry"  : "geo_Cube.001",
		"groups"    : [  ],
		"material"  : "Material",
		"position"  : [ 0, -0.0297058, -0.244215 ],
		"rotation"  : [ -0, 0, -0 ],
		"quaternion": [ 0, 0, 0, 1 ],
		"scale"     : [ 1, 1, 1 ],
		"visible"       : true,
		"castShadow"    : true,
		"receiveShadow" : true,
		"doubleSided"   : false
	},

	"Lamp" : {
		"type"       : "PointLight",
		"position"   : [ 4.07625, 1.00545, 5.90386 ],
		"rotation"   : [ 0.650328, 0.0552171, 1.86639 ],
		"color"      : 16777215,
		"distance"   : 30.000,
		"intensity"  : 1.000
	},

	"Camera" : {
		"type"  : "PerspectiveCamera",
		"fov"   : 49.159264,
		"aspect": 1.333000,
		"near"  : 0.100000,
		"far"   : 100.000000,
		"position": [ 7.48113, 6.50764, 1.05181 ],
		"target"  : [ 0, 0, 0 ]
	}
},


"geometries" :
{
	"geo_Cube.001" : {
		"type" : "embedded",
		"id"  : "emb_Cube.001"
	}
},


"materials" :
{
	"Material" : {
		"type": "MeshLambertMaterial",
		"parameters": { "color": 10724259, "ambient": 10724259, "emissive": 0, "opacity": 1, "blending": "NormalBlending" }
	}
},


"embeds" :
{
"emb_Cube.001": {	"scale" : 1.000000,

	"materials" : [],

	"vertices" : [],

	"morphTargets" : [],

	"normals" : [],

	"colors" : [],

	"uvs" : [[]],

	"faces" : [],

	"bones" : [],

	"skinIndices" : [],

	"skinWeights" : [],

  "animations" : []
}
},


"transform" :
{
	"position"  : [ 0, 0, 0 ],
	"rotation"  : [ 0, 0, 0 ],
	"scale"     : [ 1, 1, 1 ]
},

"defaults" :
{
	"bgcolor" : [ 0, 0, 0 ],
	"bgalpha" : 1.000000,
	"camera"  : "Camera"
}

}

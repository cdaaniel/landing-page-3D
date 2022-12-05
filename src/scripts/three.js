import { ObjectLoader, Object3D } from "three";
import { GLTFLoader } from "./utils/GLTFLoader";
import { STLLoader } from "./utils/STLLoader";

const log = console.log.bind(console);

// Config scene
let scene = new THREE.Scene();
THREE.Cache.enabled = true;

// Config renderer
let renderer = new THREE.WebGLRenderer();
renderer.setSize(500, 500);

//set transparent bg
renderer.setClearColor(0xffffff, 0);
scene.background = null;
renderer.domElement.id = 'canvas'; // So i can easily syle it
document.getElementById('renderElement').appendChild(renderer.domElement);
// Dont mismatch renderElement and canvas because one defines the canvas and one defines the renderer

let canvasELement = document.getElementById('canvas');

// Config camera
let lense = {
    fov: 1,
    aspect: canvasELement.width / canvasELement.height,
    near: 10,
    far: 0
};
let camera = new THREE.PerspectiveCamera(lense.fov, lense.aspect, lense.near, lense.far);

// Load stuff
let loader = new GLTFLoader();
loader.load('src/models/iphone/scene.gltf', (gltf) => {

    scene.add(gltf.scene);

}, undefined, (err) => {
    console.error(err);
});

// Add point lights
let pointLight = new THREE.PointLight(0xFFFFFF, 1, 100);
pointLight.position.set(0, 0, 50);
let pointLight2 = new THREE.PointLight(0xFFFFFF, 1, 100)
pointLight2.position.set(10, 0, 10);
let pointLight3 = new THREE.PointLight(0xFFFFFF, 1, 100);
pointLight3.position.set(-10, 0, 10);

scene.add(pointLight3);
scene.add(pointLight2);
scene.add(pointLight);

// let loader = new STLLoader();
// let fubar = new THREE.Object3D();
// loader.load('src/models/Formats/STL/XR-Nope.stl', (obj) => {

//     // fubar = obj.scene;
//     scene.add(obj.scene);

// }, undefined, (err) => {
//     console.error(err);
// });

// Runtime config
let controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.set(5, 0, 10);
controls.update();

let animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate(); // -- Entry point
//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
// allow to create animation in camera position
import TWEEN from "https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.5.0/dist/tween.esm.js";

let canvasform = document.getElementById('dCanvas');
let width = canvasform.offsetWidth;
let height =  canvasform.offsetHeight;
//Create a Three.JS Scene
const scene = new THREE.Scene();
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//Keep track of the mouse position, so we can make the eye move
let mouseX = width / 2;
let mouseY = height / 2;
//Keep the 3D object on a global variable so we can access it later
let object;
//OrbitControls allow the camera to move around the scene
let controls;
//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();
//Load the file
loader.load(
  `/pc-9801ux/scene.gltf`,
  function (gltf) {
    //If the file is loaded, add it to the scene
    object = gltf.scene;
    object.scale.set(0.05, 0.05, 0.05);  // Adjust scale to make the model smaller

    scene.add(object);
  }
);

//Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(width, height); 

//Add the renderer to the DOM
document.getElementById("dCanvas").appendChild(renderer.domElement);
//Set how far the camera will be from the 3D model
camera.position.set(8, 4, 15);  // Move the camera back to see the whole model


//Add lights to the scene, so we can actually see the 3D model
let ambientLight = new THREE.AmbientLight(0x404040,1);
scene.add(ambientLight);
let directionalLight = new THREE.DirectionalLight(0xffffff,1);
directionalLight.position.set(0,0.5,0);
directionalLight.castShadow = true;
scene.add(directionalLight);
let light = new THREE.PointLight(0xc4c4c4,5);
light.position.set(0,20,40);
scene.add(light);


//This adds controls to the camera, so we can rotate / zoom it with the mouse
controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();


//Render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  TWEEN.update();
}
animate();


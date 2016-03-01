import React from 'react';
import ReactDOM from 'react-dom';

require('../scss/app.scss');

const THREE = global.THREE;
const Detector = global.Detector;

var Header = React.createClass({
	render() {
		return (
			<div id="header">{this.props.name}</div>
		);
	}
});

React.render(
	<div id="sphere">
		<Header name="Sørsetra, 28 Feb 2016" />
	</div>,
	document.body
);

/* Credit: https://github.com/turban */
var webglEl = document.getElementById('sphere');

const width = window.innerWidth;
const height = window.innerHeight;

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(100, width / height, 1, 1000);
camera.position.x = 0.01;

var renderer = Detector.webgl ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();
renderer.setSize(width, height);

var sphere = new THREE.Mesh(
	new THREE.SphereGeometry(100, 20, 20),
	new THREE.MeshBasicMaterial({
		map: THREE.ImageUtils.loadTexture('sorsetra.jpg')
	})
);
sphere.scale.x = -1;
scene.add(sphere);

var controls = new THREE.OrbitControls(camera);
controls.noPan = true;
controls.noZoom = true; 
controls.autoRotate = true;
controls.autoRotateSpeed = 0.1;

webglEl.appendChild(renderer.domElement);

render();

function render() {
	controls.update();
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}

function onMouseWheel(event) {
	event.preventDefault();
	
	if (event.wheelDeltaY) { // WebKit
		camera.fov -= event.wheelDeltaY * 0.05;
	} else if (event.wheelDelta) { 	// Opera / IE9
		camera.fov -= event.wheelDelta * 0.05;
	} else if (event.detail) { // Firefox
		camera.fov += event.detail * 1.0;
	}

	camera.fov = Math.max(40, Math.min(100, camera.fov));
	camera.updateProjectionMatrix();
}

document.addEventListener('mousewheel', onMouseWheel, false);
document.addEventListener('DOMMouseScroll', onMouseWheel, false);

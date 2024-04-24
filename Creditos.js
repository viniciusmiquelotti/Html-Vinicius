var cena = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderizador = new THREE.WebGLRenderer();

renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);

// Criação da geometria dos óculos
var geometria = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var cubo = new THREE.Mesh(geometria, material);
cena.add(cubo);

camera.position.z = 5;

// Função de animação
function animate() {
    requestAnimationFrame(animate);
    cubo.rotation.x += 0.01;
    cubo.rotation.y += 0.01;
    renderizador.render(cena, camera);
}
animate();
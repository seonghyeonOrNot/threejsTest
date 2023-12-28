//lion\component\ThreeTest.js
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function initThreeScene(containerElement) {
    

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // '#world' 요소에 렌더러를 추가합니다
   // const worldElement = document.getElementById('world');
    //worldElement.appendChild(renderer.domElement);
    containerElement.appendChild(renderer.domElement);

    const container = document.getElementById('world');

    //gltf 로드 추가
    let gltfModel; // GLTF 모델에 대한 참조를 저장할 변수

    const loader = new GLTFLoader();
    const loadingElement = document.getElementById('loader'); // 로딩 인디케이터 요소

    loader.load('/desk.glb', function (gltf) {
        gltf.scene.rotation.y = Math.PI / 4; // 초기 회전 각도 설정 (옵션)
        gltfModel = gltf.scene; // 로드된 모델 저장

         // 모델의 크기 조절
         const scale = 0.1; // 원하는 크기로 조정 (예: 0.5는 원래 크기의 절반)
         gltfModel.scale.set(scale, scale, scale); // 모델 크기 조정

        scene.add(gltfModel);

        if (loadingElement) {
            loadingElement.style.display = 'none'; // 로딩 인디케이터 숨김
        }
    }, undefined, function (error) {
        if (loadingElement) {
            loadingElement.innerHTML = 'Loading failed'; // 로딩 실패 메시지
        }
    });

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

     // Raycaster와 Mouse 객체를 생성합니다. (추가된 부분)
     const raycaster = new THREE.Raycaster();
     const mouse = new THREE.Vector2();

    // 마우스 움직임에 따라 mouse 객체의 위치를 업데이트합니다. (추가된 부분)
    function onMouseMove(event) {
        // 마우스 위치를 정규화된 장치 좌표로 변환합니다 (-1 ~ +1 범위 내)
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    }

    window.addEventListener('mousemove', onMouseMove, false);

    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', () => {
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
      });

    

    // animate 함수 내부에서 렌더링을 처리합니다
    function animate() {
        requestAnimationFrame(animate);

        if (gltfModel) {
            gltfModel.rotation.y += 0.01; // 모델을 y축을 중심으로 회전
        }

         // 카메라와 마우스 위치를 사용하여 레이캐스팅을 업데이트합니다. (추가된 부분)
         raycaster.setFromCamera(mouse, camera);

         // 레이캐스터가 cube 객체와 교차하는지 확인합니다. (추가된 부분)
         const intersects = raycaster.intersectObjects([cube]);
 
         // cube 위에 마우스가 있는 경우에만 회전 속도를 높입니다. (추가된 부분)
         const rotationSpeed = intersects.length > 0 ? 0.05 : 0.01;
         cube.rotation.x += rotationSpeed;
         cube.rotation.y += rotationSpeed;
 
         renderer.render(scene, camera);
    }

    // 애니메이션 시작
    animate();
}
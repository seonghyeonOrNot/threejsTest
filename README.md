# threejsTest

#### 프로젝트 개요
이 프로젝트는 React와 Three.js를 사용하여 웹 페이지에 3D 콘텐츠를 표시하는 방법을 보여줍니다. 기본적으로 GLTF 형식의 3D 모델(`desk.glb`)을 로드하고, 사용자가 상호작용할 수 있는 간단한 3D 씬을 생성합니다.

#### 주요 기능
1. **3D 모델 로딩 및 표시**: `.glb` 포맷의 3D 모델을 로드하고 화면에 표시합니다.
2. **모델 크기 조정 및 회전 애니메이션**: 로드된 3D 모델의 크기를 조절하고, 지속적으로 회전시켜 동적인 씬을 제공합니다.
3. **로딩 인디케이터**: 모델이 로딩되는 동안 사용자에게 상태를 알리는 로딩 인디케이터를 표시합니다.
4. **반응형 디자인**: 윈도우 크기에 따라 씬의 크기가 조정되며, 카메라 비율이 유지됩니다.
5. **마우스 인터랙션**: 마우스 움직임에 따라 3D 씬 내의 객체와 상호작용할 수 있는 기능을 포함합니다.

#### 기술 스택
- **React**: 사용자 인터페이스 구축
- **Three.js**: WebGL을 기반으로 하는 3D 그래픽 렌더링
- **GLTFLoader**: Three.js의 확장 기능으로 GLTF 형식의 3D 모델을 로드

#### 프로젝트 구성
- `ThreeTest.js`: Three.js를 사용하여 3D 씬을 초기화하고, 모델을 로드 및 관리하는 주요 컴포넌트입니다.
- `Home.js`: React 컴포넌트로, 사용자 인터페이스를 구성하고 `ThreeTest.js`의 3D 씬을 통합합니다.

#### 결론
이 프로젝트는 웹 기반의 3D 콘텐츠 표시와 상호작용을 위한 기본적인 구조를 제공합니다. 
Three.js와 React를 통합하여, 복잡한 3D 모델을 웹 애플리케이션에 효과적으로 통합하는 방법을 시연합니다.

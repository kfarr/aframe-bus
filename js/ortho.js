// https://stackoverflow.com/questions/17558085/three-js-orthographic-camera/17567292#17567292

AFRAME.registerComponent('ortho', {
  schema: {
    width: {type: 'number', default: 1.47},
    height: {type: 'number', default: 0.91},
    near: {type: 'number', default: 0.25},
    far: {type: 'number', default: 3.0}
  },
  init: function () {
    var sceneEl = this.el.sceneEl;

    if (!sceneEl.hasLoaded) {
      sceneEl.addEventListener('loaded', this.init.bind(this));
      return;
    }

    this.originalCamera = sceneEl.camera;
    this.cameraParent = sceneEl.camera.parent;

    // var camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, near, far );
    this.orthoCamera = new THREE.OrthographicCamera(
      this.data.width / -2,
      this.data.width / 2,
      this.data.height / -2,
      this.data.height / 2,
      this.data.near,
      this.data.far);

    this.cameraParent.add(this.orthoCamera);
    sceneEl.camera = this.orthoCamera;
  },
  update: function () {
    var sceneEl = this.el.sceneEl;
    threeCamera = sceneEl.camera;
    threeCamera.left = this.data.width / -2;
    threeCamera.right = this.data.width / 2;
    threeCamera.top = this.data.height / -2;
    threeCamera.bottom = this.data.height / 2;
    threeCamera.near = this.data.near;
    threeCamera.far = this.data.far;
    threeCamera.updateProjectionMatrix();
  },
  remove: function () {
    this.cameraParent.remove(this.orthoCamera);
    sceneEl.camera = this.originalCamera;
  }
});

// aframe-state-component definition.
AFRAME.registerState({
  // Initial state of our application. We have the current environment and the active menu.
  initialState: {
    controls: {
      bus1ControllerId: 2,
    },
    layout: {
      rotationY: 270,
      positionY: 0,
      scale: 43
    },
    game: {
      detectionRadius: 2,
      bus1Peeps: 0,
      bus1Capacity: 10,
      stop1Peeps: 10,
      stop2Peeps: 0,
      menu: 'main'
    },
    thisDevice: {
      mode: 'client',
    },
    projector1: {
      position: "0 1 0",
      rotation: "0 0 0",
      width: 2.61,
      height: 1.65,
      near: 0.25,
      far: 2
    }
  },

  // State changes are done via events and are handled here.
  handlers: {
    menuBack: function (state) {
     state.game.menu = 'main';
    },
    menuController: function (state) {
      state.game.menu = 'controller';
    },
    decreaseBus1Peeps: function (state, action) {
      state.game.bus1Peeps -= 1;
    },
    increaseBus1Peeps: function (state, action) {
      state.game.bus1Peeps += 1;
    },
    decreaseStop1Peeps: function (state, action) {
      state.game.stop1Peeps -= 1;
    },
    increaseStop1Peeps: function (state, action) {
      state.game.stop1Peeps += 1;
    },
    increaseStop2Peeps: function (state, action) {
      state.game.stop2Peeps += 1;
    },
    increaseBus1ControllerId: function (state, action) {
      state.controls.bus1ControllerId += 1;
    },
    decreaseBus1ControllerId: function (state, action) {
      state.controls.bus1ControllerId -= 1;
    },
    increaseLayoutRotationY: function (state, action) {
      state.layout.RotationY += 1;
    },
    decreaseLayoutRotationY: function (state, action) {
      state.layout.rotationY -= 1;
    },
    increaseLayoutPositionY: function (state, action) {
      state.layout.positionY += 0.001;
    },
    decreaseLayoutPositionY: function (state, action) {
      state.layout.positionY -= 0.001;
    },
    setServerMode: function (state, action) {
      state.thisDevice.mode = 'server';
    },
    setClientMode: function (state, action) {
      state.thisDevice.mode = 'server';
    },
  },
  computeState: function (newState, payload) {
    // effective distance (radius) to monitor for door zone collision based on scale of scene
    newState.computedDistance = Number(newState.game.detectionRadius) / Number(newState.layout.scale);
    newState.computedScaleString = (1 / Number(newState.layout.scale) + " ").repeat(3);
    newState.computedPositionString = "0 " + Number(newState.layout.positionY) + " 0";
    newState.computedRotationString = "0 " + Number(newState.layout.rotationY) + " 0";
    // console.log(newState.computedPositionString);
  }
});

function keyListener(event){
  // console.log(event.key);
  if (event.key === "t") {AFRAME.scenes[0].emit('increaseGamePositionY')};
  if (event.key === "g") {AFRAME.scenes[0].emit('decreaseGamePositionY')};
  if (event.key === "y") {AFRAME.scenes[0].emit('increaseGameRotationY')};
  if (event.key === "h") {AFRAME.scenes[0].emit('decreaseGameRotationY')};
}

window.addEventListener('keypress', keyListener, false);

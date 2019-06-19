// aframe-state-component definition.
AFRAME.registerState({
  // Initial state of our application. We have the current environment and the active menu.
  initialState: {
    scale: 43,
    detectionRadius: 2,
    bus1Peeps: 0,
    bus1Capacity: 10,
    stop1Peeps: 10,
    stop2Peeps: 0,
    bus1ControllerId: 2,
    gameRotationY: 0,
    gamePositionY: 0,
    worldY: 0,
    menu: 'main',
    mode: 'client',
    weatherData: {
      name: '',
      temperature: 0,
      weather: [{
        main: '',
        icon: ''
      }]
    },
    weatherResults: []
  },

  // State changes are done via events and are handled here.
  handlers: {
    menuBack: function (state) {
     state.menu = 'main';
    },
    menuController: function (state) {
      state.menu = 'controller';
    },
    decreaseBus1Peeps: function (state, action) {
      state.bus1Peeps -= 1;
    },
    increaseBus1Peeps: function (state, action) {
      state.bus1Peeps += 1;
    },
    decreaseStop1Peeps: function (state, action) {
      state.stop1Peeps -= 1;
    },
    increaseStop1Peeps: function (state, action) {
      state.stop1Peeps += 1;
    },
    increaseStop2Peeps: function (state, action) {
      state.stop2Peeps += 1;
    },
    increaseBus1ControllerId: function (state, action) {
      state.bus1ControllerId += 1;
    },
    decreaseBus1ControllerId: function (state, action) {
      state.bus1ControllerId -= 1;
    },
    increaseGameRotationY: function (state, action) {
      state.gameRotationY += 1;
    },
    decreaseGameRotationY: function (state, action) {
      state.gameRotationY -= 1;
    },
    increaseGamePositionY: function (state, action) {
      state.gamePositionY += 0.001;
    },
    decreaseGamePositionY: function (state, action) {
      state.gamePositionY -= 0.001;
    },
    setServerMode: function (state, action) {
      state.mode = 'server';
    },
    setClientMode: function (state, action) {
      state.mode = 'server';
    },
  },
  computeState: function (newState, payload) {
    // effective distance (radius) to monitor for door zone collision based on scale of scene
    newState.computedDistance = Number(newState.detectionRadius) / Number(newState.scale);
    newState.computedScaleString = (1 / Number(newState.scale) + " ").repeat(3);
    newState.computedPositionString = "0 " + Number(newState.gamePositionY) + " 0";
    newState.computedRotationString = "0 " + Number(newState.gameRotationY) + " 0";
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

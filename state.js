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
    menu: 'main',
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
      state.Bus1ControllerId += 1;
    },
    decreaseBus1ControllerId: function (state, action) {
      state.Bus1ControllerId -= 1;
    }


  },
  computeState: function (newState, payload) {
    // effective distance (radius) to monitor for door zone collision based on scale of scene
    newState.computedDistance = Number(newState.detectionRadius) / Number(newState.scale);
    newState.computedScaleString = (1 / Number(newState.scale) + " ").repeat(3);
  }
});

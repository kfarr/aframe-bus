AFRAME.registerComponent('clock', {
  schema: {
    position: {type: 'vec3', default: {x: -.75, y: 1.75, z: -1.75}},
    color: {type: 'color', default: '#0f0'},
    font: {type: 'string', default: 'monoid'}
  },
  init: function () {
    this.clockEl = document.createElement('a-text');
    this.el.appendChild(this.clockEl);
    this.clockEl.setAttribute('position', this.data.position);
    this.clockEl.setAttribute('color', this.data.color);
    this.clockEl.setAttribute('font', this.data.font);
    this.throttledFunction = AFRAME.utils.throttle(this.everySecond, 1000, this);

  },
  everySecond: function () {
    this.clockEl.setAttribute('value', this.getTime());
  },
  tick: function(){
    this.throttledFunction();  // Called once a second.
  },
  getTime: function() {
      var d = new Date();
      return d.toLocaleTimeString();
  }
});

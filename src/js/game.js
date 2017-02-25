const THREE = require("three")

let game = () => {}

game.init = () => {

  this.scene = new THREE.Scene()
  this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  this.renderer = new THREE.WebGLRenderer()

  let loader = new THREE.JSONLoader()
  loader.load("model/car.json", (geometry) => {
    this.car = new THREE.Mesh(geometry)
    this.scene.add(this.car)
  })

  this.renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(this.renderer.domElement)

  this.camera.position.z = 20

}

game.render = () => {

  requestAnimationFrame(game.render)

  if (this.car) { // wait for loader
    this.car.rotation.x += 0.01
    this.car.rotation.y += 0.01
  }

  this.renderer.render(this.scene, this.camera)

}

module.exports = game

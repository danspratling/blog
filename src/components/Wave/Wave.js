/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useEffect } from 'react'
import theme from '../../gatsby-plugin-theme-ui'

const Wave = () => {
  const { colors } = theme
  let cvs, ctx
  let nodes = 6
  let waves = []
  let waveHeight = 60
  let colours = [colors.primary, colors.secondary, colors.accent]

  // Initiator function
  function init() {
    cvs = document.getElementById('canvas')
    ctx = cvs.getContext('2d')
    resizeCanvas(cvs)

    for (var i = 0; i < 3; i++) {
      waves.push(new wave(colours[i], 1, nodes))
    }

    update()
  }

  function update() {
    var fill = 'rgba(0,0,0,0)'
    ctx.fillStyle = fill
    ctx.globalCompositeOperation = 'source-over'
    ctx.fillRect(0, 0, cvs.width, cvs.height)
    ctx.globalCompositeOperation = 'screen'
    for (var i = 0; i < waves.length; i++) {
      for (var j = 0; j < waves[i].nodes.length; j++) {
        bounce(waves[i].nodes[j])
      }
      drawWave(waves[i])
    }
    ctx.fillStyle = fill

    requestAnimationFrame(update)
    console.log('loop')
  }

  function wave(colour, lambda, nodes) {
    this.colour = colour
    this.lambda = lambda
    this.nodes = []

    for (var i = 0; i <= nodes + 2; i++) {
      var temp = [((i - 1) * cvs.width) / nodes, 0, Math.random() * 200, 0.3]
      this.nodes.push(temp)
      console.log(temp)
    }
    console.log(this.nodes)
  }

  function bounce(nodeArr) {
    nodeArr[1] = (waveHeight / 2) * Math.sin(nodeArr[2] / 20) + cvs.height / 2
    nodeArr[2] = nodeArr[2] + nodeArr[3]
  }

  function drawWave(obj) {
    var diff = function(a, b) {
      return (b - a) / 2 + a
    }

    ctx.fillStyle = obj.colour
    ctx.beginPath()
    ctx.moveTo(0, cvs.height)
    ctx.lineTo(obj.nodes[0][0], obj.nodes[0][1])

    for (var i = 0; i < obj.nodes.length; i++) {
      if (obj.nodes[i + 1]) {
        ctx.quadraticCurveTo(
          obj.nodes[i][0],
          obj.nodes[i][1],
          diff(obj.nodes[i][0], obj.nodes[i + 1][0]),
          diff(obj.nodes[i][1], obj.nodes[i + 1][1])
        )
      } else {
        ctx.lineTo(obj.nodes[i][0], obj.nodes[i][1])
        ctx.lineTo(cvs.width, cvs.height)
      }
    }
    ctx.closePath()
    ctx.fill()
  }

  function resizeCanvas(canvas, width, height) {
    if (width && height) {
      canvas.width = width
      canvas.height = height
    } else {
      if (window.innerWidth > 1920) {
        canvas.width = window.innerWidth
      } else {
        canvas.width = 1920
      }

      canvas.height = waveHeight
    }
  }

  useEffect(() => init())
  // document.addEventListener("DOMContentLoaded", init, false)

  return (
    <div className="canvas-wrap">
      <canvas id="canvas"></canvas>
    </div>
  )

  //Semantic -- TODO in react/modern js (copy paste mostly works though doesn't loop - does it need to loop or is it following mouse movement better?)
  //On initial load
  //set canvas size - needs to be full width
  //create 3 waves - I only want a wave as a divider
  //then
  //update something ??
  //set bounce - this is the curvature of the wave
  //draw wave
  //add animation (requestanimationframe is called recursively)
}

export default Wave

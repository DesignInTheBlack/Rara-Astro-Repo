// src/scripts/smooth-scroll.js

import Lenis from 'lenis'

// Initialize Lenis with refined options for a more pleasant experience
const lenis = new Lenis({
  duration: 1.6,  // Slightly longer duration for smoother feel
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Keep the same easing function
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,  // Adjust this value to change scroll speed
  smoothTouch: true,   // Enable smooth scrolling on touch devices
  touchMultiplier: 2,
  infinite: false,     // Set to true if you want infinite scrolling
})

// Lenis scroll handler
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

// Start the animation
requestAnimationFrame(raf)

// Add a scroll progress indicator
const progressBar = document.createElement('div')
progressBar.style.position = 'fixed'
progressBar.style.top = '0'
progressBar.style.left = '0'
progressBar.style.width = '0%'
progressBar.style.height = '4px'
progressBar.style.backgroundColor = '#F7B538'
progressBar.style.transition = 'width 0.2s ease'
progressBar.style.zIndex = '9999'
document.body.appendChild(progressBar)

lenis.on('scroll', ({ scroll, limit }) => {
  const progress = (scroll / limit) * 100
  progressBar.style.width = `${progress}%`
})

// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    lenis.scrollTo(this.getAttribute('href'))
  })
})

// Optional: stop scrolling on specific elements
function stopScroll(event) {
  if (event.target.hasAttribute('data-lenis-prevent')) {
    lenis.stop()
  }
}

document.addEventListener('mouseenter', stopScroll, true)

function startScroll(event) {
  if (event.target.hasAttribute('data-lenis-prevent')) {
    lenis.start()
  }
}

document.addEventListener('mouseleave', startScroll, true)


// Pause Lenis when browser window is resized
let resizeTimer
window.addEventListener('resize', () => {
  lenis.stop()
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    lenis.start()
  }, 250)
})
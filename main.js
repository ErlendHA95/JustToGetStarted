import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    Making changes to make it break. just to see changes breaking shit
`

setupCounter(document.querySelector('#counter'))

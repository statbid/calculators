'use strict'

import { Component } from 'lib/component.class.js'
import homeComponent from './home/home.component.js'

const template = `
  <div>
    <div id="root-component">
      //${homeComponent.template}
    </div>
  </div>`

const rootComponent = new Component({ template })

export default rootComponent
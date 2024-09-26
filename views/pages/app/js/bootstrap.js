'use strict'

import { Component } from 'lib/component.class.js'
import rootComponent from './components/root.component.js'

const bootstrapApp = async () => {
  const root = document.getElementById('root')
  root.innerHTML = rootComponent.template
  Component.setStyles()
  Component.initEventHandlers()
}

export default bootstrapApp
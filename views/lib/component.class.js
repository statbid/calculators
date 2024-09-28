'use strict'

export class Component {
  static components = []
  /**
   * 
   * @param {object} component
   * @property {string} component.template html string
   * @property {string} component.style css style string
   * @property {object} component.eventHandlers object with methods to handle events
   * 
   */
  constructor(component = {}) {
    this.template = component.template || ''
    this.style = component.style || ''
    this.eventHandlers = component.eventHandlers || {}

    Component.components.push(component)
  }

  // initializes the eventHandlers of each components
  static initAllEventHandlers() {
    let components = Component.components
    for (let i in components) {
      let eventHandlers = components[i]["eventHandlers"]
      for (let eventHandler in eventHandlers) {
        if (eventHandler) {
          eventHandlers[eventHandler]()
        }
      }
    }
  }

  // sets styles for each component
  static setStyles() {
    let components = Component.components
    const styles = components.map(component => component.style).join('\n').replaceAll(/\n+|\t+/g, '')
    const style = document.getElementsByTagName('style')[0]
    style.innerHTML = styles
  }

  setEventHandlers() {
    let eventHandlers = this.eventHandlers
    for (let eventHandler in eventHandlers) {
      if (eventHandler) {
        eventHandlers[eventHandler]()
      }
    }
  }
  load(parentElement) {
    parentElement.innerHTML = this.template
    this.setEventHandlers()
  }
}
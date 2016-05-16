import React, {Component} from 'react'
import {render} from 'react-dom'
import {} from './cards'
import {CardList} from '../src/components'
import {AppContainer} from 'react-hot-loader'
import { Root } from '../src/'

if (module.hot) {
  module.hot.accept()
  window.hotNotify.style.opacity=100
  setTimeout(() => window.hotNotify.style.opacity=0, 500)
  window.describe = (text, fn) => fn()
  window.it = (text, fn) => fn()
}

const renderCards = () =>
  render(<AppContainer><Root /></AppContainer>, window.mountNode)

const run = renderCards

run()

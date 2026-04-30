import React from 'react'
import { createStore } from 'redux'
import reducer from './reducer'
import {todoreducer} from './reducer'

export const store = createStore(todoreducer);
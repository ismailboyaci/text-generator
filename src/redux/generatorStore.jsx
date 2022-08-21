
import  generatorApp  from './generatorApp';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({reducer:generatorApp})
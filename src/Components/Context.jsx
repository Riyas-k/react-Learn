/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import {StateFunction} from './StateFunction'

export const userContext = React.createContext()
export const channelContext = React.createContext()

export default function Context() {
  return (
    <div>
    <userContext.Provider value={'Riaaz'}>
    <channelContext.Provider value={10}>
      <StateFunction />
      </channelContext.Provider>
      </userContext.Provider>
    </div>
  )
}

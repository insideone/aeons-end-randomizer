import { LoopReducer } from 'redux-loop'

import AERData from 'aer-data/src/index'

import { Action, State } from './types'

export const initialState: State = {
  ENG: AERData.normalizedData.ENG.cards,
  FR: AERData.normalizedData.FR.cards,
  PL: AERData.normalizedData.PL.cards,
  DE: AERData.normalizedData.DE.cards,
  RU: AERData.normalizedData.RU.cards,
}

export const Reducer: LoopReducer<State, Action> = (
  state: State = initialState,
  action: Action
) => {
  switch (action.type) {
    default: {
      return state
    }
  }
}

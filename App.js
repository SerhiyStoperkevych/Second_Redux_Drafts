import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import NewCakeContainer from './redux/components/NewCakeContainer'


function App () {
    return (
    <Provider store={store}>
      <div className="App">
        <ItemConteiner cake />
        <ItemConteiner />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
    )
}

export default App

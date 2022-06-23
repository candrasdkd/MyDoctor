import React from 'react'
import MainNavigation from './menuNavigation/MainNavigation'
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
    return (
        <MainNavigation />
    )
}

export default App
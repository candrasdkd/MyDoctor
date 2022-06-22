import React from 'react'
import MainNavigation from './menuNavigation/mainNavigation'
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
    return (
        <MainNavigation />
    )
}

export default App
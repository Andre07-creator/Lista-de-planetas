import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlanetsScreen from './screens/planets'

const Routes_rota = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<PlanetsScreen/>} />
        </Routes>
    </BrowserRouter>
)

export default Routes_rota
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlanetsScreen from './screens/planets'
import PlanetScreen from './screens/planet'
import NotFound from './screens/notFound'

const Routes_rota = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<PlanetsScreen/>} />
            <Route path='/planet/:id' element={<PlanetScreen/>}/>
            <Route path='*' element={<NotFound/>}/>
                
            
        </Routes>
    </BrowserRouter>
)

export default Routes_rota
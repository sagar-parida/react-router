import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Summary from './Components/Summary'
import NoMatch from './Components/NoMatch'
import './App.css'

import { Routes, Route, Link} from 'react-router-dom'
import Products from './Components/Products'
import Featured from './Components/Products/Featured'
import NewProducts from './Components/Products/NewProducts'

class App extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <Routes>
                    <Route path = '/' element={<Home />} />
                    <Route path = 'about' element={<About />} />
                    <Route path = 'summary' element={<Summary />}/>
                    <Route path = 'products' element={<Products />}>
                        <Route path='featured' element={<Featured />} />
                        <Route path='new' element={<NewProducts />}/>
                    </Route>
                    <Route path = '*' element={<NoMatch />} />
                </Routes>
            </div>
        )
    }
}

export default App
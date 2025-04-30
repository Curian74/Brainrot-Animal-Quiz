import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Test from '../pages/Test'

const MyRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/test' element={<Test/>}></Route>
        </Routes>
    )
}

export default MyRouter

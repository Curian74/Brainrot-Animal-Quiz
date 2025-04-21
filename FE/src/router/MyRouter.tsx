import { Route, Routes } from 'react-router'
import Home from '../pages/Home'

const MyRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
        </Routes>
    )
}

export default MyRouter

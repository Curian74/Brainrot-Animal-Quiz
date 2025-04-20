import { Route, Routes } from 'react-router'
import Home from '../pages/Home'

const MyRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
            </Routes>
        </div>
    )
}

export default MyRouter

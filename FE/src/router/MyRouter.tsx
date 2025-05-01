import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Test from '../pages/Test'
import QuizTaking from '@/pages/QuizTaking'

const MyRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/test' element={<Test/>}></Route>
            <Route path='/quiz-handle/:quizId' element={<QuizTaking/>}></Route>
        </Routes>
    )
}

export default MyRouter

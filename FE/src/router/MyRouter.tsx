import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import Test from '../pages/Test'
import QuizTaking from '@/pages/QuizTaking'
import CreateAnimal from '@/pages/manager/CreateAnimal'
import CreateQuiz from '@/pages/manager/CreateQuiz'
import QuizList from '@/pages/QuizList'

const MyRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/test' element={<Test/>}></Route>
            <Route path='/quiz-handle/:quizId' element={<QuizTaking/>}></Route>
            <Route path='/create-animal' element={<CreateAnimal/>}></Route>
            <Route path='/create-quiz' element={<CreateQuiz/>}></Route>
            <Route path='/quiz-list' element={<QuizList/>}></Route>
        </Routes>
    )
}

export default MyRouter

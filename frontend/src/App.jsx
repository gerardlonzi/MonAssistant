import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import "../src/styles/index.css"
import Favoris from './pages/Favoris'
import Creer_Cv from './pages/creer-cv'
import SignUp from './pages/Signup'
import Login from './pages/Login'
import Letter from './pages/letter'
import ForgetPassword from './pages/forgetPassword'
import Dashboard from './pages/dashboard'
import Admin from './pages/Admin'
import PageNotFound from './pages/404'
import Niveau_de_connaissance from './pages/niveau-de-connaissances'
import ChooseTemplate from './pages/chooseTemplate'
import { PrivateRouteAdmin } from '../hooks/privateRouteAdmin'
import {PrivateRouteUser} from '../hooks/privateRouteUser'
import Select_cv from './pages/select-cv'
import Edit_template from './pages/edit-template'

function App() {
    
  return (
    <>
    <Routes>
      <Route path='/' element ={<Home/>} />
      <Route path='/favoris' element ={<Favoris/>} />
      <Route path='/creer-cv' element ={<Creer_Cv/>} />
      <Route path='/signup' element ={<SignUp/>} />
      <Route path='/login' element ={<Login/>} />
      <Route path='/letter' element ={<Letter/>} />
      <Route path='/admin' element ={
        <PrivateRouteAdmin>
        <Admin/>
      </PrivateRouteAdmin> 
    } />
      <Route path='/dashboard' element ={
        <PrivateRouteUser>
          <Dashboard/>
        </PrivateRouteUser>} />
      <Route path='/forget-password' element ={<ForgetPassword/>} />
      <Route path='/PageError' element ={<PageNotFound/>} />
      <Route path='/creer-cv/niveau-de-connaissances' element ={<Niveau_de_connaissance/>} />
      <Route path='/creer-cv/choisir-un-template' element ={<ChooseTemplate/>} />
      <Route path='*' element={<PageNotFound />} />
      <Route path='/select-cv' element={<Select_cv/>} />
      <Route path='/creer-cv/edit' element={<Edit_template/>} />
    </Routes>
    
    
    </>
  )
}

export default App

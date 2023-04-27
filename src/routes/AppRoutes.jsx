//react imports
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

//components imports
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'
import AllExercises from '../components/exercise/AllExercises'
import Exercise from '../components/exercise/Exercise'
import AllTrainers from '../components/trainers/AllTrainers'
import TrainerDetails from '../components/trainers/trainerDetails/TrainerDetails'
import Allarticles from '../components/articles/Allarticles'
import Article from '../components/articles/Article'
import AllChanges from '../components/changes/AllChanges'
import ChangeDetails from '../components/changes/ChangeDetails'
import AllRecipes from '../components/recipes/AllRecipes'
import RecipesByType from '../components/recipes/RecipesByType'
import Recipe from '../components/recipes/Recipe'

//layouts imports
import GuestLayout from '../layouts/GuestLayout'
import TraineeLayout from '../layouts/TraineeLayout'
import TrainerLayout from '../layouts/TrainerLayout'
import AdminLayout from '../layouts/AdminLayout'









const AppRoutes = () => {
  return (
      <Router>
          <Routes>
                <Route path="/" element={<GuestLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/login" element={<Login/>}/>

                    <Route path="/exercises" element={<AllExercises/>}/>
                    <Route path="/exercises/:id" element={<Exercise/>}/>

                    <Route path="/trainers" element={<AllTrainers/>}/>
                    <Route path="/trainer/:id" element={<TrainerDetails/>}/>

                    <Route path="/articles" element={<Allarticles/>}/>
                    <Route path='/articles/:id' element={<Article/>}/>

                    <Route path="/changes" element={<AllChanges/>}/>
                    <Route path="/change/:id" element={<ChangeDetails/>}/>
                    
                    <Route path='/recipes' element={<AllRecipes/>}/>
                    <Route path='/recipes/:type' element={<RecipesByType/>}/>
                    <Route path='/recipes/single/:id' element={<Recipe/>}/> 
                </Route>

                <Route path="/trainee" element={<TraineeLayout/>}>
                    <Route path="/trainee/account" element={<h1>trainee acount</h1>}/>
                </Route>
                <Route path="/trainer" element={<TrainerLayout/>}>
                    <Route path="/trainer/account" element={<h1>trainer acount</h1>}/>
                </Route>
                <Route path="/admin" element={<AdminLayout/>}>
                    
                </Route>
                <Route path="*" element={<NotFound/>}/>
          </Routes>
      </Router>
  )
}

export default AppRoutes
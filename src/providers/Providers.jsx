//react imports
import React,{useEffect} from 'react'

//components imports
import AppRoutes from '../routes/AppRoutes'

//redux imports
import {useDispatch } from 'react-redux';
import { getExercises} from '../redux/features/exercisesSlice';

//context imports
import { TrainerContextProvider } from '../contexts/TrainerContext';
import { ArticleContextProvider } from '../contexts/ArticleContext';
import { ChangeContextProvider } from '../contexts/ChangeContext';


const Providers = () => {
    const dispatch = useDispatch();

    const getData = async () => {
        dispatch(getExercises());
    }
    
    useEffect(()=>{
        getData();
        
    },[])



  return (
    <>
      <ChangeContextProvider>
      <ArticleContextProvider>
      <TrainerContextProvider>
        <AppRoutes/>
      </TrainerContextProvider>
      </ArticleContextProvider>
      </ChangeContextProvider>
    </>
  )
}

export default Providers
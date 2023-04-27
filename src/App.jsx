//style imports
import './styles/App.css'

//react imports
import React from 'react';
import { useQuery} from 'react-query';

//compnents imports
import Providers from './providers/providers';

//context imports

//redux imports 
import { Provider} from 'react-redux';
import apiStore from './redux/store';






const fetchExercises = async () => {
  
  // const url = `http://localhost:3000/blogsProject/exercises`;
  // const {data} = await axios.get(url);
  // return data;
  return [];
}


const App = ()=> {



    const { data, status } = useQuery('exercises', fetchExercises, {
      staleTime: 2000,
      onSuccess: () => console.log('data fetched with no problems'),
    });



  return (
    <div className="App m-0 p-0">
      <Provider store={apiStore}>
        <Providers />
      </Provider>
    </div>
  );
}

export default App;

/**
 *     <div className="App m-0 p-0">
      <FoodsContextProvider>
        <AppRoutes/>
      </FoodsContextProvider>
    </div>
    import { FoodsContextProvider } from './contexts/FoodsContext'
  //  const res = await fetch('https://exercisedb.p.rapidapi.com/exercises',{
  //    method: 'GET',
  //    headers: {
  //        'X-RapidAPI-Key': 'd81bab2858msh4e6269dcb5f34a3p1dfeddjsnd35c792acbba',
  //        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  //    }
  //  });
 */
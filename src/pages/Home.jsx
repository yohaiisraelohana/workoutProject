//react imports
import React, { useContext } from 'react'

//componnents imports
import Banner from '../components/homepage/Banner'
import BodyParts from '../components/homepage/BodyParts'
import AuthorsPreview from '../components/trainers/TrainerPreview'
import ChangesPreview from '../components/changes/ChangesPreview'
import ArticlesPreview from '../components/articles/ArticlesPreview'
import Calculators from '../components/homepage/Calculators'
import RecipesPreview from '../components/recipes/RecipesPreview'
import FitnessMap from '../components/fitnessLocations/FitnessMap'


//context imports
import { TrainerContext } from '../contexts/TrainerContext'



const Home = () => {

  const trainer = useContext(TrainerContext);
  console.log(trainer);
  return (
    <div 
      className="
        h-screen overflow-auto 
        bg-home bg-no-repeat bg-cover max-md:bg-center">
      <Banner/>
      <BodyParts/>
      <AuthorsPreview/>
      <ChangesPreview/>
      <ArticlesPreview/>
      <RecipesPreview/>
      <Calculators/>
      <FitnessMap/>
    </div>
  )
}

export default Home

/*
https://data.gov.il/api/3/action/datastore_search

דוגמא לשאילתא (5 תוצאות ראשונות)
https://data.gov.il/api/3/action/datastore_search?resource_id=c3cb0630-0650-46c1-a068-82d575c094b2&limit=5

דוגמא לשאילתא (תוצאות שכוללות 'JONES'
https://data.gov.il/api/3/action/datastore_search?resource_id=c3cb0630-0650-46c1-a068-82d575c094b2&q=jones



        var data = {
          resource_id: 'c3cb0630-0650-46c1-a068-82d575c094b2', // the resource id
          limit: 5, // get 5 results
          q: 'jones' // query for 'jones'
        };
        $.ajax({
          url: 'https://data.gov.il/api/3/action/datastore_search',
          data: data,
          dataType: 'jsonp',
          success: function(data) {
            alert('Total results found: ' + data.result.total)
          }
        });
*/
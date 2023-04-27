/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sign-up': "url('./src/assets/signUpBackgraund.jpeg')",
        'home':"url('./src/assets/homePageBg.png')",
        'bodyPartbg':"url('./src/assets/bodyPartsBg.jpeg')",
        'fish':"url('./src/assets/recipesBackground/fishMeal.jpeg')",
        'meat':"url('./src/assets/recipesBackground/meatMeal.jpeg')",
        'vegan':"url('./src/assets/recipesBackground/veganMeal.jpeg')",
        'milkly':"url('./src/assets/recipesBackground/milklyMeal.jpeg')",
        'eggs':"url('./src/assets/recipesBackground/eggsMeal.jpeg')",
        'protein':"url('./src/assets/recipesBackground/proteinMeal.jpeg')",
        'exercise':"url('./src/assets/exerciseBackground.jpeg')",
        'allExercises':"url('./src/assets/allExercisesBg.jpeg')",
        'allRecipes':"url('https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__340.jpg')",
        'allChanges':"url('./src/assets/changesBg.jpeg')",
        'allTrainers':"url('./src/assets/trainersBg.jpeg')",
        'allArticles':"url('./src/assets/articlesBg.jpeg')"
      },
      height: {
        '128': '30vh',
        '150': '70vh',
      }
    },
  },
  plugins: [],
}
/**
 bg-[url('./src/assets/homeBackground.jpeg')]
 bg-[url('./src/assets/bodyPartsBg.jpeg')]
 */


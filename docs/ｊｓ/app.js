const recipeUrl = 'https://ysyk-hara.github.io/dragon-wing-inn-recipe/json/cookingRecipes.json';
axios.get(recipeUrl)
  .then(function (response) {
    Vue.createApp({
      data() {
        return {
          type : response.data.type,
          recipes : response.data.recipe
        }
      }
    }).mount('#recipes');
  })
  .catch(function (error) {
    console.log(error);
  });

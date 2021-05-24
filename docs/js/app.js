const recipeUrl = '../json/cookingRecipes.json';
axios.get(recipeUrl)
  .then(function (response) {
    console.log('type : ' + response.data.type);
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
    console.log('type : error');
      data() {
        return {
          type : 'error',
          recipes : []
        }
      }.mount('#recipes');
  });

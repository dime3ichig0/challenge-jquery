$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {  /*creando funcion*/
for (var i = 0; i < recipesArray.length; i++) { /*recorriendo una variable*/
if( recipesArray[i].highlighted == true ) {
renderRecipe (recipesArray[i]); 

}
}

}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe)
 {
	
}

$(document).ready( function(){
$(".js-back").hide();
$(".js-menu").show();
});



function printNews(){
$('.callout-news p').append('NUEVAS RECETAS');
}
printNews();











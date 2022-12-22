const loadData = () => {
  const getSearchText = document.getElementById("search-field");
  const getValue = getSearchText.value;
  console.log(getValue);
  getSearchText.value = "";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeal(data));
};
function displayMeal(meals) {
  const singlemeals = meals.meals;
  singlemeals.map((meal) => {
    console.log(meal);
    const container = document.getElementById("food");
    const div = document.createElement("div");
    div.classList.add("meal");
    div.innerHTML = `
    <img width="300px" src="${meal.strMealThumb}" alt="">
    <h3>${meal.strMeal}</h3>
    <p>${meal.strCategory}</p>
   
    `;
    container.appendChild(div);
  });
}

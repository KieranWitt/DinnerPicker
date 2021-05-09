//Meal objects
let a = {Food:'Chicken and leek', Link: 'null', Difficulty: 'Easy'};
let b = {Food:'Spaghetti Bolognese', Link: 'https://www.taste.com.au/recipes/spaghetti-bolognese/335cceba-3913-4172-8a28-44ad7a960ef4', Difficulty: 'Medium'};
let c = {Food:'Lasagna', Link: 'https://www.taste.com.au/recipes/our-favourite-lasagne/2ac35c7f-3320-48ef-b2cb-ecef75883241', Difficulty: 'Medium'};
let d = {Food:'Roast lamb', Link: 'https://www.taste.com.au/recipes/traditional-roast-lamb/2acb853a-237b-4177-bb85-fdec7977dbae', Difficulty: 'Hard'};
let e = {Food:'Roast chicken', Link: 'https://www.taste.com.au/recipes/basic-roast-chicken/3f2100ad-e41b-44b5-bff5-9f5a27261e97', Difficulty: 'Hard'};
let f = {Food:'Fajitas', Link: 'null', Difficulty: 'Easy'};
let g = {Food:'Tortilla pizza', Link: 'null', Difficulty: 'Easy'};
let h = {Food:'Spaghetti Carbonara', Link: 'https://www.taste.com.au/recipes/best-spaghetti-carbonara/e121ffdc-2285-4798-b515-3860d1942eb1', Difficulty: 'Easy'};
let i = {Food:'Chicken salad', Link: 'null', Difficulty: 'Easy'};
let j = {Food:'Pies and mash', Link: 'null', Difficulty: 'Easy'};
let k = {Food:'BBQ', Link: 'null', Difficulty: 'Medium'};
let l = {Food:'Lamb chops and potatoes', Link: 'null', Difficulty: 'Medium'};
let m = {Food:'Takeaway', Link: 'null', Difficulty: 'Easy'};
let n = {Food:'Beans on toast', Link: 'null', Difficulty: 'Easy'};
let o = {Food:'Sausage and mash', Link: 'null', Difficulty: 'Easy'};
let p = {Food:'Stir fry', Link: 'https://www.taste.com.au/recipes/sticky-chinese-pork-stir-fry/deb19404-4aea-4f5c-ad5e-cf7974109727', Difficulty: 'Medium'};
let q = {Food:'Seasoned Chicken and rice', Link: 'null', Difficulty: 'Easy'};
let r = {Food:'Shepards Pie', Link: 'https://www.taste.com.au/recipes/beef-shepherds-pie/70d1e84f-b2c3-4894-a11d-f6036ad5960c', Difficulty: 'Hard'};
let s = {Food:'Beef nachos', Link: 'https://www.taste.com.au/recipes/beef-nachos/548cce8f-f9d3-4ca6-9111-029181bc630f', Difficulty: 'Medium'};
let t = {Food:'Burgers', Link: 'https://www.taste.com.au/recipes/basic-beef-burger/a584ab73-6348-4c78-879e-eb7560965a5f', Difficulty: 'Easy'};
let u = {Food:'Jacket potato', Link: 'https://www.taste.com.au/recipes/baked-jacket-potatoes/f7f45471-ed48-4cc7-b07b-d1de5a161403', Difficulty: 'Easy'};
let v = {Food:'Chicken curry', Link: 'https://www.taste.com.au/recipes/chicken-curry-2/bc4b534f-ab9f-4d64-87ec-74250db80a69', Difficulty: 'Medium'};
let w = {Food:'Chicken enchiladas', Link: 'https://www.taste.com.au/recipes/chicken-enchiladas-tomato-salsa/a577f4e1-bae0-49e4-b888-cce4939f7883', Difficulty: 'Medium'};
let x = {Food:'Pasta bake', Link: 'https://www.taste.com.au/recipes/chicken-pasta-bake-2/84e050e7-229d-4782-b9e5-ae0186d5293b', Difficulty: 'Medium'};
let y = {Food:'Chicken bake', Link: 'https://www.taste.com.au/recipes/creamy-chicken-bake/dbd3e14e-5973-480c-90ce-52609e89dc7f', Difficulty: 'Hard'};
let z = {Food:'Chilli Con Carne', Link: 'https://www.taste.com.au/recipes/chilli-con-carne-10/16d484bb-df3d-4069-bbb9-ea5856407344', Difficulty: 'Easy'};

//Array for meals 
const mealList = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];

//Array to store the dinners chosen
let dinnersPicked = [];

//Function for selecting the meals
const selectMeal = () => {

dinnersPicked = [];
let tempMealList = [...mealList];

for (i=0; i<7; i++) {
  randomMeal = tempMealList[Math.floor(Math.random() * tempMealList.length)];
  dinnersPicked.push(randomMeal);
  const index = tempMealList.indexOf(randomMeal);
  tempMealList.splice(index,1)
};

showMeals(dinnersPicked);
};

const showMeals = (dinnersPicked) => {
//Monday
  document.getElementById('monFood').innerHTML = dinnersPicked[0].Food;
  document.getElementById('monFood').setAttribute('href', dinnersPicked[0].Link);
//Tuesday
  document.getElementById('tueFood').innerHTML = dinnersPicked[1].Food;
  document.getElementById('tueFood').setAttribute('href', dinnersPicked[1].Link);
//Wednesday
  document.getElementById('wedFood').innerHTML = dinnersPicked[2].Food;
  document.getElementById('wedFood').setAttribute('href', dinnersPicked[2].Link);
//Thursday
  document.getElementById('thuFood').innerHTML = dinnersPicked[3].Food;
  document.getElementById('thuFood').setAttribute('href', dinnersPicked[3].Link);
//Friday
  document.getElementById('friFood').innerHTML = dinnersPicked[4].Food;
  document.getElementById('friFood').setAttribute('href', dinnersPicked[4].Link);
//Saturday
  document.getElementById('satFood').innerHTML = dinnersPicked[5].Food;
  document.getElementById('satFood').setAttribute('href', dinnersPicked[5].Link);
//Sunday
  document.getElementById('sunFood').innerHTML = dinnersPicked[6].Food;
  document.getElementById('sunFood').setAttribute('href', dinnersPicked[6].Link);
};

//Function for selecting the takeaways
const selectTakeaway = () => {

};
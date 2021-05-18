//Meal object function
const meal = (food, link, difficulty, image) => {
  return {
    food,
    link,
    difficulty,
    image,
  }
};

//Meals data
let a = meal('Chicken and leek', 'a', 'Easy', './images/chickenandleek.jpg')
let b = meal('Spaghetti Bolognese', 'https://www.taste.com.au/recipes/spaghetti-bolognese/335cceba-3913-4172-8a28-44ad7a960ef4', 'Medium', './images/spaghettibolognaise.jpg')
let c = meal('Lasagna', 'https://www.taste.com.au/recipes/our-favourite-lasagne/2ac35c7f-3320-48ef-b2cb-ecef75883241', 'Medium',  './images/lasagna.jpg')
let d = meal('Roast lamb', 'https://www.taste.com.au/recipes/traditional-roast-lamb/2acb853a-237b-4177-bb85-fdec7977dbae', 'Hard',  './images/roastlamb.jpg')
let e = meal('Roast chicken', 'https://www.taste.com.au/recipes/basic-roast-chicken/3f2100ad-e41b-44b5-bff5-9f5a27261e97', 'Hard', './images/roastchicken.jpg')
let f = meal('Fajitas', 'a', 'Easy', './images/fajitas.jpg')
let g = meal('Tortilla pizza', 'a', 'Easy', './images/tortillapizza.jpg')
let h = meal('Spaghetti Carbonara', 'https://www.taste.com.au/recipes/best-spaghetti-carbonara/e121ffdc-2285-4798-b515-3860d1942eb1', 'Easy', './images/spaghetticarbonara.jpg')
let i = meal('Chicken salad', 'a', 'Easy', './images/chickensalad.jpg')
let j = meal('Pies and mash', 'a', 'Easy', './images/pieandmash.jpg')
let k = meal('BBQ', 'a', 'Medium', './images/bbq.jpg')
let l = meal('Lamb chops and potatoes', 'a', 'Medium', './images/lambchops.jpg')
let m = meal('Takeaway', 'a', 'Easy', './images/Takeaway.jpg')
let n = meal('Beans on toast', 'a', 'Easy', './images/beansontoast.jpg')
let o = meal('Sausage and mash', 'a', 'Easy', './images/sausageandmash.jpg')
let p = meal('Stir fry', 'https://www.taste.com.au/recipes/sticky-chinese-pork-stir-fry/deb19404-4aea-4f5c-ad5e-cf7974109727', 'Medium', './images/stirfry.jpg')
let q = meal('Seasoned Chicken and rice', 'a', 'Easy', './images/chickenandrice.jpg')
let r = meal('Shepards Pie', 'https://www.taste.com.au/recipes/beef-shepherds-pie/70d1e84f-b2c3-4894-a11d-f6036ad5960c', 'Hard', './images/shepherdspie.jpg')
let s = meal('Beef nachos', 'https://www.taste.com.au/recipes/beef-nachos/548cce8f-f9d3-4ca6-9111-029181bc630f', 'Medium', './images/beefnachos.jpg')
let t = meal('Burgers', 'https://www.taste.com.au/recipes/basic-beef-burger/a584ab73-6348-4c78-879e-eb7560965a5f', 'Easy', './images/burger.jpg')
let u = meal('Jacket potato', 'https://www.taste.com.au/recipes/baked-jacket-potatoes/f7f45471-ed48-4cc7-b07b-d1de5a161403', 'Easy', './images/jacketpotatoes.jpg')
let v = meal('Chicken curry', 'https://www.taste.com.au/recipes/chicken-curry-2/bc4b534f-ab9f-4d64-87ec-74250db80a69', 'Medium', './images/chickencurry.jpg')
let w = meal('Chicken enchiladas', 'https://www.taste.com.au/recipes/chicken-enchiladas-tomato-salsa/a577f4e1-bae0-49e4-b888-cce4939f7883', 'Medium', './images/chickenenchiladas.jpg')
let x = meal('Pasta bake', 'https://www.taste.com.au/recipes/chicken-pasta-bake-2/84e050e7-229d-4782-b9e5-ae0186d5293b', 'Medium', './images/pastabake.jpg')
let y = meal('Chicken bake', 'https://www.taste.com.au/recipes/creamy-chicken-bake/dbd3e14e-5973-480c-90ce-52609e89dc7f', 'Hard', './images/chickenbake.jpg')
let z = meal('Chilli Con Carne', 'https://www.taste.com.au/recipes/chilli-con-carne-10/16d484bb-df3d-4069-bbb9-ea5856407344', 'Easy', './images/Chiliconcarni.jpg')

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

//Elements to show the meals in HTML
const showMeals = (dinnersPicked) => {
//Monday
  document.getElementById('monFood').innerHTML = dinnersPicked[0].food;
  document.getElementById('monLink').setAttribute('href', dinnersPicked[0].link);
  document.getElementById('monDiff').innerHTML = dinnersPicked[0].difficulty;
  document.getElementById('monImg').innerHTML = `<img class="image" src="${dinnersPicked[0].image}">`;
//Tuesday
  document.getElementById('tueFood').innerHTML = dinnersPicked[1].food;
  document.getElementById('tueLink').setAttribute('href', dinnersPicked[1].link);
  document.getElementById('tueDiff').innerHTML = dinnersPicked[1].difficulty;
  document.getElementById('tueImg').innerHTML = `<img class="image" src="${dinnersPicked[1].image}">`;
//Wednesday
  document.getElementById('wedFood').innerHTML = dinnersPicked[2].food;
  document.getElementById('wedLink').setAttribute('href', dinnersPicked[2].link);
  document.getElementById('wedDiff').innerHTML = dinnersPicked[2].difficulty;
  document.getElementById('wedImg').innerHTML = `<img class="image" src="${dinnersPicked[2].image}">`;
//Thursday
  document.getElementById('thuFood').innerHTML = dinnersPicked[3].food;
  document.getElementById('thuLink').setAttribute('href', dinnersPicked[3].link);
  document.getElementById('thuDiff').innerHTML = dinnersPicked[3].difficulty;
  document.getElementById('thuImg').innerHTML = `<img class="image" src="${dinnersPicked[3].image}">`;
//Friday
  document.getElementById('friFood').innerHTML = dinnersPicked[4].food;
  document.getElementById('friLink').setAttribute('href', dinnersPicked[4].link);
  document.getElementById('friDiff').innerHTML = dinnersPicked[4].difficulty;
  document.getElementById('friImg').innerHTML = `<img class="image" src="${dinnersPicked[4].image}">`;
//Saturday
  document.getElementById('satFood').innerHTML = dinnersPicked[5].food;
  document.getElementById('satLink').setAttribute('href', dinnersPicked[5].link);
  document.getElementById('satDiff').innerHTML = dinnersPicked[5].difficulty;
  document.getElementById('satImg').innerHTML = `<img class="image" src="${dinnersPicked[5].image}">`;
//Sunday
  document.getElementById('sunFood').innerHTML = dinnersPicked[6].food;
  document.getElementById('sunLink').setAttribute('href', dinnersPicked[6].link);
  document.getElementById('sunDiff').innerHTML = dinnersPicked[6].difficulty;
  document.getElementById('sunImg').innerHTML = `<img class="image" src="${dinnersPicked[6].image}">`;
};


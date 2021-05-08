
//Array for meals 
const mealList = [
  'Food1',
  'Food2',
  'Food3',
  'Food4',
  'Food5',
  'Food6',
  'Food7',
  'Food8',
];

//Array for takeaways
const takeawayList = [
  'Takeaway1',
  'Takeaway2',
  'Takeaway3',
  'Takeaway4',
];

//Array to store the dinners chosen
let dinnersPicked = [];

//Function for selecting the meals
const selectMeal = () => {
dinnersPicked = [];
tempMealList = mealList;
for (i=0; i<7; i++) {
  randomMeal = tempMealList[Math.floor(Math.random() * tempMealList.length)];
  const index = tempMealList.indexOf(randomMeal);
    if (index > -1) {
      tempMealList.splice(index,1)
    };
  dinnersPicked.push(randomMeal);
};
  console.log(dinnersPicked);
};

//Function for selecting the takeaways
const selectTakeaway = () => {

};

//run
selectMeal();

//Array storing the list of potential meals i.e. the ones we like
//may make this editable in the future
const mealList = [
  'Food1',
  'Food2',
  'Food3',
  'Food4',
  'Food5',
  'Food6',
];

//Array storing the takeaways we like
const takeawayList = [
  'A',
  'B',
  'C',  
];

//Empty array that will be used to output the randomly selected meals
const dinnersPicked = [];

//Dinner picking logic
const selectMeal = () => {
  for (i = 0; i < 7; i++) {
    const randomMeal = mealList[Math.floor(Math.random() * mealList.length)];
    dinnersPicked.push(randomMeal);
  };
  console.log(dinnersPicked)
};


//Takeaway selecting logic, this will be used if takeaway shows up in the main selectMeal function 
const selectTakeaway = () => {

};



//Run
selectMeal();


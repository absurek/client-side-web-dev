//1a. feladat
const listItems = $('li');
console.log(listItems);

//1b. feladat
const navbar = $('.navbar-brand');
console.log(navbar);

//2a. feladat
const categories = $('.card');
const categoryItems = categories.first().find('.list-group-item');
console.log(categoryItems);

//2b. feladat
const foodLinks = $('.list-group-item > a');
const foodCategories = foodLinks.closest('.card').find('.card-header');
console.log(foodCategories.text());

foodCategories.each((i, elem) => {
  console.log($(elem).text());
});

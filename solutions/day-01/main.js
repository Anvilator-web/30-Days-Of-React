import { countries } from './countries.js';
import { webTechs } from './web_techs.js';

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let text_array = text.split(',');

console.log(text_array);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (shoppingCart.includes('Meat') = false) {
  shoppingCart.unshift('Meat')
}

if (shoppingCart.includes('Sugar') = false) {
  shoppingCart.push('Sugar')
}

let allergicToHoney = false

if (allergicToHoney = true) {
  shoppingCart.splice(3, 4)
}

shoppingCart.splice(2, 3)
shoppingCart.push('Green Tea')

if (countries.includes('Ethiopia') = true) {
  console.log('ETHIOPIA')
} else {
  countries.push('Ethiopia')
}

if (webTechs.includes('Sass') = true) {
  console.log('Sass is a CSS preprocess')
} else {
  webTechs.push('Sass')
  console.log(webTechs)
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

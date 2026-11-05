
import { products } from './data.js';
import template from '../template.hbs';

const markup = template({ products });

document.querySelector('#app').innerHTML = markup;

import { createExcerciseFilterHtml } from './create-excercise-filter-html.js';
import { SideBarFilter } from '../models/side-bar-filter-model.js';

let element;

/**
 * @param {string} elementId
 * @param {SideBarFilter[]} filters
 */

export const renderFilters = (elementId, filters = []) => {
    if(!element) element = document.querySelector(elementId);
    if(!element) throw new Error(`Element ${elementId} not found`);

    element.innerHTML = '';

    filters.forEach((filter) => {
        const filterHtml = createExcerciseFilterHtml(filter.name, filter.options);
        element.append(filterHtml);
    });

};
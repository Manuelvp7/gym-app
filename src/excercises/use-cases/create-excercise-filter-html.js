import { FilterOptions } from '../models/filter-options-model.js';
/**
 * @param {string} filterName
 * @param {FilterOptions[]} filterOptions
 * @returns {HTMLElement}
 */

export const createExcerciseFilterHtml = (filterName, filterOptions) => {
    if (!filterName) throw new Error('Filter name is required'); 
    if (!filterOptions) throw new Error('Filter options are required'); 
    
    const filterOptionsHtml = filterOptions.map((option) => `<li data-id="${filterName}_${option.id}">${option.name}</li>`).join('');
    
    const div = document.createElement('div');
    div.className = 'filter-zone';
    div.setAttribute('data-id', `${filterName}-zone`);

    const html = `
      <h3>${filterName}</h3>
      <ul class="filter-list" data-id="${filterName}-list">
        <li data-id="${filterName}_-1">All</li>
        ${filterOptionsHtml}
      </ul>`;

    div.innerHTML = html;
    return div;
};
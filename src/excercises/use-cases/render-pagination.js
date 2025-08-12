import { createPaginationHtml } from './create-pagination-html.js';
// import { displayExcercises } from '../app.js';

let element;
/**
 * @param {string} elementId
 * @param {string} next
 * @param {string} previous
 * @param {number} count
 * @param {number} itemsPerPage
 * @param {number} currentPage
 */

export const renderPagination = async (elementId, next, previous, count, itemsPerPage, currentPage) => {
    if (!element) element = document.querySelector(elementId);
    if (!element) throw new Error(`Element ${elementId} not found`);
    element.innerHTML = '';
    const html = createPaginationHtml(next, previous, count, itemsPerPage, currentPage);
    element.innerHTML = html;

}
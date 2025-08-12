/**
 * @param {string} next
 * @param {string} previous
 * @param {number} count
 * @returns {string}
 */
export const createItemsPerPageHtml = (count, itemsPerPage = 10, currentPage = 1) => {
    if (!count) throw new Error('Count is required');
    
    const itemsShown = (currentPage - 1) * itemsPerPage + 1;

    const itemsPerPageOptions = [10, 25, 50, 100];
    const itemsPerPageOptionsHtml = itemsPerPageOptions.map(option => `<option value="${option}" ${option === itemsPerPage ? 'selected' : ''}>${option}</option>`).join('');
    const html = `
      <div class="pagination-left">
        <span class="items-per-page">Items per page 
          <select id="items-per-page-select" class="items-per-page-dropdown">
              ${itemsPerPageOptionsHtml}
          </select>
        </span>
        <span class="items-range"><span id="items-shown">${itemsShown} - ${itemsShown + itemsPerPage}</span> of <span id="total-items">${count}</span> items</span>
      </div>
    `;
    return html;
}
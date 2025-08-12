export const createPaginationHtml = (next, previous, count, itemsPerPage, currentPage) => {
    const totalPages = Math.ceil(count / itemsPerPage);
    const itemsShown = (currentPage - 1) * itemsPerPage + 1;
    const itemsShownEnd = Math.min((itemsShown + itemsPerPage) -1, count);
    const itemsPerPageOptions = [10, 25, 50, 100];
    const itemsPerPageOptionsHtml = itemsPerPageOptions.map(option => `<option value="${option}" ${option === itemsPerPage ? 'selected' : ''}>${option}</option>`).join('');
    const html = `
    <div class="pagination-left">
        <span class="items-per-page">Items per page 
            <select data-id="items-per-page-select" class="items-per-page-dropdown">
                ${itemsPerPageOptionsHtml}
            </select>
        </span>
        <span class="items-range"><span data-id="items-shown">${itemsShown} - ${itemsShownEnd}</span> of <span data-id="total-items">${count}</span> items</span>
    </div>
    <div class="pagination-right">
        ${previous ? `<button class="pagination-btn" data-id="prev-btn">Previous</button>` : ''}
        <span class="page-info">Page <span data-id="current-page">${currentPage}</span> of <span data-id="total-pages">${totalPages}</span></span>
        ${next ? `<button class="pagination-btn" data-id="next-btn">Next</button>` : ''}
    </div>
    `;
    return html;
}
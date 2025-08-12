export const renderPaginationButtons = (previous, next, currentPage, totalPages) => {
    const html = `
          <div class="pagination-right">
            ${previous ? `<button class="pagination-btn" id="prev-btn">Previous</button>` : ''}
            <span class="page-info">Page <span id="current-page">${currentPage}</span> of <span id="total-pages">${totalPages}</span></span>
            ${next ? `<button class="pagination-btn" id="next-btn">Next</button>` : ''}
          </div>
    `;
    return html;
}
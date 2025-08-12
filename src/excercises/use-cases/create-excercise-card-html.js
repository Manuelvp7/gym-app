/**
 * @param {Exercise} exercise
 * @returns {HTMLElement}
 */

export const createExcerciseCardHtml = (exercise) => {
    if (!exercise) throw new Error('Exercise is required');
    
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-id', exercise.id);
    const muscleChips = exercise.muscles.map((muscle) => `<span class="chip">${muscle.name}</span>`).join(' ');
    const {name: categoryName} = exercise.category;
    const categoryChip = `<span class="chip chip-category">${categoryName}</span>`;
    const equipmentChips = exercise.equipment.map((equipment) => `<span class="chip chip-equipment">${equipment.name}</span>`).join(' ');
    const html = `
      <h2>${exercise.name}</h2>
      <img src=${exercise.image || 'https://thumbs.dreamstime.com/b/error-sorry-page-not-found-message-holding-sad-cute-black-cat-vector-76870840.jpg'} alt=${exercise.name}>
      <h3>Description</h3>
      <p>${exercise.description}</p>
      <h3>Category</h3>
      <div class="category-chip">${categoryChip}</div>
      <h3>Equipment</h3>
      <div class="equipment-chips">${equipmentChips}</div>
      <h3>Muscles</h3>
      <div class="muscle-chips">${muscleChips}</div>
    `;

    card.innerHTML = html;
    return card;
}
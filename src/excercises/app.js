import appHtml from './app.html?raw';
import { ExerciseManager } from './use-cases/ExerciseManager.js';
import { SideBarFilter } from './models/side-bar-filter-model.js';
import { renderFilters } from './use-cases/render-filters.js';
import { FilterOptions } from './models/filter-options-model.js';
import { renderExcerciseCards } from './use-cases/render-excercise-cards.js';
import { Filter } from './models/filter-model.js';
import excerciseStore from '../store/excercise.store.js';
import excerciseService from '../services/excercise-service.js';
import { Filters } from '../store/excercise.store.js';
import { renderPagination } from './use-cases/render-pagination.js';

const ElementIds = {
    SideBar: '.sidebar',
    ExerciseCards: '.exercise-cards',
    PaginationSection: '.pagination-footer',

    PrevBtn: 'prev-btn',
    NextBtn: 'next-btn',
    ItemsPerPageSelect: 'items-per-page-select',

    CardsSection: '.cards-section',
    CategoryZone: '.category-zone',
    CategoryList: '#category-list',
    MuscleZone: '#muscle-zone',
    MuscleList: '#muscle-list',
    EquipmentZone: '#equipment-zone',
}

export const App = async ( elementId ) => {
    // Use Cases
    const displayExcercises = async () => {
        const currentPage = excerciseStore.getCurrentPage();
        const itemsPerPage = excerciseStore.getItemsPerPage();
        const offset = (currentPage - 1) * itemsPerPage;
        const filter = excerciseStore.getCurrentFilter();
        
        const {results, next, previous, count} = await excerciseService.fetchExercises(filter, itemsPerPage, offset).then(excerciseService.mapExercisesResponse);
        renderExcerciseCards(ElementIds.CardsSection, results);
        renderPagination(ElementIds.PaginationSection, next, previous, count, itemsPerPage, currentPage);
    }

    const displayFilters = async () => {
        const categories = await excerciseService.fetchExerciseCategories();
        const muscles = await excerciseService.fetchExerciseMuscles();
        const equipment = await excerciseService.fetchExerciseEquipment();
        const filters = [
            new SideBarFilter(Filters.CATEGORY, categories.map((category) => new FilterOptions(category.id, category.name))),
             new SideBarFilter(Filters.MUSCLES, muscles.map((muscle) => new FilterOptions(muscle.id, muscle.name))),
             new SideBarFilter(Filters.EQUIPMENT, equipment.map((equipment) => new FilterOptions(equipment.id, equipment.name))),
        ];
        renderFilters(ElementIds.SideBar, filters);
    }
    
    (() => {
        const app = document.createElement('div');
        app.innerHTML = appHtml;
        document.querySelector(elementId).appendChild(app);

        displayFilters();
        displayExcercises();
    })();


    // HTML References
    const sidebar = document.querySelector(ElementIds.SideBar);
    const prevBtn = document.querySelector(ElementIds.PrevBtn);
    const nextBtn = document.querySelector(ElementIds.NextBtn);
    const itemsPerPageSelect = document.querySelector(ElementIds.ItemsPerPageSelect);
    const paginationFooter = document.querySelector(ElementIds.PaginationSection);

    const exerciseCards = document.querySelector(ElementIds.ExerciseCards);
    const categoryZone = document.querySelector(ElementIds.CategoryZone);
    const categoryList = document.querySelector(ElementIds.CategoryList);
    const muscleZone = document.querySelector(ElementIds.MuscleZone);
    const muscleList = document.querySelector(ElementIds.MuscleList);
    const equipmentZone = document.querySelector(ElementIds.EquipmentZone);



    // Event Listeners
    sidebar.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        const [filterName, filterId] = element.getAttribute('data-id').split('_');
        const filter = new Filter(filterName, filterId);
        excerciseStore.setFilter(filter);
        excerciseStore.setCurrentPage(1);
        // excerciseStore.setOffset(0);
        console.log(excerciseStore.getCurrentFilter());
        displayExcercises();
    });

    // Handle pagination button clicks
    paginationFooter.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        if (element) {
            const id = element.getAttribute('data-id');
            if (id === ElementIds.NextBtn) {
                console.log('nextBtn clicked');
                excerciseStore.setCurrentPage(excerciseStore.getCurrentPage() + 1);
                displayExcercises();
            } else if (id === ElementIds.PrevBtn) {
                excerciseStore.setCurrentPage(excerciseStore.getCurrentPage() - 1);
                displayExcercises();
            }
        }
    });

    // Handle items per page select change
    paginationFooter.addEventListener('change', (event) => {
        if (event.target.matches('[data-id="items-per-page-select"]')) {
            const itemsPerPage = parseInt(event.target.value);
            console.log('Items per page changed to:', itemsPerPage);
            excerciseStore.setItemsPerPage(itemsPerPage);
            excerciseStore.setCurrentPage(1); // Reset to first page when changing items per page
            displayExcercises();
        }
    });

};    
import { Filter } from '../excercises/models/filter-model.js';

export const Filters = {
    CATEGORY: 'Category',
    MUSCLES: 'Muscles',
    EQUIPMENT: 'Equipment',
}

const state = {
    excercises: [],
    filter: null,
    offset: 0,
    itemsPerPage: 10,
    currentPage: 1
};

const initStore = () => {
    loadStore();
}

const loadStore = () => {
    if(!localStorage.getItem('state')) return;
    const {excercises = [], filter = null, offset = 0} = JSON.parse(localStorage.getItem('state'));
    state.excercises = excercises;
    state.filter = filter;
    state.offset = offset;
};

const saveToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
};

/**
 * @param {Filter} newFilter
 */

const setFilter = (newFilter) => {
    if(!Object.values(Filters).includes(newFilter.name)) {
        throw new Error(`Invalid filter name: ${newFilter.name}`);
    }
    if(!newFilter.id){
        throw new Error(`Invalid filter id: ${newFilter.id}`);
    }
    if(newFilter.id > 0) {
        state.filter = newFilter;
    } else {
        state.filter = null;
    }
    saveToLocalStorage();
};

const getCurrentFilter = () => {
    return state.filter;
};

const setOffset = (offset) => {
    state.offset = offset;
    saveToLocalStorage();
};

const setItemsPerPage = (itemsPerPage) => {
    state.itemsPerPage = itemsPerPage;
    saveToLocalStorage();
};

const setCurrentPage = (currentPage) => {
    if(currentPage < 0) {
        throw new Error(`Invalid current page: ${currentPage}`);
    }
    state.currentPage = currentPage;
    saveToLocalStorage();
};

const getOffset = () => {
    return state.offset;
};

const getItemsPerPage = () => {
    return state.itemsPerPage;
};

const getCurrentPage = () => {
    return state.currentPage;
};

export default {
    initStore,
    loadStore,
    saveToLocalStorage,
    setFilter,
    setCurrentPage,
    getCurrentFilter,
    setItemsPerPage,
    getItemsPerPage,
    getCurrentPage,
};
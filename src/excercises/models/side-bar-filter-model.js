import { FilterOptions } from './filter-options-model.js';
/**
 * @param {string} name
 * @param {FilterOptions[]} options
 */

export class SideBarFilter{
    constructor(name, options = []){
        this.name = name;
        this.options = options;
    }
}
import { ExerciseCategory } from './excercise-category-model.js';
import { Muscle } from './muscle-model.js';
import { Equipment } from './equipment-model.js';

/**
 * @param {string} uuid
 * @param {number} id
 * @param {string} name
 * @param {string} description
 * @param {ExerciseCategory} category
 * @param {Equipment[]} equipment
 * @param {Muscle[]} muscles
 */

export class Exercise {
    constructor(uuid, id, name, description, category, equipment, muscles, image) {
        this.uuid = uuid;
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.equipment = equipment;
        this.muscles = muscles;
        this.image = image;
    }
}
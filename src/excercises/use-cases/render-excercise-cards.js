import { createExcerciseCardHtml } from './create-excercise-card-html.js';
import { Exercise } from '../models/excercise-model.js';

let element;

/**
 * @param {string} elementId
 * @param {Exercise[]} exercises
 */

export const renderExcerciseCards = (elementId, exercises) => {
    if (!element) element = document.querySelector(elementId);
    if (!element) throw new Error(`Element ${elementId} not found`);
    element.innerHTML = '';
    exercises.forEach((exercise) => {
        const card = createExcerciseCardHtml(exercise);
        element.append(card);
    });
}   
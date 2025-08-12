import { Exercise } from '../models/excercise-model.js';
import { ExerciseCategory } from '../models/excercise-category-model.js';
import { Muscle } from '../models/muscle-model.js';
import { Equipment } from '../models/equipment-model.js';

// Exercise State Management Module
export const ExerciseManager = (() => {
  // Private variables (not accessible outside the module)
  let exerciseCategories = [];
  let exercises = [];

  /**
   * @returns {Promise<Object>} Exercise categories information
   */
  const fetchExerciseCategories = async () => {
    const apiUrl = import.meta.env.VITE_EXCERCISE_CATEGORY_API_URL;
    const res = await fetch(apiUrl);
    const data = await res.json();
    const {results} = data;
    return results;
  };

  /**
   * @returns {Promise<Object>} Exercise information
   */
  const fetchExercises = async() => {
    // Use Vite environment variable for the API URL
    const apiUrl = import.meta.env.VITE_EXERCISE_API_URL;
    const res = await fetch(apiUrl);
    const data = await res.json();
    const {results} = data;
    console.log(results);
    return results;
  }

  /**
   * Maps raw exercise data to Exercise instances
   * @param {Array} exercises
   * @returns {Array<Exercise>}
   */
  function mapExercises(exercises) {
    return exercises.map(({uuid, id, translations, category, equipment, muscles, images}) =>
      new Exercise(
        uuid,
        id,
        translations[0].name,
        translations[0].description,
        new ExerciseCategory(category.id, category.name),
        equipment.map((equipment) => new Equipment(equipment.id, equipment.name)),
        muscles.map((muscle) => new Muscle(muscle.id, muscle.name)),
          images?.length > 0 ? images[0].image : null
      )
    );
  }

  // Public API (what gets returned from the module)
  return {
    // Initialize the module
    async init() {
      try {
        exerciseCategories = await fetchExerciseCategories();
        exercises = await fetchExercises().then(mapExercises);
        console.log('Exercise data loaded:', exercises.length, 'exercises');
        return { categories: exerciseCategories, exercises: exercises };
      } catch (error) {
        console.error('Failed to load exercise data:', error);
        throw error;
      }
    },

    // Get all categories
    getCategories() {
      return [...exerciseCategories]; // Return a copy to prevent external modification
    },

    // Get all exercises
    getExercises() {
      return [...exercises]; // Return a copy to prevent external modification
    },

    // Filter exercises by category ID
    filterExercisesByCategory(categoryId) {
      return exercises.filter(exercise => exercise.category.id === categoryId);
    },

    // Get a specific category by ID
    getCategoryById(id) {
      return exerciseCategories.find(category => category.id === id);
    },

    // Get a specific exercise by ID
    getExerciseById(id) {
      return exercises.find(exercise => exercise.id === id);
    },

    // Check if data is loaded
    isLoaded() {
      return exerciseCategories.length > 0 && exercises.length > 0;
    }
  };
})();
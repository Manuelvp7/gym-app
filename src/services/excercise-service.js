import { Exercise } from "../excercises/models/excercise-model";
import { ExerciseCategory } from "../excercises/models/excercise-category-model";
import { Equipment } from "../excercises/models/equipment-model";
import { Muscle } from "../excercises/models/muscle-model"; 
import { ExerciseResponse } from "../excercises/models/excercise-response-model";


/**
   * Maps raw exercise data to Exercise instances
   * @param {Array} response
   * @returns {Array<Exercise>}
   */
  const mapExercisesResponse = ({next, previous, results, count}) => {
    const mappedExercises = results.map(({uuid, id, translations, category, equipment, muscles, images}) =>
      new Exercise(
        uuid,
        id,
        translations[0]? translations[0].name : '',
        translations[0]? translations[0].description : '',
        new ExerciseCategory(category.id, category.name),
        equipment.map((equipment) => new Equipment(equipment.id, equipment.name)),
        muscles.map((muscle) => new Muscle(muscle.id, muscle.name)),
          images?.length > 0 ? images[0].image : null
      )
    );
    return new ExerciseResponse(next, previous, mappedExercises, count);
  }

const fetchExerciseCategories = async () => {
    const apiUrl = import.meta.env.VITE_EXCERCISE_CATEGORY_API_URL;
    const res = await fetch(apiUrl);
    const data = await res.json();
    const {results} = data;
    return results;
  };

  const fetchExerciseMuscles = async () => {
    const apiUrl = import.meta.env.VITE_EXCERCISE_MUSCLE_API_URL;
    const res = await fetch(apiUrl);
    const data = await res.json();
    const {results} = data;
    return results;
  } 

  const fetchExerciseEquipment = async () => {
    const apiUrl = import.meta.env.VITE_EXCERCISE_EQUIPMENT_API_URL;
    const res = await fetch(apiUrl);
    const data = await res.json();
    const {results} = data;
    return results;
  }

  /**
   * @returns {Promise<Object>} Exercise information
   */
  const fetchExercises = async(filter, limit = 100, offset = 0) => {
    let apiUrl = import.meta.env.VITE_EXERCISE_API_URL;
    const queryParams = new URLSearchParams();
    queryParams.append('limit', limit);
    queryParams.append('offset', offset);
    if(filter) {
        queryParams.append(filter.name.toLowerCase(), filter.id);
    }
    apiUrl += `?${queryParams.toString()}`;
    console.log('apiUrl', apiUrl);
    const res = await fetch(apiUrl);
    const data = await res.json();
    const {next, previous, results, count} = data;
    console.log(results);
    return {next, previous, results, count};
  }

  export default {
    mapExercisesResponse,
    fetchExerciseCategories,
    fetchExercises,
    fetchExerciseMuscles,
    fetchExerciseEquipment,
  }
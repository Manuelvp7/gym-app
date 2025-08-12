/**
 * ExerciseResponse model
 * @param {string} next
 * @param {string} previous
 * @param {Array<Exercise>} results
 * @param {number} count
 */
class ExerciseResponse {
    constructor(next, previous, results, count) {
        this.next = next;
        this.previous = previous;
        this.results = results;
        this.count = count;
    }
}

export { ExerciseResponse };
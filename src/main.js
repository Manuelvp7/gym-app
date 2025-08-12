import './style.css'
import { App } from './excercises/app.js'
import excerciseStore from './store/excercise.store.js';

excerciseStore.initStore();
App('#app');

import { combineReducers } from 'redux';
import videos from './videos';
import { reducer as navReducer} from './navigation';

const rootReducer = combineReducers({
    videos,
    nav: navReducer
});

export default rootReducer;
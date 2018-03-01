import { Platform } from 'react-native';    
import { 
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import promise from 'redux-promise';
import devTools from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

const middleware = applyMiddleware(promise, thunk);

const Store = createStore(
    rootReducer,
    compose(
        middleware,       
        devTools({
            name: Platform.OS,
            hostname: 'localhost',
            port: 5678
        }),
    )
);

export default Store;
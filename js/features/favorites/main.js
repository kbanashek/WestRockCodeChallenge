import routes from './routes';
import favorites from './components/favorites';

export default {
    type : 'feature',
    name : 'favorites',
    routes,
    component : {
        favorites
    }
};

import routes from './routes';
import favorites from './components/favorites';
import MovieService from '../common/service/MovieService';

export default {
    type : 'feature',
    name : 'favorites',
    routes,
    component : {
        favorites
    },
    service : {
        MovieService
    }
};

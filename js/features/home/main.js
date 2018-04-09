import routes from './routes';
import home from './components/home';
import movies from './components/subs/movies';
import MovieService from '../common/service/MovieService';

export default {
    type : 'feature',
    name : 'home',
    routes,
    component : {
        home,
        movies
    },
    service : {
        MovieService
    }
};

import routes from './routes';
import home from './components/home';
import description from './components/subs/description';
import movies from './components/subs/movies';
import MovieService from './service/MovieService';

export default {
    type : 'feature',
    name : 'home',
    routes,
    component : {
        home,
        description,
        movies
    },
    service : {
        MovieService
    }
};

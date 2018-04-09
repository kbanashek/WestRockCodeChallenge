class MovieService {

    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
        this.baseUri = 'https://api.themoviedb.org/3/movie/';
        this.apiKey = '85dcae077106377f44e1039d1adbb2b6';

        let favorites = localStorage.getItem('favorites');

        if (favorites === null) {
            this.favorites = [];
        } else {
            this.favorites = JSON.parse(favorites);
        }

    }

    addToFavorites(movie) {
        this
            .favorites
            .push(movie);

        localStorage.setItem('favorites', JSON.stringify(this.favorites));

        var favorites = localStorage.getItem('favorites');

        console.log('favorites: ', JSON.parse(favorites));
    }

    removeFromFavorites(movie) {
        this
            .favorites
            .push(movie);

        localStorage.setItem('favorites', JSON.stringify(this.favorites));

        var favorites = localStorage.getItem('favorites');

        console.log('favorites: ', JSON.parse(favorites));
    }

    get(selectedFilterAction) {
        switch (selectedFilterAction.toUpperCase()) {
            case 'NOW PLAYING':
                return this.getNowPlaying();
                break;
            case 'TOP RATED':
                return this.getTopRated();
                break;
            case 'UPCOMING':
                return this.getUpcoming();
                break;
            case 'FAVORITES':
                return this.$q(resolve => {
                    resolve(this.favorites)
                });
                break;
            default:
                return this.getPopular();
                break;
        }
    }

    getNowPlaying() {
        return this.getResults('now_playing')
    };

    getTopRated() {
        return this.getResults('top_rated')
    };

    getUpcoming() {
        return this.getResults('upcoming')
    };

    getPopular() {
        return this.getResults('popular')
    };

    getResults(service) {
        var url = this.baseUri + service + '?api_key=' + this.apiKey;

        return this
            .$http
            .get(url);
    }

}

export default MovieService;

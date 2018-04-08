class MovieService {

    constructor($http) {
        this.$http = $http;
    }

    getInitTodos() {
        const apiKey = '85dcae077106377f44e1039d1adbb2b6';
        var base = 'http://api.themoviedb.org/3';
        var service = '/movie/popular';
        var url = base + service + '?api_key=' + apiKey;

        return this
            .$http
            .get(url);
    };

}

export default MovieService;

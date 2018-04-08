export default {
    type : 'configure',
    config($httpProvider) {
        'ngInject';

        $httpProvider.defaults.headers.common.Accept = 'application/json;charset=utf-8';
        $httpProvider.defaults.useXDomain = true; //i will forever remember you.
        $httpProvider.defaults.cache = true;
    }
};

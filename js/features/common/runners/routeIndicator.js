/**
 *
 *  Defines RouteIndicator service
 *
 *  @author  KBanashek
 *  @date    Apr 6, 2018
 *
 */
import {element} from 'angular';
import {pluck} from '../../../fw/helper/object';

export default {
    type: 'runner',
    run($rootScope, Routes) {
        'ngInject';

        const $body = element(document.body);
        const classes = pluck(Routes, 'id').join(' ');

        $rootScope.$on('$routeChangeSuccess', function(e, route) {
            $body.removeClass(classes);
            if (route && route.$$route && route.$$route.id) {
                $body.addClass(route.$$route.id);
            }
        });
    }
};

/**
 *  Defines the Autofocus directive.
 *  This directive used to override the original `autofocus` attribute since it doesn't work properly in SPA scenarios
 *
 *  @author  KBanashek
 *  @date    Apr 6, 2018
 *
 */
export default {
    type: 'directive',
    name: 'autofocus',

    directiveFactory: function() {
        'ngInject';

        return {
            restrict: 'A',
            link($scope, element) {
                element[0].focus();
            }
        };
    }
};

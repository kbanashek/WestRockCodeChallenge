/**
 *  Defines the normalize filter.
 *  This filter used to convert CamelCase string into space separated words
 *
 * For Example: {{ 'SimpleTodoApp' | normalize }}, will print as: Simple Todo App
 *
 *  @author  KBanashek
 *  @date    Apr 6, 2018
 *
 */
export default {
    type: 'filter',
    name: 'normalize',

    filterFactory: function() {
        'ngInject';

        return function(input) {
            return input.replace(/([A-Z])/g, ' $1');
        };
    }
};

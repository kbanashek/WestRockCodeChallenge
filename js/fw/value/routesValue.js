/**
 *  Set constant of Routes
 *
 *  @author  KBanashek
 *  @date    Apr 6, 2018
 *
 */
import Things from 'features/main';

export default {
    type: 'value',

    constant: {
        Routes: Things
            .filter(t => t.type === 'feature')
            .filter(feature => feature.routes && feature.routes.length > 0)
            .map(feature => feature.routes)
            .reduce((previous, current) => previous.concat(current), [])
    }
};

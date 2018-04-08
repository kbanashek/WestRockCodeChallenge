/**
 *  Collection of Event helpers
 *
 *  @author  KBanashek
 *  @date    Apr 6, 2018
 *
 */
export function stop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (e.preventDefault) {
        e.preventDefault();
    }
}

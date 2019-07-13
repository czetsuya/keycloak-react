/**
 * @author Edward P. Legaspi
 * @version 0.0.1
 */
import Raven from 'raven-js';

/**
 * Sends crash reports as state is updated and listeners are notified.
 */
export const crashReporter = store => next => action => {
    try {
        return next(action);
    } catch (err) {
        console.error('Caught an exception!', err);
        Raven.captureException(err, {
            extra: {
                action,
                state: store.getState()
            }
        });
        throw err;
    }
};
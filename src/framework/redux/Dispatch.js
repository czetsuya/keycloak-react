import Error, { FATAL } from '../../models/Error';
import { FAIL, SUCCESS } from '../../models/Response';

export default class Dispatch {
  static loadingAction(type) {
    return `${type}_LOADING`;
  }

  static successAction(type) {
    return `${type}_FULFILLED`;
  }

  static errorAction(type) {
    return `${type}_REJECTED`;
  }

  static fatalAction(type) {
    return `${type}__FATAL`;
  }

  static loading(dispatch, type) {
    dispatch({ type: Dispatch.loadingAction(type) });
  }

  static done(dispatch, type, response) {
    /* eslint-disable no-console */
    console.log('\n\n=================================');
    console.log('Dispatch done');
    console.log('type : ', type);
    console.log('response : ', response);
    console.log('=================================\n\n\n');
    /* eslint-enable */
    if (response.status === SUCCESS) {
      Dispatch.success(dispatch, type, response.result);
    } else if (response.status === FAIL && response.error.type === FATAL) {
      Dispatch.fatal(dispatch, type, response.error);
    } else {
      Dispatch.error(dispatch, type, response.error);
    }
  }

  static success(dispatch, type, data) {
    dispatch({
      type: Dispatch.successAction(type),
      data,
    });
  }

  static error(dispatch, type, data) {
    /* eslint-disable no-console */
    console.error('Error encountered on action: ', type);
    console.error('ERROR: ', data);
    console.trace();
    /* eslint-enable */
    dispatch({
      type: Dispatch.errorAction(type),
      data: {
        error: new Error(data),
      },
    });
  }

  static fatal(dispatch, type, data) {
    /* eslint-disable no-console */
    console.error('Fatal error encountered on action: ', type);
    console.error('FATAL: ', data);
    console.trace();
    /* eslint-enable */
    dispatch({
      type: Dispatch.fatalAction(type),
      data: {
        error: new Error(data),
      },
    });
  }
}

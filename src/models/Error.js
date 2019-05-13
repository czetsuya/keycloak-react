export const ERROR = 'error';
export const FATAL = 'fatal';

const DEFAULT_MESSAGES = {
  [ERROR]: 'An unknown error has been encountered.',
  [FATAL]: 'A fatal error has occurred.',
};

export default class Error {
  constructor(error = {}) {
    const { response, message } = error;
    const { code, status } = response || {};
    let type = FATAL;
    if (status < 500) {
      type = ERROR;
    }
    this.type = type;
    this.code = code || '';
    this.message = message || DEFAULT_MESSAGES[type || ERROR];
  }
}

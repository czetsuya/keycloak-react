export const SUCCESS = 'success';
export const FAIL = 'fail';

export default class Response {
  constructor(response = {}, error) {
    const { status, code, data } = response;
    this.status = status;
    this.code = code;
    this.result = data;
    if (status === FAIL && !!error) {
      this.error = error;
    }
  }
}

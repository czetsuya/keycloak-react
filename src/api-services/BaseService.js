import ServiceConnector from './ServiceConnector';
import ApplicationStore from '../framework/redux/ApplicationStore';
import * as properties from '../app-config/properties';

export default class BaseService {
	constructor() {
		this.serviceConnector = () => {
			const state = ApplicationStore.getState();
			const { authorization } = state;
			return new ServiceConnector(properties.API_URL || '', authorization.token);
		};
	}
}

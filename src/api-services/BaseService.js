import ServiceConnector from './ServiceConnector'
import * as properties from '../app-config/properties'
import ApplicationStore from '../framework/redux/ApplicationStore'

export default class BaseService {
	constructor() {
		this.serviceConnector = () => {
			const state = ApplicationStore.getState();
			const { authContext } = state;

			return new ServiceConnector(properties.API_URL || '', authContext.token);
		};
	}
}

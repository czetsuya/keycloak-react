import * as Yup from 'yup'
import Location from 'react-app-location'

const integer = Yup.number().integer();
const wholeNbr = integer.positive();
const string = Yup.string();

export const HomeLocation = new Location('/');
export const DashboardLocation = new Location('/dashboard');
export const DocumentationLocation = new Location('/documentation');
export const CustomerEditLocation = new Location('/customers/:type/:entityId', {
	type: string.required(),
	entityId: wholeNbr.required()
});
export const CustomerNewLocation = new Location('/customers/:type', {
	type: string.required()
});
export const CustomerListLocation = new Location('/customers', null, null);

export default {
	Home: HomeLocation,
	Dashboard: DashboardLocation,
	Document: DocumentationLocation,
	CustomerList: CustomerListLocation,
	CustomerEdit: CustomerEditLocation,
	CustomerNew: CustomerNewLocation,
};
import * as Yup from 'yup'
import Location from 'react-app-location'

const integer = Yup.number().integer();
const wholeNbr = integer.positive();
const string = Yup.string();

export const HomeLocation = new Location('/');

export const CustomerListLocation = new Location('/customers', null, null);
export const CustomerEditLocation = new Location('/customers/:type/:entityId', {
	type: string.required(),
	entityId: wholeNbr.required()
});
export const CustomerNewLocation = new Location('/customers/:type', {
	type: string.required()
});

// export const ItemListLocation = new Location('/items', null, {
//     isActive: Yup.boolean(),
//     categoryID: wholeNbr.nullable(),
// });

// export const ItemLocation = new Location('/items/:id', { id: wholeNbr.required() });

export default {
	Home: HomeLocation,
	CustomerList: CustomerListLocation,
	CustomerEdit: CustomerEditLocation,
	CustomerNew: CustomerNewLocation,
	// ItemList: ItemListLocation,
	// Item: ItemLocation,
};
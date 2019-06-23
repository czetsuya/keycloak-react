import BaseService from '../BaseService';

class Customers extends BaseService {

  list() {
    return this.serviceConnector().callApi({url: '/customers'});
  }

  retrieve(customer) {
    return this.serviceConnector().callApi({url: `/customers/customer/${customer.id}`});
  }

  create(customer) {
    return this.serviceConnector().invokeRequest({
      url: '/customers/customer',
      method: 'POST',
      data: customer,
    });
  }

  update(customer) {
    return this.serviceConnector().invokeRequest({
      url: `/customers/customer/${customer.id}`,
      method: 'PUT',
      data: customer,
    });
  }

  remove(customer) {
    return this.serviceConnector().invokeRequest({
      url: `/customers/customer/${customer.id}`,
      method: 'DELETE',
    });
  }
}

const customers = new Customers();
export default customers;

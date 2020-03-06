let customers = [
    {
        id: 1,
        first_name: 'pera',
        last_name: 'peric',
        email: 'peric@pera.com',
        boughtProducts: []
    },
    {
        id: 2,
        first_name: 'pera',
        last_name: 'peric',
        email: 'peric@pera.com',
        boughtProducts: []
    }
]

let lastId = 2;

export default class CustomerService {
    
    getAllCustomers() {
        return customers;
    }
    deleteCustomer(id) {
        customers = customers.filter(customer => customer.id !== id);
    }

    addCustomer(){
        lastId++;
        customers.push(this.createCustomer());
    }

    createCustomer(){
        return {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            id: lastId
        }
    }
}

export const customerService = new CustomerService();
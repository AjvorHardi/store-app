<template>
    <div>
        <h2> Customers List </h2>
        <table class="table">
            <tr>
                <th>ID</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
            </tr>
            <tr v-for="(customer, i) in customersArray" :key="i">
                <td>{{ returnProperty(customer.id) }}</td>
                <td>{{ returnProperty(customer.first_name) }}</td>
                <td>{{ returnProperty(customer.last_name) }}</td>
                <td>{{ returnProperty(customer.email) }}</td>
                <td><button @click="deleteCustomer(customer)" class="btn btn-danger">Delete</button></td>
                <!-- <td><button @click="showContact(contact)" class="btn btn-warning">Edit</button></td> -->
            </tr>
        </table>

        <h2>Add contact</h2>
        <form>
            <label for="first_name">First name</label>
            <input v-model="first_name" id="" class="form-control" type="text">
            <label for="last_name">Last name</label>
            <input v-model="last_name" id="" class="form-control" type="text">
            <label for="email" >Email</label>
            <input v-model="email" id="" class="form-control" type="text" required>
            
            <button @click.prevent="addCustomer" class="btn btn-success">Add a customer</button>
            <!-- <button v-show="editMode" @click.prevent="saveNewData" class="btn btn-success">Create contact</button> -->
        </form> 


    </div>
</template>

<script>
import { customerService } from '../services/CustomerService.js';

export default {
    name: 'AppCustomers',
    
    data(){
        return {
            first_name: '',
            last_name: '',
            email: '',
            customers: customerService.getAllCustomers()
        }
    },

    methods: {
        returnProperty(property) {
            return property || 'Nepoznato';
        },

        deleteCustomer(customer) {
            let id = customer.id;
            customerService.deleteCustomer(id)
            this.customers = this.customers.filter(customer => customer.id !== id);
        },

        addCustomer() {
            customerService.addCustomer()
        }

        


    },

    computed: {
        customersArray(){
            return this.customers;
    }
  }
}
</script>

<style>

</style>
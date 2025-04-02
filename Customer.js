import React from 'react';
import './Customer.css';

function Customer() {
  const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', status: 'Inactive' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '456-789-1234', status: 'Active' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', phone: '789-123-4567', status: 'Inactive' },
  ];

  return (
    <div className="customer-container">
      <h1>Customer List</h1>
      <table className="customer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td className={customer.status === 'Active' ? 'active' : 'inactive'}>
                {customer.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customer;
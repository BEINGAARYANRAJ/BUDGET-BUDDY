import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Card from '../components/Card';
import '../styles/dashboard.css';

function Dashboard() {
  const orders = [
    { product: 'Mini USB', number: '4000', payment: 'Due', status: 'pending' },
    { product: 'Wireless Mouse', number: '3201', payment: 'Paid', status: 'completed' },
    { product: 'Bluetooth Speaker', number: '2587', payment: 'Due', status: 'pending' },
    { product: 'Keyboard', number: '2587', payment: 'Due', status: 'completed' }
  ];

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header title="Dashboard" />
        <section className="cards">
          <Card icon="trending_up" title="Income" value="₹21,17,052" description="Last 24 Hours • 80%" />
          <Card icon="trending_down" title="Expenses" value="₹21,17,052" description="Last 24 Hours • 80%" />
          <Card icon="shopping_cart" title="Total Sales" value="₹21,17,052" description="Last 24 Hours • 80%" />
        </section>
        <section className="orders">
          <h3>Recent Orders</h3>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Number</th>
                <th>Payments</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.product}</td>
                  <td>{order.number}</td>
                  <td>{order.payment}</td>
                  <td className={order.status}>
                    {order.status === 'pending' ? 'Pending' : 'Completed'}
                  </td>
                  <td><a href="#" style={{ color: 'blue' }}>Details</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;

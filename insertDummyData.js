const pool = require('./db');

const insertDummyData = async () => {
  const dummyData = [
    { customer_name: 'John Doe', age: 25, phone: '123-456-7890', location: 'City1' },
    // Add more dummy data...
  ];

  await pool.query(
    'INSERT INTO customer_data (customer_name, age, phone, location) VALUES $1, $2, $3, $4',
    dummyData.map((data) => [data.customer_name, data.age, data.phone, data.location])
  );

  pool.end();
};

insertDummyData();

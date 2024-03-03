# Zithara-test
PROBLEM STATEMENT:
You are required to build a REACT and NODE JS application with PostgreSQL database which has the functionality as stated below.

1. Create 50 records in database with the following column fields “sno, customer name, age, phone, location, created_at” and dummy data
2. Create a single page application to display the above data in table format with search option, and pagination with 20 records per page.
3. The created_at column data has to be displayed in two separate columns as “date” and “time”
4. The search functionality will search the data by the column "name" or "location".
5. There should be an option to sort the data either by "date" or by "time".



Step-by-Step Process:
Backend (Node.js):
Set Up Backend Project:

Create a new directory for your backend (my-backend) and navigate to it.
Initialize a new Node.js project using npm init -y.
Install Dependencies:

Install necessary packages using npm install express pg sequelize dotenv.
Database Connection:

Create a db.js file to set up the PostgreSQL database connection using the pg package.
Database Schema:

Define your database schema in a schema.sql file.
Seed Database with Dummy Data:

Create a script (insertDummyData.js) to insert dummy data into the database.
API Routes:

Set up API routes to handle CRUD operations. For simplicity, start with a route to fetch all data.
Express Server:

Create a server.js file to set up your Express server.
Use middleware like cors and express.json().
Run the Backend:

Run the backend server using node server.js.
Frontend (React):
Set Up Frontend Project:

Create a new directory for your frontend (my-frontend) and navigate to it.
Create a new React app using npx create-react-app . (make sure to use . to initialize in the current directory).
Install Dependencies:

Install necessary packages using npm install axios react-table react-paginate.
Set Up React Component:

Create a React component (e.g., CustomerList.js) to display the data.
Use useState and useEffect to fetch data from the backend.
Display Data in Table:

Use a table to display the fetched data.
Use React-Table or similar libraries for better table functionality.
Run the Frontend:

Start the React development server using npm start.
Visit http://localhost:3000 in your browser.
Database Connection Details:
Store sensitive information like database connection details (user, host, password) in a .env file in the backend.
Final Steps:
Environment Variables:

Create a .env file in the backend to store sensitive information.
Add the PostgreSQL connection details to the .env file.
Run Both Servers:

Start the backend server using node server.js in the backend directory.
Start the React development server using npm start in the frontend directory.
Visit Your App:

Open your browser and go to http://localhost:3000 to see your React app.

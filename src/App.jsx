import { employeeData } from './data'
import EmployeeTable from './components/EmployeeTable'
import './App.css'

function App() {
  return (
    <div className="container">
      <h1>Employee Table Implementation</h1>
      
      <div className="instructions">
        <h2>Instructions:</h2>
        <ol>
          <li>Implement a table to display the employee data provided in data.js</li>
          <li>The table should include columns for: ID, Name, Role, Department, Salary, and Join Date</li>
          <li>Format the salary to display as currency (e.g., $85,000)</li>
          <li>Format the join date to be more readable (e.g., March 15, 2022)</li>
          <li>Add alternating row colors for better readability</li>
          <li>Ensure the table is responsive on different screen sizes</li>
          <li>Implement sorting functionality for all columns (click headers to sort)</li>
        </ol>
      </div>

      <div className="implementation-area">
        <h2>Your Implementation:</h2>
        <EmployeeTable data={employeeData} />
      </div>
    </div>
  )
}

export default App
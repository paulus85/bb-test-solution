import { useState } from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import './EmployeeTable.css'

function EmployeeTable({ data }) {
  const [sortConfig, setSortConfig] = useState({
    key: 'id',
    direction: 'asc'
  })

  const sortData = (items) => {
    const sortedItems = [...items].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1
      }
      return 0
    })
    return sortedItems
  }

  const requestSort = (key) => {
    let direction = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const sortedData = sortData(data)

  return (
    <div className="table-container">
      <table className="employee-table">
        <TableHeader 
          sortConfig={sortConfig}
          requestSort={requestSort}
        />
        <tbody>
          {sortedData.map((employee) => (
            <TableRow key={employee.id} employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeTable
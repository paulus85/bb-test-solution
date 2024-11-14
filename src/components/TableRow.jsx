function TableRow({ employee }) {
  const formatSalary = (salary) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(salary)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.role}</td>
      <td>{employee.department}</td>
      <td>{formatSalary(employee.salary)}</td>
      <td>{formatDate(employee.joinDate)}</td>
    </tr>
  )
}

export default TableRow
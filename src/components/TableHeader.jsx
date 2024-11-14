function TableHeader({ sortConfig, requestSort }) {
  const getSortDirection = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? '↑' : '↓'
    }
    return ''
  }

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'role', label: 'Role' },
    { key: 'department', label: 'Department' },
    { key: 'salary', label: 'Salary' },
    { key: 'joinDate', label: 'Join Date' }
  ]

  return (
    <thead>
      <tr>
        {columns.map(({ key, label }) => (
          <th 
            key={key}
            onClick={() => requestSort(key)}
            className={`sortable ${sortConfig.key === key ? 'active' : ''}`}
          >
            {label} {getSortDirection(key)}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeader
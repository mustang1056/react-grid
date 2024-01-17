import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'firstName', headerName: 'Title', width: 300 },
  { field: 'emailId', headerName: 'Body', width: 600 }
]

const DataGridAll = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3004/api/v1/employees")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={12}
      />
    </div>
  )
}

export default DataGridAll
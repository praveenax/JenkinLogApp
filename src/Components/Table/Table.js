import React from 'react'

const Table = () => {
    const DummyData = [
        { name: 'Build 1234', date: '2024-03-20', status: 'Success', detailLink: '/details/1' },
        { name: 'Build 1233', date: '2024-03-19', status: 'Failed', detailLink: '/details/2' },
        { name: 'Build 1232', date: '2024-03-18', status: 'Success', detailLink: '/details/3' },
        { name: 'Build 1231', date: '2024-03-17', status: 'Success', detailLink: '/details/4' },
        { name: 'Build 1230', date: '2024-03-16', status: 'Success', detailLink: '/details/5' },
        { name: 'Build 1229', date: '2024-03-15', status: 'Failed', detailLink: '/details/6' },
        { name: 'Build 1228', date: '2024-03-14', status: 'Success', detailLink: '/details/7' },
        { name: 'Build 1227', date: '2024-03-13', status: 'Success', detailLink: '/details/8' },
        { name: 'Build 1226', date: '2024-03-12', status: 'Success', detailLink: '/details/9' },
        { name: 'Build 1225', date: '2024-03-11', status: 'Failed', detailLink: '/details/10' },
      ];

  return (
    <>
    <div style={{ width: '60%', margin: '0 auto', padding: "20px" }}>
      <table className="table" style={{ border: '1px solid #ccc', borderRadius: '5px', borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Date</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Status</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Detail Link</th>
          </tr>
        </thead>
        <tbody>
          {DummyData.map((data, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{data.name}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{data.date}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}><span style={{color: data.status === 'Success' ? 'green' : 'red'}}>{data.status}</span></td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}><a href={data.detailLink}>Details</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Table
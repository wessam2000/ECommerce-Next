import React from 'react'

const page = ({ params }) => {
  console.log(params);
  
  return (
    <div >
      <h1 className='fst-italic text-info text-center'>Catch All Route </h1>
    <ul className="list-group text-dark-emphasis text-center">
      {params.catchAll?.map((segment, index) => (
        <li className="list-group-item fs-3" key={index}>{segment}</li>
      ))}
    </ul>
    </div>
  )
}

export default page
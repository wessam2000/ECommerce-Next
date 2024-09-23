import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  return (
    <div className='fs-1 fst-italic text-info text-center'>Welcome to the Home Page <FontAwesomeIcon icon={faHome} /></div>
  )
}

export default Home
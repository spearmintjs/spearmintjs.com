import React from 'react';
const ContributorsCard = ({name, linkedIn, github}) => {
  return (
    <div className='col-2'>
      <span className='image fit' />
      <h3>{name}</h3>
      <ul className='icons'>
        <li>
          <a href={linkedIn} className='icon alt fa-linkedin'>
            <span className='label'>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href={github} className='icon alt fa-github'>
            <span className='label'>GitHub</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ContributorsCard
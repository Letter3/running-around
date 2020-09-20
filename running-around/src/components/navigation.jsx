import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navigation.css'

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light' data-toggle='collapse' data-target='.nav-collapse'>
      <a className='navbar-brand' href='/'>RA</a>
      <button className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarText'
              aria-controls='navbarText'
              aria-expanded='false'
              aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='raNavigation'>
        <div className='navbar-nav mr-auto'>
            <a href='/shop' className='nav-item nav-link' aria-haspopup='true' aria-expanded='false'>Order Online</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;

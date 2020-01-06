import React from 'react';


//----------Object Destructuring------------------//
const Navbar =({totalCounter})=>{
  return (
    <nav className="navbar">
      The Total Number of Counter is : {totalCounter}
    </nav>
  );
}

export default Navbar;

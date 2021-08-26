import React from 'react'

const Navbar = ({setPages}) => {
    return (
        <div>
            <nav>
                <button onClick={()=>setPages('planets')}>Planet</button>
                <button onClick={()=>setPages('people')}>People</button>
            </nav>
        </div>
    )
}

export default Navbar

import React from 'react'

const PeopleInfo = ({people}) => {
    return (
        <div className="card">
         <h3>{people.name}</h3>
         <p>Gender : {people.gender}</p>
         <p>Birth Year: {people.birth_year}</p>
         
            
        </div>
    )
}

export default PeopleInfo

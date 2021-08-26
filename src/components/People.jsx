import React from 'react'
import {useQuery} from 'react-query'
import PeopleInfo from './PeopleInfo';


const fetchpeopleData = async () => { 
   const res = await fetch('https://swapi.dev/api/people');
   return await res.json();
}
const People = () => {

    const {data, status} = useQuery('people', fetchpeopleData);
    
    return (
        <div>
            <h2 style={{display:'flex', align:'center'}}>Inside people</h2>
            
            {
                status === 'loading' && (
                    <div>Please wait, loading your data....</div>
                )
                
            }
            {
                status === 'error' && (
                    <div>Sorry some error happened ....</div>
                )
            }
            {
                status === 'success' && (
                    <div>
                        {data.results.map(people => (
                            <div><PeopleInfo key={people.name} people={people}/></div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default People

import React from 'react'
import {useQuery} from 'react-query'
import PlanetInfo from './PlanetInfo';


const fetchPlanetData = async (page) => { 
    const URL = `https://swapi.dev/api/planets/?page=${page}`;
    const res = await fetch(URL);
    return await res.json();
}
const Planet = () => {
    const [page, setPages] = React.useState(1);
    const {data, status} = useQuery(['planets', page], ()=>fetchPlanetData(page) , {
        keepPreviousData: true,
        //staleTime:2000,     // Setting staleTime as 2 ms. Before go to Stale state the data is fresh for 2 ms. Can be checked from React Query Dev tool (config section)
        //cacheTime:10,
        //onSuccess : () => console.log('Data fetched without any problem')
    });
    console.log(data);
    return (
        <div>
            <h2 style={{display:'flex', align:'center'}}>Inside Planet</h2>
            {/* <button onClick={()=>setPages(1)}>Page 1</button>
            <button onClick={()=>setPages(2)}>Page 2</button>
            <button onClick={()=>setPages(3)}>Page 3</button>
            <button onClick={()=>setPages(4)}>Page 4</button> */}
            {/* <p>{status}</p> */}
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
                    <>
                    <button
                            onClick={()=>setPages(old=>Math.max(old-1,1))}
                            >Previous Page</button>
                            <span>{page}</span>
                            <button
                            onClick={()=>setPages(old=> (!data || !data.next ? old:old+1))}
                            >Next Page</button>
                    <div>
                        {data.results.map(planet => (
                            <div><PlanetInfo key={planet.name} planet={planet}/></div> 
                        ))}
                    </div>
                    </>
                )
            }
        </div>
    )
}

export default Planet

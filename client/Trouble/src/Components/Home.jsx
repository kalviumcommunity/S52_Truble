import data from './data.json'
const Home=()=>{
    return(
        <div>
            <h1>Troubles</h1>
            <p>These are the list of ways that will get you into Troubles</p>
            <ul>
                {
                    data.map((eachdata)=>{
                        return(
                            <li key={eachdata.id}>{eachdata.trouble}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Home 
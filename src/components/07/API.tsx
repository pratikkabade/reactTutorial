import Axios from "axios";
import { useState, useEffect } from "react";

function API() {

    // METHOD 1
    fetch('https://catfact.ninja/fact')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })


    // METHOD 2-A
    const [catFact, setCatFact] = useState('')

    useEffect(() => {
        Axios.get('https://catfact.ninja/fact')
            .then((res) => {
                setCatFact(res.data.fact)
            })
    }, [])


    // METHOD 2-B
    const [name, setName] = useState('')
    const [predict, setPredict] = useState(null)
    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`)
            .then((res) => {
                setPredict(res.data)
            })
    }

    return (
        <div>
            <p>{catFact}</p>
            <input onChange={(e) => {
                setName(e.target.value)
            }} />
            <button onClick={fetchData}>Predict</button>
            <p>Name- {predict?.name}</p>
            <p>Predicted age- {predict?.age}</p>
            <p>Count- {predict?.count}</p>
        </div>
    )
}
export default API
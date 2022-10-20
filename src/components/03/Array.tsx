//ARRAY

function Array() {
    const Names = [
        { name: 'Jake', age: 10 },
        { name: 'Andrew', age: 15 },
        { name: 'Phillip', age: 20 }
    ]

    return (
        <div>
            <p>{Names[0].name}</p>

            {Names.map((Name, key) => {
                return <>
                    <p>{Name.name} is {Name.age}!</p>
                    <p>{Name.age >= 15 ? Name.name : Name.age}</p>
                </>
            })}
        </div>
    )
}

export default Array;
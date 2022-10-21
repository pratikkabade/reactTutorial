// PROPS
// CONDITION


const User = (props: any) => {
    return (
        <div>
            <p>
                My name is {props.name} and I am {props.age} years old!
                And I am {props.age >= 18 ? 'old enough' : 'not old enough'} to go.
            </p>
        </div>
    )
}
export default User;
import { useRef } from 'react';

export default function UncontrolledForm () {
    // useRef to get input values
    const nameInput = useRef(null);
    const ageInput = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            name: nameInput.current.value,
            age: ageInput.current.value
        })
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={nameInput} placeholder="write name here"/>
            <input type="number" ref={ageInput} placeholder="write age here"/>
            <input type="submit" value="Submit Form" />
        </form>
        <p>{nameInput.current ? <>{nameInput.current.value} is {ageInput.current.value}</> : <>no input yet</>}</p>
        </>
    )
}
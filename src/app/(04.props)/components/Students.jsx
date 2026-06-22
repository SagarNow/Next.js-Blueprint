function Students(props) {
    // props is an object that contains the data passed from the parent component
    return (
        <div>
            <h2> Name: {props.name}</h2>
            <h2> Role: {props.role} </h2>
        </div>
    );
}

export default Students;
//  its a child component we design it to re use the 
//  export default function - means we are exporting this page 
//  you can put any value to props.name etx but page design willl be same 

//  exporting this
export default function Student (props) {
  return (
    <div className=" flex gap-4 m-4">
      <p className="text-2xl font-bold border border-gray-300 p-2 rounded-lg">Name: {props.name}</p>
      <p className="text-2xl font-bold border border-gray-300 p-2 rounded-lg">Age: {props.age}</p>
    </div>
  );
}

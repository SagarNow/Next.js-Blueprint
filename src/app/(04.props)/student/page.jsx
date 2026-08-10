// Parent component
// This page will be visible in the browser.

//  we will import that data file 
import Student from "../page.jsx";
// function Page() → Parent component bana raha hai
// export default → Next.js/other files ko ye component use karne de raha hai
export default function Page() {
  return (
    <div>
      <Student 
        name="Sagar"
        age={20}
      />
      <Student
        name="krishna"
        age={25}
      />
      <Student
        name="radha"
        age={24}
      />
    </div>
  );
}

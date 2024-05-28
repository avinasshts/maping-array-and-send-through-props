import './app.css'
import Employee from './Employee.js'

function App() {

  let employee = [
    {
        name: "Avinash",
        age: 20,
        place: "Mananthavady",
        state: "Kerala"
    },
    {
        name : "APJ Abdul Kalam",
        age : 55,
        place : "Madurai",
        state : "Tamilnadu"
    },
    {
        name : "Salman Khan",
        age : 20,
        place : "Mananthavady",
        state : "Kerala"
    },
    {
        name : "Sharuk Khan",
        age : 46,
        place : "Mumbai",
        state : "Maharashtra"
    },
    {
        name : "Arnod Schwarznigger",
        age : 20,
        place : "Mananthavady",
        state : "Kerala"
    }
]



  return (
    <div>
       {employee.map((e)=>{
        return <Employee name = {e.name} age = {e.age} />
       }) }
    </div>

  );
}

export default App;
 
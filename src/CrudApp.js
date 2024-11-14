import './App.css';
import { useState ,useEffect} from 'react';
import Axios from 'axios';

function CrudApp() {
  const[foodName, setFoodName]=useState('');
  const[description,setDescription]=useState('');

  //fetch data
  const[foodList,setFoodList]=useState([]);
  //Edit
  const[newFoodName, setNewFoodName]=useState('');

  useEffect(() => {
    Axios.get('http://localhost:3001/read')
    .then((response) => {
      setFoodList(response.data);
    })

  }, [])

  const addFoodData = () => {
    Axios.post("http://localhost:3001/insert", {
        foodName: foodName,
        description: description
    })
    .then((response) => {
        console.log(response.data);
        // Optionally refresh food list or handle UI update
    })
    .catch((error) => {
        console.error("Error adding food item:", error);
    });
};
const UpdateFoodData = (id) =>{
    Axios.put("http://localhost:3001/update", {
      id:id, newFoodName:newFoodName})
  }

  const DeleteData = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`)
    .then((response) => {
        console.log(response.data);
        // Optionally refresh food list or handle UI update
    })
    .catch((error) => {
        console.error("Error deleting food item:", error.response ? error.response.data : error.message);
    });
};
  return (
    <div className="App">
      <h1 style={{marginTop:"100px",color:"green"}}>Flower Shop</h1><br /><br />
      <input type="text" placeholder="Flower name" required 
      onChange={(event) => {setFoodName(event.target.value)}}/>
      <br></br><br></br>
      <input type="text" placeholder="Description" required
     onChange={(event) => {setDescription(event.target.value)}}/>
      <br></br><br></br>
      <button onClick={addFoodData}>Submit</button>
      <br></br><br></br>
      <table>
        <h3 style={{color:"deeppink"}}>Beautiful Flowers</h3><br /><br />
        <tr>
          <th>FlowerName</th>
          <th>Flower Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
       
          {foodList.map((val,key) => {
            return    <tr>
       <td>{val.foodName}</td>
       <td>{val.description}</td>  
       <td>
        <input type="text" placeholder="update flowername"
        onChange={(event) => {
          setNewFoodName(event.target.value);
        }}></input>
        <button onClick={()=> UpdateFoodData(val._id)}>Edit</button>
        </td>
        <td>
          <button onClick={()=> DeleteData(val._id)}>Delete</button>
          </td> 
        
  
        </tr>
          })}
      </table>
    </div>
  );
}

export default CrudApp;

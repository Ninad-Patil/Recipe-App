import React,{useState,useEffect} from 'react';
import Recipie from './components/recipie'
import './App.css';


function App() {

  const [recipies,setRecipie] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('');
  const appId = "bfb4542e";
  const appKey = "3cb3b441c9b021730f5cfbed594fb338";
      
  
  const getData = async()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`)
    const data = await response.json();
    setRecipie(data.hits);
   
  }
  
  useEffect(()=>{
        
        getData();

  },[query]);

  const setInput = (e)=>{
        
    setSearch(e.target.value);
  }
 
  const finalSearch = (e)=>{
       e.preventDefault();
       setQuery(search);
       setSearch('');
  }
  return (
    <div className="App">
       
       <style>
@import url('https://fonts.googleapis.com/css2?family=Concert+One&display=swap');
</style>

       <h1 className="quote">Hungry ?</h1>
      <form className="form" onSubmit={finalSearch}>
        <input className="searchBar" type="text" placeholder="what would you like to eat today ?" value={search} onChange={setInput} />
        <button className="searchButton" >Search</button>
      </form>
      <div className="recipes">
      {recipies.map(recipie =>(
           <Recipie 
                    key={recipie.recipe.label} 
                    title={recipie.recipe.label}
                    image={recipie.recipe.image}
                    ingredients = {recipie.recipe.ingredients}
           />
      ))}
      </div>
    </div>
  );
}

export default App;

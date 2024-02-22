import './styles/index.css';
import Search from './components/search/search';
function App() {

  function handleonSearchChange (searchData){
    console.log(searchData)
  }
  return (
    <div className="container">
     <Search onSearchData={handleonSearchChange}/>
    </div>
  );
}

export default App;

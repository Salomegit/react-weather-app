import './styles/index.css';
import Search from './components/search/search';
import Current from './components/Current-Weather/current';
function App() {

  function handleonSearchChange (searchData){
    console.log(searchData)
  }
  return (
    <div className="container">
     <Search onSearchData={handleonSearchChange}/>
     <Current />
    </div>
  );
}

export default App;

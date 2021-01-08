import './App.css';
import{SearchBar} from './component/searchBar'
import{TitleHeader} from './component/header'
import{Emoji} from './component/emojiApp'
import{emoji} from './emoji'

function App() {
  return (
    <div>     
      <TitleHeader/>
      <SearchBar/>
      <Emoji />
    </div>
  );
}

export default App;

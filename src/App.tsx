import { Header } from "components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ReadingList } from "pages/ReadingList/ReadingList";
import { Search } from "pages/Search/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route index element={<Search />} />
            <Route path='reading-list' element={<ReadingList />} />
          </Routes>
        </main>
      </Router>
      <footer></footer>
    </div>
  );
}

export default App;

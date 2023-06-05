import './App.css';
import { useState } from "react";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";


function App() {


  // creating a default movie list 
  const [movies, setMovies] = useState([
    {
      title: `Peter Obi.`,
      description: `The Labour Party's presidential candidate`,
      imgSrc : 'https://dailytrust.com/wp-content/uploads/2022/10/Peter-Obi.jpg',
      rating: 7.5
    },
    {
      title: `Bola Tinubu.`,
      description: `The APC presidential candidate`,
      imgSrc: 'https://www.channelstv.com/wp-content/uploads/2023/02/All-Progressive-Congress-APC-leader-Bola-Tinubu-2nd-L-and-President-of-Nigeria-Muhammadu-Buhari-C-arrives-at-the-APC-party-campaign-rally-at-Teslim-Balogun-Stadium-in-Lagos-2.jpg',
      rating: 4.0
    },
    {
      title: `Atiku Abubakar.`,
      description: `The PDP Dubai presidential candidate`,
      imgSrc: 'https://businessday.ng/wp-content/uploads/2022/10/PDP-presidential-campaign-1.png',
      rating: 5.5
    },
    {
      title: `INEC ,Nigeria's electoral body.`,
      description: `The electoral referee who answers to the highest bidder`,
      imgSrc: 'https://cdn.vanguardngr.com/wp-content/uploads/2022/04/INEC.jpg',
      rating: 5.0
    },
    {
      title: `President Muhammadu Buhari.`,
      description: `The sitting president, Nigeria's worst President till date`,
      imgSrc: 'https://media.premiumtimesng.com/wp-content/files/2020/09/EiIkFAwXYAIQbOk-680x570.jpg',
      rating: 3.0
    }
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRate, setFilterRate] = useState(0);


  const handleFilterTitle = (input) => {setFilterTitle(input.target.value)};

  const handleFilterRate = (input) => {setFilterRate(parseFloat(input.target.value))};

  const handleAddMovie = () => {
    const NewMovie = {
      title: 'New Movie',
      description: 'A new movie has been added to this list',
      imgSrc: 'https://via.placeholder.com/150',
      rating: 1.0
    };
    setMovies([...movies, NewMovie])
  }

  return (
    <div className="App">
      <h1>Nigeria's Political Drama Series: The First Phase</h1>
      
      <button className="addButton" onClick={handleAddMovie} >Add Political Drama</button>

      <Filter 
        filterByRate={handleFilterRate}
        filterByTitle={handleFilterTitle}
      />

      <MovieList movies={movies} filterTitle={filterTitle} filterRate={filterRate} />
    </div>

  );
}

export default App;

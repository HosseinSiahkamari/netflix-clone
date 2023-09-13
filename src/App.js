import './App.css';
import Row from './Components/Row';
import requests from './requests';
import Banner from './Components/Banner/Banner';
import Nav from './Components/Nav/Nav';


function App() {



  return (
    <div className="App">
      <Nav />
      <Banner fetchURL={requests.fetchNetflixOriginals} />
      <Row title={'trending'} fetchURL={requests.fetchTranding} isLarge={true} />
      <Row title={'Netflix Original'} fetchURL={requests.fetchNetflixOriginals} />
      <Row title={'Top Rated'} fetchURL={requests.fetchTopRated} />
      <Row title={'Action'} fetchURL={requests.fetchActionMovies} />
      <Row title={'Comedy'} fetchURL={requests.fetchComedyMovies} />
      <Row title={'Horror'} fetchURL={requests.fetchHorrorMovies} />
      <Row title={'Romance'} fetchURL={requests.fetchRomanceMovies} />
      <Row title={'Documentaries'} fetchURL={requests.fetchDocumentariesMovies} />
    </div>
  );
}

export default App;

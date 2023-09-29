import './App.css';
import Row from './Components/Row';
import requests from './requests';
import Banner from './Components/Banner/Banner';
import Nav from './Components/Nav/Nav';
import Footer from './Components/footer/Footer';


function App() {



  return (
    <div >
      <Nav />
      <Banner fetchURL={requests.fetchNetflixOriginals} />
      <Row rowId= '1' title={'trending'} fetchURL={requests.fetchTranding} isLarge={true} />
      <Row rowId= '2' title={'Netflix Original'} fetchURL={requests.fetchNetflixOriginals} />
      <Row rowId= '3' title={'Top Rated'} fetchURL={requests.fetchTopRated} />
      <Row rowId= '4' title={'Action'} fetchURL={requests.fetchActionMovies} />
      <Row rowId= '5' title={'Comedy'} fetchURL={requests.fetchComedyMovies} />
      <Row rowId= '6' title={'Horror'} fetchURL={requests.fetchHorrorMovies} />
      <Row rowId= '7' title={'Romance'} fetchURL={requests.fetchRomanceMovies} />
      <Row rowId= '8' title={'Documentaries'} fetchURL={requests.fetchDocumentariesMovies} />
      <Footer />
    </div>
  );
}

export default App;

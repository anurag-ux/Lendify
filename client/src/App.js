import './App.css';
import Navigation from './components/navigation/Navigation';
import Landing from './components/Landing/Landing';
import CardGrid from './components/Cards/CardGrid';
import Footer from './components/Footer/footer';
import './dynamic'

function App() {
  return (
    <html>
      <body>
        <div>
          <Navigation/>
          <Landing />
          <CardGrid/>
          <Footer />
        </div>
      </body>
      <script src="/dynamic"></script>
    </html>
  );
}

export default App;

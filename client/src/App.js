import Carousel from './Components/Carousel'
import Pagination from './Components/Pagination'
import Files from './Components/Files'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return(
    <div>
      <Carousel/>
      <Files/>
      <Pagination/>
    </div>
  )
}

export default App;

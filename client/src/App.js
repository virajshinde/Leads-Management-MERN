import Carousel from './Components/Carousel'
import Pagination from './Components/Pagination'
import Files from './Components/Files'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import unsplash from './api/unsplash'
import React , {useState} from 'react'

const App = () => {

  const [message, setMessage] = useState( [] );
   const onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos',{
     params: {query: 'cars'},    
     })

     setMessage(response.data.results)
     console.log(message)

    // this.setState({images: response.data.results})
}

  return(
    <div>
      <Carousel/>
      <Files images={message}/>
      <Pagination onClick={onSearchSubmit()}/>
      
    </div>
  )
}

export default App;

import CarouselComponent from './Components/CarouselComponent.js'
import Pagination from './Components/Pagination'
import Files from './Components/Files'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import unsplash from './api/unsplash'
import React , {useState,useEffect} from 'react'

const App = () => {

  const [message, setMessage] = useState( [] );
  
  
  
  const onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos',{
     params: {query: term},    
     })

     setMessage(response.data.results)
    
     console.log(message)

    

    // this.setState({images: response.data.results})
}

// })


  


  useEffect(() => {
    
  }, [message]);
  

 

  return(
    <div>
      
      <Files images={message}/>
      {/* <Carousel images={message}/> */}
      {/* <Pagination pages={onSearchSubmit}/> */}
      <button onClick = {() => onSearchSubmit('Cars')}>
                    Cars
                </button>
                <button  onClick = {() => onSearchSubmit('Guitars')}>
                    Guitars
                </button>
                <button  onClick = {() => onSearchSubmit('Flowers')}>
                    Flowers
                </button>
                <button  onClick = {() => onSearchSubmit('furniture')}>
                  Furniture
                </button>

                <CarouselComponent images={message}/>

                
                
      
    </div>
  )
}

export default App;

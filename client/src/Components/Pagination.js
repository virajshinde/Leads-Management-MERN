import React, {Component} from 'react'


class Pagination extends Component{


    render(props){
        return(
            <div>
                <button onClick = {this.props.pages('Cars')}>
                    Cars
                </button>
                <button  onClick = {this.props.pages('Flowers')}>
                    Flowers
                </button>
                <button  onClick = {this.props.pages('Paintings')}>
                    Paintings
                </button>
                <button  onClick = {this.props.pages('Guitars')}>
                    Guitars
                </button>

                
            </div>
          )
    }
}

export default Pagination

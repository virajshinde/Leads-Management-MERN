import React, {Component} from 'react'


class Pagination extends Component{


    render(props){
        return(
            <div>
                <div onClick = {this.props.pages('Cars')}>
                    Cars
                </div>
                <div  onClick = {this.props.pages('Flowers')}>
                    Flowers
                </div>
                <div  onClick = {this.props.pages('Paintings')}>
                    Paintings
                </div>
                <div  onClick = {this.props.pages('Guitars')}>
                    Guitars
                </div>

                
            </div>
          )
    }
}

export default Pagination

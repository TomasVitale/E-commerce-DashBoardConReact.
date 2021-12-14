import React, {Component} from 'react';

import Genre  from './Genre';

// let genres = [
//     {genre: 'Acción'},
//     {genre: 'Animación'},
//     {genre: 'Aventura'},
//     {genre: 'Ciencia Ficción'},
//     {genre: 'Comedia'},
//     {genre: 'Documental'},
//     {genre: 'Drama'},
//     {genre: 'Fantasia'},
//     {genre: 'Infantiles'},
//     {genre: 'Musical'}
// ]

class GenresInDb extends Component{
    constructor(){
        super()
        this.state = {
            productsList: []
        }
    }
    componentDidMount(){
        fetch("/api/products")
        .then(res => res.json())
        .then(products =>{
            this.setState({productsList: products.data})
            console.log(this.state.productsList)
        })
    }

    changeColor(){
        let title = document.querySelector("h6")
        title.classList.toggle("bg-secondary");
    }

    render(){

        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 onMouseOver={this.changeColor} onMouseOut={this.changeColor} className="m-0 font-weight-bold text-gray-800">
                                    Products in Data Base
                                </h6>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    {
                                        this.state.productsList.map((products,index)=>{
                                            return  <Genre  {...products}  key={index} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
               
            </React.Fragment>
        )
    }

}
export default GenresInDb;
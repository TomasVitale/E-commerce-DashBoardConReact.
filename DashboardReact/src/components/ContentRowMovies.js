import React from 'react';
import SmallCard from './SmallCard';
import {useEffect, useState} from 'react';


let productInDataBase = {
    color:   "primary",
    titulo: "Products in Data Base",
    valor: 0,
    icono: "fas fa-film",
}

let category ={
    color:   "success",
    titulo: "Total awards",
    valor: 0,
    icono: "fas fa-award",
}

let user = {
    color:   "success",
    titulo: "Actors quantity",
    valor: 0,
    icono: "fas fa-user",
}




function ContentRowTop(){

    

    let [usuario, setUser] = useState(user);
    
    let [categoria, setCategory] = useState(category);
    
    let [product, setProduct] = useState(productInDataBase);

    let cardProps = [product,categoria,usuario];

    
    

        useEffect(() => {
            fetch("/api/products")
            .then(res => res.json())
            .then(productos =>{
            
                setProduct({
                    color:   "primary",
                    titulo: "Products in Data Base",
                    valor: productos.total,
                    icono: "fas fa-film",
                })   
            })

        },[]),
        
        fetch("/api/categories")
        .then(res => res.json())
        .then(categoria =>{
        
            setCategory({
                color:   "primary",
                titulo: "Categories in Data Base",
                valor: categoria.total,
                icono: "fas fa-film",
            })   
        })

    ,[])

    

    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((element,index)=>{
                    return <SmallCard  {...element}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;
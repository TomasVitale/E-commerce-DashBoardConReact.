import React from 'react';
import SmallCard from './SmallCard';
import {useEffect, useState} from 'react';


let productInDataBase = {
    color:   "primary",
    titulo: "Products in Data Base",
    valor: 0,
    icono: "fas fa-couch",
}

let category ={
    color:   "success",
    titulo: "Total awards",
    valor: 0,
    icono: "fas fa-award",
}

let user = {
    color:   "primary",
    titulo: "Users in Data Base",
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
                    icono: "fas fa-couch",
                })   
            })

        },[])

        useEffect(() => {


        fetch("/api/categories")
            .then(res => res.json())
            .then(categoria =>{
            
                setCategory({
                    color:   "primary",
                    titulo: "Categories in Data Base",
                    valor: categoria.total,
                    icono: "fas fa-chair",
                })   
            })

        },[])

        useEffect(() => {


            fetch("/apis/users")
                .then(res => res.json())
                .then(usuarios =>{
                
                    setUser({
                        color:   "primary",
                        titulo: "Users in Data Base",
                        valor: usuarios.total,
                        icono: "fa-solid fa-user"
                    })   
                })
    
            },[]);

    

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
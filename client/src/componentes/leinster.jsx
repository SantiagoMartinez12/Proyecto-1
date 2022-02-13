import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getCervezas, { postCervezas } from "../store/actions/index.js";
import styles from "./leinster.module.css"
import SearchBar from "./search.jsx";

export default function Leinster(){
  const dispatch = useDispatch()
    const cervezas = useSelector((state) => state.filtrado)
    console.log(cervezas)
    const [input, setInput] = useState({
        nombre: "",
        estilo: "",
        descripcion:"",
        cerveceria:"",
        imagen:"",
        precio:"",
        happy:"",
    
    })
  /* 
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estilo: {
      type: DataTypes.STRING,
    },
    cerveceria:{
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.DECIMAL,
    },
    happy: {
     type: DataTypes.DECIMAL,
   },
   imagen: {
     type: DataTypes.STRING,
   },
   estado: {
     type: DataTypes.BOOLEAN,
     defaultValue: false
   }
  
  
  */
    console.log(input.nombre)
    function  handleChange(e){
      setInput({
          ...input,
          [e.target.name]: e.target.value

      })
    }
    let filter
    function handleChangeSearch(e){
      console.log(e.target.value)
      filter = cervezas.filter(el => el.nombre.toLowerCase() == e.target.value.toLowerCase())
      console.log(filter)
    }
    function handleSubmit(e){
      e.preventDefault()
      dispatch(postCervezas(input))

      alert("Creado exitosamente")
      setInput({
        nombre: "",
        estilo: "",
        descripcion:"",
        cerveceria:"",
        imagen:"",
        precio:"",
        happy:"",
              })
  dispatch(getCervezas())
            
  
}


let cont = 0
    return(
        <div className={styles.container}>
        <div className={styles.logo}>
        <img src="https://sanjuanrugbyclub.files.wordpress.com/2018/01/leinster.jpg" alt='imagen' width="5%" height="100%" />
        </div>
          <div className={styles.search}>
          {/* <input type="text" onChange={handleChangeSearch}  placeholder="Buscar"/> */}
           <SearchBar/> 
          </div>
        <div className={styles.seleccion}>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col">Nombre</th>
      <th scope="col">Cerveceria</th>
      <th scope="col">Precio</th>
      <th scope="col">Precio HH</th>
      <th scope="col">Accion</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody className={styles.productos}>

    {
      
            cervezas.map( el => {
              return (
                <tr> 
            <th scope="row">{cont = cont + 1}</th>
            <td>
            <img src={el.imagen} alt='imagen' with="40px" height="40px" />
            </td>
            <td>
            {el.nombre}
            </td>
            <td>{el.cerveceria}</td>
            <td><input type="number" placeholder={el.precio} className={styles.precioN}></input></td>
            <td>{el.happy}</td>
            <td><button>modificar</button></td>
            <label className={styles.switch}>
             <span className={styles.slider}></span>
              </label>
        
          </tr>
              )
            })
      
    }
   {/*  <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr> */}
   {/*  <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>


         {/*  <table>
            <th scope="col">Nombre</th>
            <th scope="col">Estilo</th>
            <th scope="col">precio</th>
            {
                cervezas?.map( el => {
                    return (
                      <div>
                        <h4>Nombre:{el.nombre}</h4>
                        <p>Estilo:{el.estilo}</p>
                        <p>Descripcion:{el.descripcion}</p>
                        <p>Precio:{el.precio}</p>
                      </div>
                    )
                      
                    
                })
            }
            
            </table> */}
          </div>
        <div className={styles.creacion}>
            <h1>Crear cerveza</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder=" Nombre" aria-label="First name" name="nombre" value={input.nombre} onChange={(e)=>handleChange(e)}/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder=" Estilo" aria-label="First name" name="estilo" value={input.estilo} onChange={(e)=>handleChange(e)}/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder=" Cerveceria" aria-label="Last name" name="cerveceria" value={input.cerveceria} onChange={(e)=>handleChange(e)}/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder=" Descripcion" aria-label="Last name" name="descripcion" value={input.descripcion} onChange={(e)=>handleChange(e)}/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder=" Imagen URL.." aria-label="Last name" name="imagen" value={input.imagen} onChange={(e)=>handleChange(e)}/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder=" Precio" aria-label="Last name" name="precio" value={input.precio} onChange={(e)=>handleChange(e)}/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder=" Precio HH" aria-label="Last name" name="happy" value={input.happy} onChange={(e)=>handleChange(e)}/>
  </div>
</div>
<button type="submit" class="btn btn-primary" className={styles.crear}>Crear</button>

</form>
        </div>
      </div>
    )
}
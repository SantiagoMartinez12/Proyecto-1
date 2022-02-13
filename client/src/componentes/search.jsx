import {useState} from 'react';
import { useDispatch } from 'react-redux';
import getCervezas, { buscarCervezas } from '../store/actions';
import styles from './search.module.css'


export default function SearchBar(){
     const [search, setSearch] = useState('')

     let dispatch = useDispatch()

    function onSubmit(e){
        e.preventDefault()
            if(!search) {
                dispatch(getCervezas())
            } else {
                dispatch(buscarCervezas(search))
                setSearch('')
            }
        }
    
    function onInputChange (e){
        e.preventDefault()
        setSearch(e.target.value)
    }

     return <div>
         <form onSubmit={onSubmit} className={styles.searchBar}>
             <input type="text" onChange={onInputChange} value={search} placeholder="Buscar"/>
             <input type="submit" value="Search" className={styles.searchBoton} />
         </form>
     </div>
}
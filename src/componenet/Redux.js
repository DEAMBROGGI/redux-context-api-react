import React  from 'react';
import { useDispatch,  useSelector } from "react-redux";
import {callSearch,} from '../core/redux/actions';

const Redux = ()=>{
const {arrayAxiosRedux}= useSelector(state => state.dataReducer);

//Funciones para usar con REDUX
const dispatchRedux = useDispatch()

function searchResultRedux(evento){
    dispatchRedux(callSearch(evento))   
}

return(
<>

<div>
  <h2>RESULTADO REDUX</h2>
</div>
<div>
  
  <input type="text" placeholder="Busca la pelicula" id="ingreso" onKeyUp={(e) => {searchResultRedux(e.target.value)}}/>
  <h3>Total Encontrados {arrayAxiosRedux.length}</h3> 

</div>
    {arrayAxiosRedux.map((item , index)=>(
    <div key={index}>{item.title || item.name}</div>
))
} 
</>
)

}
export default Redux;
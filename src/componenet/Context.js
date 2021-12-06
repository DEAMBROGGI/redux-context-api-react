import React from 'react';
import {useStateValue} from '../core/Context/StateProvider';
import {actionTypes} from '../core/Context/reducer';
import { getSearch } from '../core/services';

const Context = ()=>{

const [{arrayAxiosContext, textInput},dispatch] = useStateValue();

function searchResultContext(event){
  getSearch(event)
  .then (response => 
    dispatch({
        type: actionTypes.ADD_ARRAY_CONTEXT,
        arrayAxiosContext:response.data.results,
      })
   ).catch((err)=>{
    dispatch({
        type: actionTypes.ADD_ARRAY_CONTEXT,
        arrayAxiosContext:[],  
  })
})
}

function changeText(event){
  dispatch({
      type: actionTypes.ADD_TEXT,
      textInput:event,
    })
  }
return(
<>

<div>
  <h2>RESULTADO CONTEX</h2>
</div>
<div>
  
  <input type="text" placeholder="Busca la pelicula" id="ingreso" onKeyUp={(e) => {searchResultContext(e.target.value)}}/>
  <h3>Total Encontrados {arrayAxiosContext.length}</h3> 
  {arrayAxiosContext.map((item , index)=>(
    <div key={index}>{item.title || item.name}</div>
))
} 
</div>

<div>
  <h4>Ingresa texto en input</h4>
  <input type="text" placeholder="Ingresa Aqui tu texto" id="ingreso" onChange={(e) => {changeText(e.target.value)}}/>
<h3>{textInput}</h3>
</div>
</>
)

}
export default Context;
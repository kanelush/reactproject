import React from 'react'
import { useNegociosData } from '../hooks/useNegociosData';
import { Link } from 'react-router-dom';





export const Negocios = () => {
  
  const onSuccess = data => {
    console.log({ data })
  }

  const onError = error => {
    console.log({ error })
  }

  const { isLoading, data, isError, error } = useNegociosData(
    onSuccess,
    onError
  )
   
 
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
      <div className="w-12 h-12 border-4 border-blue-600 rounded-full loader justify-center"></div>
      </div>
      )
  }
  if (isError) {
    return <h2>{error.message}</h2>
  } 

  const ab = data?.data.filter(negocio => negocio.cat_name === 'Profesionales').map(negocio => negocio.title)
  console.log("wsup",ab)
  const allCategories = data.data.map(negocio => negocio.cat_name)
  console.log("Tech tycoon: ",allCategories);


  

  
return (
  <>
  <h1 className="text-4xl font-bold text-center">Productos y Servicios</h1>
  <div className="mx-48 grid justify-center grid-cols-4 gap-4 py-4">
  
    
    { 
      
      data?.data.map((negocio) => {
        console.log(negocio.image)
        return (
        <div key={negocio.id} className="rounded-lg shadow-lg pb-4 my-10 bg-white max-w-sm hover:bg-slate-200">
        <Link className="text-2xl" to={`/${negocio.id}`}>
          
          <img className="rounded-t-lg object-cover max-h-64 w-full" src={`http://127.0.0.1:8000${negocio.image}`} alt=""/>
          
          <div className="p-6">
          
          
          <h3 className="text-gray-900 text-xl font-medium mb-2 text-center">{negocio.title}</h3>
          <h3 className="text-gray-900 text-xl font-medium mb-2 text-center">{data?.data.description}</h3>
          <h3 className="text-gray-900 text-xl font-medium mb-2 text-center">{negocio.cat_name}</h3>
        
          </div>
          </Link>
        </div>
        
        
        )
      }) 
    
    }
    
  </div>
  </>
  )
}

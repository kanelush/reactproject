import React from 'react'
import { useParams } from 'react-router'
import { useNegocioData } from '../hooks/useNegocioData'

 export const Negocio = () => {
   const { negocioId } = useParams()
   const { isLoading, data, isError, error } = useNegocioData(negocioId)
   if (isLoading) {
    return (
        <div className="flex justify-center items-center">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
        )
    }
   if (isError) {
        return <h2>{error.message}</h2>
    }
   return (
     <div className="flex justify-center">
     <div className="rounded-lg shadow-lg bg-white max-w-sm hover:bg-slate-200">
   
       <img className="rounded-t-lg w-full" src={`http://127.0.0.1:8000${data?.data.image}`} alt=""/>
      
       <div className="p-6">
       <h3 className="text-gray-900 text-xl font-medium mb-2">Victor Crack</h3>
       <h3 className="text-gray-900 text-xl font-medium mb-2">{data?.data.title}</h3>
       <h3 className="text-gray-900 text-xl font-medium mb-2">{data?.data.description}</h3>
       </div>
     </div>
     
     </div>
     
   )
 }
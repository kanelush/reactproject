import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
// import { useHistory } from 'react-router-dom'

export const Contacto = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [description, setDescription] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
      e.preventDefault()
      
      const datos = {name, mail, description};
      console.log(datos)
      setIsPending(true)
      axios
        .post('http://127.0.0.1:8000/api/contact', datos)
        .then((resp) => {
        console.log(resp);
        setIsPending(false)
        console.log(isPending)
        navigate('/')
        
        })
        .catch((err) => {
        console.log(err);
        });
        console.log("added!")
        
  }
  return (
    <>
    
    <h1 className="text-4xl text-center my-10">Contáctanos</h1>
    <div className="flex w-2/3 py-10 mx-auto rounded-lg justify-center bg-slate-500">
        
    <form onSubmit={handleSubmit}>
    <div className="mb-6">
        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Nombre</label>
        <input type="name" value={name} onChange={(e) => setName(e.target.value)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    </div>
    <div className="mb-6">
        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Email</label>
        <input type="email" value={mail} onChange={(e) => setMail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
    </div>
    <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Descripcion</label>
        <textarea type="description" value={description} onChange={(e) => setDescription(e.target.value)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    </div>
    
    { !isPending && <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button> }
    { isPending && <button disabled type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviando...</button> }
    <h1>{name}</h1>
    <h1>{mail}</h1>
    <p>{description}</p>
    </form>
    </div>
    </>
  )
}
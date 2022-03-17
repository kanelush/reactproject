import { useQuery } from 'react-query'
import axios from 'axios'

const fetchNegocio = ({ queryKey }) => {
    const negocioId = queryKey[1]
    
    return axios.get(`http://127.0.0.1:8000/api/negocios/${negocioId}`)
}

export const useNegocioData = (negocioId) => {
    return useQuery(['negocio', negocioId], fetchNegocio)
}

import { useQuery, useMutation, useQueryClient } from 'react-query'
import axios from 'axios'


const fetchNegocios = () => {
    return axios.get('http://127.0.0.1:8000/api/negocios')
  }

export const useNegociosData = (onSuccess, onError) => {
  return useQuery('negocios', fetchNegocios, {
    onSuccess,
    onError
  })
  
  
  
}
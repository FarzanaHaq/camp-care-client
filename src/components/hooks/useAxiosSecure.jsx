import axios from 'axios'
import { use, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../Context/AuthContext'

export const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
})

const useAxiosSecure = () => {
  const navigate = useNavigate()
   const { signOutUser } = useContext(AuthContext);
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      res => {
        return res
      },
      async error => {
        console.log('Error caught from axios interceptor-->', error.response)
        if (error.response.status === 401 || error.response.status === 403) {
          // logout
          signOutUser()
          // navigate to login
          navigate('/login')
        }
        return Promise.reject(error)
      }
    )
  }, [ signOutUser, navigate])
  return axiosSecure
}

export default useAxiosSecure

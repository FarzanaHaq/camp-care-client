import { useEffect, useState } from 'react'
import { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';


const useRole = () => {
   const { user } = use(AuthContext);
  const [role, setRole] = useState(null)
  const [isRoleLoading, setIsRoleLoading] = useState(true)
  
  useEffect(() => {
    const fetchUserRole = async () => {
      const { data } = await axios(
        `http://localhost:3000/user/role/${user?.email}`
      )

      setRole(data?.role)
      setIsRoleLoading(false)
    }
    fetchUserRole()
  }, [user])

  return [role, isRoleLoading]
}

export default useRole

import { useEffect, useState } from 'react'
import { use } from 'react';

import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';


const useRole = () => {
  const { user } = use(AuthContext);
  const [role, setRole] = useState(null)
  const [isRoleLoading, setIsRoleLoading] = useState(true)
  
  useEffect(() => {
    const fetchUserRole = async () => {
      const { data } = await axios(
        `https://camp-server-lake.vercel.app/user/role/${user?.email}`
      )

      setRole(data?.role)
      setIsRoleLoading(false)
    }
    fetchUserRole()
  }, [user])

  return [role, isRoleLoading]
}

export default useRole

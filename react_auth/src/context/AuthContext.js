import React, { createContext, useState, useEffect } from 'react';
// import { redirect } from 'react-router-dom';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState(null);
  // const navigate = useNavigate()
  const [user, setUser] = useState(()=> {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  })

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData))
    setUser(userData);
    // return redirect('/')
  };

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null);
  };


  useEffect(()=>{
    const storedUser = localStorage.getItem('user')
    
    if (storedUser){
      setUser(JSON.parse(storedUser))
    }
  }, [user])


  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


// export default AuthProvider
// export {AuthContext}
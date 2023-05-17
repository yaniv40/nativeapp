import {createContext,useState} from 'react';

  const UserContext =createContext();

export const UserProvider=({children})=>{

    
    const [users,setUsers]=useState([{name:'yaniv',password:'123456'},{name:'ohad',password:'654321'},{name:'eitan',password:'333333'}]);
    const addUser = (name, password) => {
        setUsers([...users, { name, password }]);
      };
    
return(

    <UserContext.Provider value={{users,addUser}}>
        {children}
    </UserContext.Provider>
)



};

export default UserContext;
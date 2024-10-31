import axios from 'axios'

export const getPersonRequest = async () => 
   await axios.get('http://localhost:4005/api/personaGet');


export const cratePersonUserRequest = async (person) =>
    await axios.post('http://localhost:4005/api/personUserRegister', person);


export const UpdateStsteUserPerson = async (id,newState) =>
   
   await axios.patch(`http://localhost:4005/api/updateStateUserPerson/${id}`,{ state: newState });

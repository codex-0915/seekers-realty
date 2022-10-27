import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'bd4524c759msh4cb69e02887c84bp15e3e5jsn332d52b2ca7c' ,
    },
  });
    
  return data;
}
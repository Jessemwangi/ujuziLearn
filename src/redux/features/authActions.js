import postD from '../../utils/getData' 
import { setError, setToken, setUser } from './loginSlice';
export const login = (apiUrl , object) => async (dispatch) => {

    try {
      const response = await postD.postData(apiUrl, object);
      console.log(response)
      if(response.status === 400) {
        dispatch(setError(response))
      }
      else{
        const { user, token } = response;
        dispatch(setUser(user));
        dispatch(setToken(token));
        dispatch(setError(null))
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

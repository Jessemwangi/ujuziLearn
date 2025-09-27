import { TokenService } from '../../services/token';
import postD from '../../utils/getData' 
import { setError, setToken, setUser } from './loginSlice';

export const login = (apiUrl, object) => async (dispatch) => {
  try {
    const response = await postD.postData(apiUrl, object);
    if (response.status ==400 || response.status ==500 || response.status ==401 
      || response.status ==403 || response.status ==404
    ) {
     
      dispatch(setError({message:response.message} || { message: 'Login failed' }));
      dispatch(setUser(null));
      dispatch(setToken(null));
    } else if (response.user && response.token) {
      TokenService.setUser(response.user);
      TokenService.setToken(response.token);
      dispatch(setUser(response.user));
      dispatch(setToken(response.token));
      dispatch(setError(null));
    } else {
      dispatch(setError({ message: 'Unexpected response format' }));
      dispatch(setUser(null));
      dispatch(setToken(null));
    }
  } catch (error) {
  
    dispatch(setError({ message: 'Network or server error' }));
    dispatch(setUser(null));
    dispatch(setToken(null));
  }
};


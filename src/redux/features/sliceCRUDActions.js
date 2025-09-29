import httpClient from '../../services/http-client';
import { TokenService } from '../../services/token';

export const CRUD_Action_Get = (endpoint, setData, setError) => async (dispatch) => {

    try {
      if (TokenService.hasToken()) {
        const response = await httpClient.get(`${endpoint}`);
    
      if(response.status === 400) {
        dispatch(setError(response))
      }
      else{         
        dispatch(setData(response));
        dispatch(setError(null))
      }
    }
    else{
      dispatch(setError({message:'invalid token session'}));
    }
    } catch (error) {
      setError('error')
      
    }
  };

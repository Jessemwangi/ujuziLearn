import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { TokenService } from '../services/token'; 
import { setToken , setUser } from '../redux/features/loginSlice';
import { BASE_URL } from '../queries/endpoints';
import { useRouter } from 'next/router';

const SessionExpiredModal = () => {
  const dispatch = useDispatch();
   const router = useRouter();

if (!TokenService.hasToken()) {
  handleSignOut();
  return null; 
}
const token = TokenService.getToken();

  const handleRefresh = async () => {
    try {
      // Use the full URL for your API endpoint
      const response = await fetch(`${BASE_URL}/student/refresh-token`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        // If refreshing itself fails, the token is likely invalid, so sign out
        throw new Error('Failed to refresh session.');
      }

      // 1. Update token in Redux Store
      dispatch(setToken(result.token));
      TokenService.setToken(result.token);
      
      window.location.reload();

    } catch (err) {
      console.error('Session refresh failed:', err);
      // If refresh fails for any reason, force the user to sign out
      handleSignOut();
    }
  };

  const handleSignOut = () => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    TokenService.deleteToken();
     router.push('/sign-out'); 
   
  };

  // --- Component's UI ---
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  return (
    <div style={{ textAlign: 'center', padding: '80px 0' }}>
      <h2>Your Session Has Expired 🕒</h2>
      <p>Please refresh your session to continue or sign out.</p>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <button onClick={handleRefresh} style={{...buttonStyle, background: '#007bff', color: 'white'}}>
          Refresh Session
        </button>
        <button onClick={handleSignOut} style={{...buttonStyle}}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default SessionExpiredModal;
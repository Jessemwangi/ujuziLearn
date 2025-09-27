import React from 'react';
import { useDispatch } from 'react-redux';
import { TokenService } from '../services/token'; 
import { setToken, setUser } from '../redux/features/loginSlice';
import { BASE_URL } from '../queries/endpoints';
import { useRouter } from 'next/router';

const SessionExpiredModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignOut = () => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    TokenService.deleteToken();
    localStorage.clear();
    sessionStorage.clear();
    router.push('/sign-out');
  };

  if (!TokenService.hasToken()) {
    handleSignOut();
    return null;
  }

  const token = TokenService.getToken();

  const handleRefresh = async () => {
    try {
      const response = await fetch(`${BASE_URL}/student/refresh-token`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const result = await response.json();
      if (!response.ok) throw new Error('Failed to refresh session.');
      dispatch(setToken(result.token));
      TokenService.setToken(result.token);
      window.location.reload();
    } catch (err) {
      handleSignOut();
    }
  };

  return (
    <div className="edu-auth-wrapper">
      <div className="edu-auth-container">
        <div className="edu-auth-box">
          <div className="edu-auth-icon warning" style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>
            🔒
          </div>
          <h2 className="edu-auth-title">Session Expired</h2>
          <p className="edu-auth-message">Your session has expired. Please refresh to continue or sign out.</p>
          <div className="form-group" style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={handleRefresh} className="edu-btn btn-medium">
              Refresh Session <i className="icon-refresh"></i>
            </button>
            <button onClick={handleSignOut} className="edu-btn btn-border">
              Sign Out <i className="icon-west"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionExpiredModal;

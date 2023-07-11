import { useNavigate } from 'react-router-dom';

// const isAuthenticated = () => {
//   return localStorage.getItem('CognitoIdentityServiceProvider.23egp94790a559seqp77f6ndl6.test2.accessToken') !== null;
// };

const ProtectedRoute = ({children,user }) => {
  const navigate = useNavigate();
  if (!user) {
    navigate('/login');
  }
  else{
    return children;
  }
  
};

export default ProtectedRoute;

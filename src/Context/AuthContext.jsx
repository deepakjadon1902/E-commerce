// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// // Create the context with a default value
// export const AuthContext = createContext({
//   isAuthenticated: false,
//   userEmail: '',
//   login: () => {},
//   logout: () => {},
// });

// // Create a custom hook to use the auth context
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// // Create the AuthProvider component
// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userEmail, setUserEmail] = useState('');
//   const navigate = useNavigate();

//   // Login function
//   const login = (email) => {
//     setIsAuthenticated(true);
//     setUserEmail(email);
//     // You can add additional logic here, like storing tokens in localStorage
//     localStorage.setItem('isAuthenticated', 'true');
//     localStorage.setItem('userEmail', email);
//   };

//   // Logout function
//   const logout = () => {
//     setIsAuthenticated(false);
//     setUserEmail('');
//     // Clear any stored authentication data
//     localStorage.removeItem('isAuthenticated');
//     localStorage.removeItem('userEmail');
//     navigate('/'); // Redirect to home page after logout
//   };

//   // Check for existing authentication on component mount
//   useEffect(() => {
//     const storedAuth = localStorage.getItem('isAuthenticated');
//     const storedEmail = localStorage.getItem('userEmail');
    
//     if (storedAuth === 'true' && storedEmail) {
//       setIsAuthenticated(true);
//       setUserEmail(storedEmail);
//     }
//   }, []);

//   const value = {
//     isAuthenticated,
//     userEmail,
//     login,
//     logout
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// // Create a ProtectedRoute component
// export const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate('/login');
//     }
//   }, [isAuthenticated, navigate]);

//   return isAuthenticated ? <>{children}</> : null;
// };

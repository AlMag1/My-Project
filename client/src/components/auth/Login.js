// import React, { useState } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import { login } from '../../store/auth/actions';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

//   if (isAuthenticated) {
//     return <Redirect to="/" />;
//   }

//   const onSubmit = e => {
//     e.preventDefault();

//     const params = {
//       email,
//       password
//     };

//     dispatch(login(params));
//   };

//   return (
//     <div className="login">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-8 m-auto">
//             <h1 className="display-4 text-center">Log In</h1>
//             <p className="lead text-center">Sign in to your account</p>
//             <form onSubmit={onSubmit}>
//               <div className="form-group">
//                 <input
//                   type="email"
//                   className="form-control form-control-lg"
//                   placeholder="Email Address"
//                   name="email"
//                   value={email}
//                   onChange={event => setEmail(event.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="password"
//                   className="form-control form-control-lg"
//                   placeholder="Password"
//                   name="password"
//                   value={password}
//                   onChange={event => setPassword(event.target.value)}
//                 />
//               </div>
//               <input type="submit" className="btn btn-info btn-block mt-4" />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

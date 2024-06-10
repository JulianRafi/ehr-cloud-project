// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import SignUp from "./pages/signup/signup"; // Import the SignUp component
// import List from "./pages/list/List";
// import Single from "./pages/single/Single";
// import New from "./pages/new/New";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { productInputs, userInputs } from "./formSource";
// import "./style/dark.scss";
// import { useContext } from "react";
// import { DarkModeContext } from "./context/darkModeContext";

// function App() {
//   const { darkMode } = useContext(DarkModeContext);

//   const currentUser = false;

//   const RequireAuth = ({ children }) => {
//     return currentUser ? children : <Navigate to="/login" />;
//   };

//   return (
//     <div className={darkMode ? "app dark" : "app"}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/">
//             <Route path="login" element={<Login />} />
//             <Route path="signup" element={<SignUp />} /> {/* Add the sign-up route */}
//             <Route index element={<Home />} />
//             <Route path="users">
//               <Route index element={<RequireAuth><List /></RequireAuth>} />
//               <Route path=":userId" element={<RequireAuth><Single /></RequireAuth>} />
//               <Route
//                 path="new"
//                 element={<RequireAuth><New inputs={userInputs} title="Add New User" /></RequireAuth>}
//               />
//             </Route>
//             <Route path="products">
//               <Route index element={<RequireAuth><List /></RequireAuth>} />
//               <Route path=":productId" element={<RequireAuth><Single /></RequireAuth>} />
//               <Route
//                 path="new"
//                 element={<RequireAuth><New inputs={productInputs} title="Add New Product" /></RequireAuth>}
//               />
//             </Route>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/signup"; // Import the SignUp component
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Edit from "./pages/edit/Edit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
              <Route
                path="edit"
                element={<Edit inputs={userInputs} title="Edit Existing User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
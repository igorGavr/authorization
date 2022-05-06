import {Routes, Route, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CarPage, LoginPage, RegisterPage} from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'cars'}/>}/>
          <Route path={'cars'} element={<CarPage/>}/>
          <Route path={'login'} element={<LoginPage/>}/>
          <Route path={'register'} element={<RegisterPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

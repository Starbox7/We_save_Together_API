/** import library */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/** import page */
import Home from '../page/visit/Home';
import Team from '../page/visit/Team';
import Project from '../page/visit/Project';
import SignIn from '../page/admin/SignIn';
import SignInfo from '../page/admin/SignInfo';
import SignUp from '../page/admin/SignUp';
import Console from '../page/admin/Console';
import Auth from '../page/admin/Auth';
/** */
import authStore from '../store/authStore';
import { useEffect } from 'react';

/** Route Area */
function Router() {
  const signState = authStore((state) => state.signState);
  useEffect(() => {
    /** Test!!! */ console.log(`Here is router!! -> ${signState}`);
  }, [signState]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/console" element={signState ? <Console /> : <SignIn />} />
        <Route path="/up" element={<SignUp />} />
        <Route path="/info" element={<SignInfo />} />
        <Route path="/in" element={<SignIn />} />
        <Route path="/project" element={<Project />} />
        <Route path="/team" element={<Team />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
//              /** Test!!! */ console.log(`${}`);

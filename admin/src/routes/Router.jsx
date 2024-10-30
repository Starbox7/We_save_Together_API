import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page from '../page/index';
import authStore from '../store/authStore';

function Router() {
  const signState = authStore((state) => state.signState);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/console" element={signState ? <Page.Console /> : <Page.SignIn />} />

        <Route path="/auth" element={<Page.Auth />} />
        <Route path="/up" element={<Page.SignUp />} />
        <Route path="/info" element={<Page.SignInfo />} />
        <Route path="/in" element={<Page.SignIn />} />
        <Route path="/project" element={<Page.Project />} />
        <Route path="/team" element={<Page.Team />} />
        <Route path="/*" element={<Page.Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

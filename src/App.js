import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Login = lazy(() => import("./component/login/signin/Login"));
const Navbar = lazy(() => import("./component/nav/Navbar"));
const Main = lazy(() => import("./component/main/Main"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Navbar />}>
              <Route path="" element={<Main />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Route>
            {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

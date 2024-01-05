import { Routes, Route } from "react-router-dom"

import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"

console.log('/src/pages/SignIn:', "../pages/SignIn");

export function AuthRoutes() {

  return(
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  )
}

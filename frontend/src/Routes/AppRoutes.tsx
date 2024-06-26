import Layout from "@/layouts/layout"
import AuthCallbackPage from "@/pages/AuthCallbackPage"
import Home from "@/pages/Home"
import UserProfilePage from "@/pages/UserProfilePage"
import { Navigate, Route, Routes } from "react-router-dom"

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero={true}>
            <Home />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route
        path="/user-profile"
        element={
          <Layout>
            <UserProfilePage />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRoutes

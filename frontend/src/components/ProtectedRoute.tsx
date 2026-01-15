import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

type Props = {
  children: JSX.Element;
};

export default function ProtectedRoute({ children }: Props) {
  const { token } = useContext(AppContext);

  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

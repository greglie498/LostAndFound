import { Children } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute{( Children)}{
    const user = JSON.parse(localStorage.getItem("user"));

    if(!user){
        return <Navigate to ="/login" />
    }

    return Children;
}

export default ProtectedRoute;
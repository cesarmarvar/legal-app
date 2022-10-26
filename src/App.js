import React, { Suspense } from "react";
import { useAuth } from "./context/auth-context";
import UnauthenticatedApp from "./UnauthenticatedApp";

function App() {

  const { user, isLoading } = useAuth();

  const AuthenticatedApp = React.lazy(() => import("./AuthenticatedApp"))

  return (
    <>{
      isLoading 
      ?
      <p>App is loading</p> 
      :
      <Suspense fallback={<p>Loading...</p>}>
        { user ? <AuthenticatedApp /> : <UnauthenticatedApp /> }
      </Suspense>
      }
    </>
  );
}

export default App;

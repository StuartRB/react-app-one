import React from "react";

const RemoteApp = React.lazy(() => import("app2/Vegetables"));

const Home = () => {
  return (
    <>
      <div>This is React App One</div>
      <br />
      <div>With any luck a component from React App Two will appear below:</div>
      <React.Suspense fallback="Loading Button...">
        <RemoteApp />
      </React.Suspense>
      <div>If so, horray.</div>
    </>
  );
};

export default Home;

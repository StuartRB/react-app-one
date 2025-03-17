import React, { useState } from "react";

const RemoteApp = React.lazy(() => import("app2/Vegetables"));
const MegaButton = React.lazy(() => import("app2/MegaButton"));

const Home = () => {
  const mega = () => {
    return (
      showMega && (
        <>
          <MegaButton />
        </>
      )
    );
  };

  const [showMega, setShowMega] = useState(false);

  return (
    <>
      <div>This is React App One</div>
      <br />
      <div>With any luck a component from React App Two will appear below:</div>
      <React.Suspense fallback="Loading Button...">
        <RemoteApp />
      </React.Suspense>
      <div>If so, horray.</div>
      <br />
      <a
        style={{
          cursor: "pointer",
          border: "20px",
          backgroundColor: "#717782",
          color: "white",
        }}
        onClick={() => setShowMega(!showMega)}
      >
        Megabutton
      </a>
      {mega()}
    </>
  );
};

export default Home;

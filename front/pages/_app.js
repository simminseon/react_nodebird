import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

const App = ({ Component }) => {
  return (
    <>
      {/* head태그를 수정하고 싶을때 */}
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default App;

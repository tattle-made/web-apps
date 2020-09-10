import React from "react";
import Helmet from "react-helmet";

/**
 * @author
 * @function SEO
 **/

const SEO = ({ lang, title }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s`}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default SEO;

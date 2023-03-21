import React, { useState, useEffect } from "react";

function Page() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    fetch(
      "http://miot-seychelles-medical.sc/backend-getAPI/wp-json/wp/v2/pages/5"
    )
      .then((response) => response.json())
      .then((data) => setPage(data));
  }, []);

  if (!page) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{page.title.rendered}</h2>
      {page.acf.about_us_title}
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </div>
  );
}

export default Page;

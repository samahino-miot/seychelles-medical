import React, { useEffect, useState } from "react";

export default function Logo() {
  const [logos, setLogos] = useState(null);
  useEffect(() => {
    fetch(
      "http://miot-seychelles-medical.sc/backend-getAPI/wp-json/wp/v2/pages/32"
    )
      .then((response) => response.json())
      .then((data) => setLogos(data));
  }, []);
  console.log(logos);
  if (!logos) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <img src={logos.acf.site_logo} alt="" />
    </div>
  );
}

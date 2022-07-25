import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    document.body.style.backgroundColor = "#FFFFFF";
  });

  return (
    <div>
      <header></header>
    </div>
  );
}

export default Header;

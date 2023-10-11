import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {


  const navigate = useNavigate();

  return (
    <header>
      <nav>
        <ul className="menuDefault">
          <li onClick={() => navigate("/")} className="title two disable">
            Início
          </li>
          <li
            onClick={() => navigate("/photograph")}
            className="title two disable"
          >
            Fotografia
          </li>
          <li
            onClick={() => navigate("/social")}
            className="title two disable"
          >
            Social Media
          </li>
          <li
            onClick={() => navigate("/videomaker")}
            className="title two disable"
          >
            Videomaker
          </li>
          <li
            onClick={() => navigate("/contact")}
            className="title two disable"
          >
            Contato
          </li>
        </ul>
      </nav>
    </header>
  );
};

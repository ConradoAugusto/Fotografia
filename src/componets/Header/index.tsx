import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {

  const navigate = useNavigate();

  return (
    <header>
      <nav>
        <ul className="menuDefault">
          <li onClick={() => navigate("/")} className="title three disable">
            Início
          </li>
          <li
            onClick={() => navigate("/photograph")}
            className="title three disable"
          >
            Fotografia
          </li>
          <li
            onClick={() => navigate("/social")}
            className="title three disable"
          >
            Social Media
          </li>
          <li
            onClick={() => navigate("/videomaker")}
            className="title three disable"
          >
            Videomaker
          </li>
          <li
            onClick={() => navigate("/contact")}
            className="title three disable"
          >
            Contato
          </li>
        </ul>
      </nav>
    </header>
  );
};

import React from "react";
import { Listdata } from "./DataTemp.styled";
import { P } from "./DataTemp.styled";
import { Wrapper } from "./DataTemp.styled";
export default function DataTemp() {
  return (
    <Wrapper>
      <Listdata>
        <li className="sun">
          <span> 🌈 </span>
        </li>
        <li className="gradus">17 C&#176; | F&#176;</li>
      </Listdata>
      <Listdata>
        <P className="humidity">
          Humidity: <span></span> 80%
        </P>
        <P className="wind">
          Wind: <span></span> 6km/h
        </P>
      </Listdata>
    </Wrapper>
  );
}

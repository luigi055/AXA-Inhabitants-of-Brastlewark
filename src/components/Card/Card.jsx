// @flow
import React from "react";
import convertColorsToHex from "./../../tools";
import { GnomeCard, Avatar, GnomeInfo, GnomeInfoList } from "./CardStyled";

type Props = {
  to: string
};

const Card = ({ to }: Props) => (
  <GnomeCard to={to} hairColor={convertColorsToHex("RED")}>
    <div className="banner" />
    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7397s57QFwqPXVkOrTlf2g4z0m73Sl3acuODleLVVMSBb-3e3">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7397s57QFwqPXVkOrTlf2g4z0m73Sl3acuODleLVVMSBb-3e3"
        alt="avatar"
      />
    </Avatar>
    <header className="description">
      <h2>Luis Olivero</h2>
      <div>Runner || Hunter || Trader</div>
    </header>
    <GnomeInfo>
      <GnomeInfoList hairColor={convertColorsToHex("red")}>
        <span>Age</span>
        <span>230</span>
      </GnomeInfoList>
      <GnomeInfoList hairColor={convertColorsToHex("red")}>
        <span>Weight</span>
        <span>
          60 <span className="unit">KG</span>
        </span>
      </GnomeInfoList>
      <GnomeInfoList hairColor={convertColorsToHex("red")}>
        <span>Height</span>
        <span>
          120 <span className="unit">CM</span>
        </span>
      </GnomeInfoList>
    </GnomeInfo>
    <div className="banner-footer" />
  </GnomeCard>
);

export default Card;

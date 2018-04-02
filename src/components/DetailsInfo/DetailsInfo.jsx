// @flow
import React from "react";
import convertColorsToHex from "./../../tools";
import {
  GnomeDetails,
  Avatar,
  GnomeInfoDetails,
  GnomeInfoListDetails
} from "./DetailsInfoStyled";

const DetailsInfo = () => (
  <GnomeDetails hairColor={convertColorsToHex("red")}>
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
    <GnomeInfoDetails>
      <GnomeInfoListDetails hairColor={convertColorsToHex("red")}>
        <span>Age</span>
        <span>170</span>
      </GnomeInfoListDetails>
      <GnomeInfoListDetails hairColor={convertColorsToHex("red")}>
        <span>Weight</span>
        <span>
          60 <span className="unit">KG</span>
        </span>
      </GnomeInfoListDetails>
      <GnomeInfoListDetails hairColor={convertColorsToHex("red")}>
        <span>Height</span>
        <span>
          90 <span className="unit">CM</span>
        </span>
      </GnomeInfoListDetails>
      <GnomeInfoListDetails hairColor={convertColorsToHex("red")}>
        <span>Hair color</span>
        <span>RED</span>
      </GnomeInfoListDetails>
    </GnomeInfoDetails>
    <div className="banner-footer" />
  </GnomeDetails>
);

export default DetailsInfo;

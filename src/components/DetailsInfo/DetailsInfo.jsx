// @flow
import React from "react";
import { convertColorsToHex } from "./../../functions";
import {
  GnomeDetails,
  Avatar,
  GnomeInfoDetails,
  GnomeInfoListDetails
} from "./DetailsInfoStyled";

type Props = {
  gnome: {
    id: number,
    name: string,
    thumbnail: string,
    age: number,
    weight: number,
    height: number,
    hair_color: string,
    professions: Array<string>,
    friends: Array<string>
  }
};

const DetailsInfo = ({ gnome }: Props) => (
  <GnomeDetails hairColor={convertColorsToHex(gnome && gnome.hair_color)}>
    <div className="banner" />
    <Avatar src={gnome && gnome.thumbnail}>
      <img
        src={gnome && gnome.thumbnail}
        alt={`avatar ${gnome && gnome.name}`}
      />
    </Avatar>
    <header className="description">
      <h2>{gnome && gnome.name}</h2>
      <div>
        {gnome.professions.length > 0
          ? gnome.professions.join(" || ")
          : "No Profession"}
      </div>
    </header>
    <GnomeInfoDetails>
      <GnomeInfoListDetails
        hairColor={gnome && convertColorsToHex(gnome.hair_color)}
      >
        <span>Age</span>
        <span>{gnome && gnome.age}</span>
      </GnomeInfoListDetails>
      <GnomeInfoListDetails
        hairColor={gnome && convertColorsToHex(gnome.hair_color)}
      >
        <span>Weight</span>
        <span>
          {gnome && Math.ceil(gnome.weight)} <span className="unit">KG</span>
        </span>
      </GnomeInfoListDetails>
      <GnomeInfoListDetails
        hairColor={gnome && convertColorsToHex(gnome.hair_color)}
      >
        <span>Height</span>
        <span>
          {gnome && Math.ceil(gnome.height)} <span className="unit">CM</span>
        </span>
      </GnomeInfoListDetails>
      <GnomeInfoListDetails
        hairColor={gnome && convertColorsToHex(gnome.hair_color)}
      >
        <span>Hair color</span>
        <span>{gnome && gnome.hair_color.toUpperCase()}</span>
      </GnomeInfoListDetails>
    </GnomeInfoDetails>
    <div className="banner-footer" />
  </GnomeDetails>
);

export default DetailsInfo;

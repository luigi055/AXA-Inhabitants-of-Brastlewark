// @flow
import React from "react";
import { convertColorsToHex } from "./../../functions";
import { GnomeCard, Avatar, GnomeInfo, GnomeInfoList } from "./CardStyled";

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
  },
  to: string
};

const Card = ({ gnome, to }: Props) => (
  <GnomeCard to={to} hairColor={convertColorsToHex(gnome && gnome.hair_color)}>
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
    <GnomeInfo>
      <GnomeInfoList hairColor={gnome && convertColorsToHex(gnome.hair_color)}>
        <span>Age</span>
        <span>{gnome && gnome.age}</span>
      </GnomeInfoList>
      <GnomeInfoList hairColor={gnome && convertColorsToHex(gnome.hair_color)}>
        <span>Weight</span>
        <span>
          {gnome && Math.ceil(gnome.weight)} <span className="unit">KG</span>
        </span>
      </GnomeInfoList>
      <GnomeInfoList hairColor={gnome && convertColorsToHex(gnome.hair_color)}>
        <span>Height</span>
        <span>
          {gnome && Math.ceil(gnome.height)} <span className="unit">CM</span>
        </span>
      </GnomeInfoList>
    </GnomeInfo>
    <div className="banner-footer" />
  </GnomeCard>
);

export default Card;

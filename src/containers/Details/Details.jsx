// @flow
import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import DetailsInfo from "./../../components/DetailsInfo/DetailsInfo";
import Card from "./../../components/Card/Card";
import SubTitle from "./../../components/SubTitle/SubTitle";
import EmptyMsg from "./../../components/EmptyMsg/EmptyMsg";
import {
  DetailsRow,
  DetailsWrapper,
  FriendsRow,
  LinkBack
} from "./DetailsStyled";

type Props = {
  gnomeURL: object,
  gnomes: Array<object>
};

const Details = ({ gnomeURL, gnomes }: Props) => {
  const selectedGnome =
    gnomes &&
    gnomes.find(
      gnome => gnomeURL === `${gnome.id}-${gnome.name.split(" ").join("-")}`
    );

  const friends =
    selectedGnome && selectedGnome.friends.map(friend => friend.toLowerCase());

  const renderFriends =
    gnomes &&
    gnomes.filter(gnome =>
      friends.some(friend => gnome.name.toLowerCase() === friend)
    );

  return (
    <DetailsWrapper>
      <Helmet>
        <title>BrastlewarkerS || {selectedGnome.name}</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <meta
          name="description"
          content={`${selectedGnome.name} is a gnome that has ${
            selectedGnome.hair_color
          } hair, it's ${selectedGnome.age} and weight ${selectedGnome.weight}`}
        />
      </Helmet>
      <DetailsRow>
        <LinkBack to="/" href="/">
          {"< Back"}
        </LinkBack>
        {selectedGnome && <DetailsInfo gnome={selectedGnome} />}
      </DetailsRow>
      <FriendsRow>
        <SubTitle text="Friends" />
        {renderFriends.length > 0 ? (
          renderFriends.map(friend => (
            <Card
              key={`${friend.id}`}
              gnome={friend}
              to={`${friend.id}-${friend.name.split(" ").join("-")}`}
            />
          ))
        ) : (
          <EmptyMsg>
            {selectedGnome.name.toUpperCase()} HAS NOT FRIENDS :(
          </EmptyMsg>
        )}
      </FriendsRow>
    </DetailsWrapper>
  );
};

const mapStateToProps = state => ({
  gnomes: state.gnomes
});

export default connect(mapStateToProps)(Details);

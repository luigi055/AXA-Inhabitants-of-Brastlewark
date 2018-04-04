// @flow
import React from "react";
import { connect } from "react-redux";
import DetailsInfo from "./../../components/DetailsInfo/DetailsInfo";
import Card from "./../../components/Card/Card";
import SubTitle from "./../../components/SubTitle/SubTitle";
import EmptyMsg from "./../../components/EmptyMsg/EmptyMsg";
import { DetailsRow, DetailsWrapper } from "./DetailsStyled";

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
      <DetailsRow>
        {selectedGnome && <DetailsInfo gnome={selectedGnome} />}
      </DetailsRow>
      <DetailsRow>
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
      </DetailsRow>
    </DetailsWrapper>
  );
};

const mapStateToProps = state => ({
  gnomes: state.gnomes
});

export default connect(mapStateToProps)(Details);

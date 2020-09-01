import React from 'react';

const Pokemon = (props) => {
  const { match } = props;
  const { params } = match;
  const { pokeId } = params;
  return <div>{`This is a pokemon page of id ${pokeId}`}</div>;
};

export default Pokemon;

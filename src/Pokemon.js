import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { grey } from '@material-ui/core/colors';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import mockData from './mockData';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: '40px auto',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  img: {
    textAlign: 'center',
  },
  cap: {
    textTransform: 'capitalize',
  },
  avatar: {
    width: '60px',
    height: '60px',
    backgroundColor: grey[200],
  },
  content: {
    backgroundColor: '#fafafa',
    padding: '15px',
  },
  typeList: {
    marginLeft: '20px',
  },
}));

const Pokemon = (props) => {
  const { match } = props;
  const { params } = match;
  const { pokeId } = params;

  const [pokemon, setPokemon] = useState(mockData[`${pokeId}`]);

  const classes = useStyles();
  const { name, id, species, height, weight, types, sprites } = pokemon;
  const fullImgUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
  const { front_default } = sprites;

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.content}
        avatar={
          <Avatar className={classes.avatar}>
            <img src={front_default} alt='pokemon_pic' />
          </Avatar>
        }
        title={
          <Typography variant='h4' component='h1' className={classes.cap}>
            {`${id}. ${name}`}
          </Typography>
        }
      />
      <CardMedia component='div'>
        <div className={classes.img}>
          <img src={fullImgUrl} alt={name} height='300px' width='auto' />
        </div>
      </CardMedia>
      <CardContent className={classes.content}>
        <Typography variant='h4' component='h2'>
          Pokemon Info
        </Typography>
        <Typography>
          {'Species: '}
          <Link href={species.url}>{species.name}</Link>
        </Typography>
        <Typography>Height: {height}</Typography>
        <Typography gutterBottom>Weight: {weight}</Typography>
        <Typography variant='h6'>Types:</Typography>
        {types.map((typeInfo) => {
          const { type } = typeInfo;
          const { name } = type;
          return (
            <Typography
              key={name}
              className={classes.typeList}
            >{`- ${name}`}</Typography>
          );
        })}
      </CardContent>
      <CardActions className={classes.content}>
        <Button size='small' color='primary' variant='contained'>
          Back To Pokedex
        </Button>
      </CardActions>
    </Card>
  );
};

export default Pokemon;

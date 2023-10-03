import React from 'react';

import { CardActionArea, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

import { PeopleModel } from '../../models';

type SWCardProps = {
  data: PeopleModel[];
  onCardClick: (name: string) => void;
};

const SWCards: React.FC<SWCardProps> = ({ data, onCardClick }) => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="top" spacing={2} mt={2}>
      {data.map((item, index) => {
        return (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ borderColor: '#fff5d9', border: 1 }}>
              <CardActionArea
                onClick={() => {
                  onCardClick(item.name);
                }}
              >
                <CardMedia component="img" height={200} image="https://picsum.photos/500" alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" align="center">
                    {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SWCards;

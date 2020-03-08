import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

function Property(property) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <HomeWorkIcon fontSize="large" />
      </ListItemAvatar>
      <ListItemText
        primary={property.name}
        secondary={<React.Fragment>Adress: {property.address}</React.Fragment>}
      />
    </ListItem>
  );
}

export default Property;

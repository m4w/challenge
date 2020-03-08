import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import StoreIcon from '@material-ui/icons/Store';
import {styled} from '@material-ui/core';

const StyledSpan = styled('span')({
  display: 'block'
});

function Shop(shop) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <StoreIcon fontSize="large" />
      </ListItemAvatar>
      <ListItemText
        primary={shop.name}
        secondary={
          <React.Fragment>
            <StyledSpan>Adress: {shop.address}</StyledSpan>
            {shop.phone && <StyledSpan>Tel.: {shop.phone}</StyledSpan>}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}

export default Shop;

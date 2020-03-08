import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';
import {styled} from '@material-ui/core';

const StyledSpan = styled('span')({
  display: 'block'
});

function Agent(agent) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <FaceIcon fontSize="large" />
      </ListItemAvatar>
      <ListItemText
        primary={agent.name}
        secondary={
          <React.Fragment>
            <StyledSpan>Shop: {agent.shop}</StyledSpan>
            <StyledSpan>Tel.: {agent.phone}</StyledSpan>
          </React.Fragment>
        }
      />
    </ListItem>
  );
}

export default Agent;

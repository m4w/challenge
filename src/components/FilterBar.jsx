import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import FilterCheckbox from 'components/FilterCheckbox';

function FilterBar() {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="Agents"
          control={<FilterCheckbox filterType="agents" />}
          label="Agents"
          labelPlacement="start"
        />
        <FormControlLabel
          value="Shops"
          control={<FilterCheckbox filterType="shops" />}
          label="Shops"
          labelPlacement="start"
        />
        <FormControlLabel
          value="Properties"
          control={<FilterCheckbox filterType="properties" />}
          label="Properties"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
  );
}

export default FilterBar;

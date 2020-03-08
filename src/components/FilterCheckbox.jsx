import React, {useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

import {useStateValue} from 'provider/StateProvider';

function FilterCheckbox({filterType}) {
  const [checked, setChecked] = useState(true);
  // eslint-disable-next-line
  const [{filter}, dispatch] = useStateValue();

  const handleChange = e => {
    const checked = e.target.checked;
    setChecked(checked);
    const action = {type: 'FILTER', filter: {[filterType]: checked}};
    dispatch(action);
  };
  return <Checkbox color="primary" checked={checked} onChange={handleChange} />;
}

FilterCheckbox.propTypes = {
  filterType: PropTypes.string.isRequired
};

export default FilterCheckbox;

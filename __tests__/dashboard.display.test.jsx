// Testing elements coming from DB displaying on dashboard
import React from 'react';
import Dashboard from '../src/components/Dashboard';
import {shallow} from 'enzyme';

test('Render dashboard with a bootstrap row and column', () => {

  const component = shallow(
		<Dashboard />
  );

  // check if it matches snapshot of rendered item
	expect(component).toMatchSnapshot();
});

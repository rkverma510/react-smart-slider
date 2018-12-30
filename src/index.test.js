import React from 'react';
import ReactDOM from 'react-dom';
import SmartSlider from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SmartSlider />, div);
  ReactDOM.unmountComponentAtNode(div);
});

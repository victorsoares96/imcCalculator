/**
 * @format
 */

import 'src/app/calculadora/node_modules/react-native';
import React from 'src/app/calculadora/node_modules/react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

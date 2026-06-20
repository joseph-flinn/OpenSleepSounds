import { render } from '@testing-library/react-native';
import React from 'react';
import { AudioControl } from '../AudioControl';

describe('AudioControl', () => {
  it('renders without crashing', () => {
    const { toJSON } = render(<AudioControl />);
    expect(toJSON()).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import './adapter';

import Index from '../src/index';

describe('Index Component', () => {
  it('will match snapshot', () => {
    const component = renderer.create(<Index />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

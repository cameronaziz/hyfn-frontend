import React from 'react';
import renderer from 'react-test-renderer';
import { ApolloProvider } from 'react-apollo';
import { shallow } from 'enzyme';
import { client } from './apollo';
import './adapter';

import App from '../src/components/App';

describe('App Component', () => {
  it('will match snapshot', () => {
    const component = renderer.create(<ApolloProvider client={client}><App /></ApolloProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Execute selectAd changes state', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().selectAd(1);
    wrapper.update();
    expect(wrapper.state('adSelected')).toEqual('1');
  });
});

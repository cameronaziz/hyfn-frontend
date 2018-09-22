import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import { ApolloProvider } from 'react-apollo';
import { client } from './apollo';
import * as mocks from './mocks';
import Ads from '../src/components/Ads';
import App from '../src/components/App';
import './adapter';

describe('Ads Component', () => {
  const appComponent = (
    <MockedProvider addTypename={false} mocks={[mocks.getAds]}>
      <App />
    </MockedProvider>
  );

  const appWrapper = mount(appComponent);
  const app = appWrapper.find(App).instance();
  const selectAd = jest.spyOn(app, 'selectAd');

  const adsComponent = (
    <MockedProvider addTypename={false} mocks={[mocks.getAds]}>
      <Ads selectAd={selectAd} />
    </MockedProvider>
  );

  it('will match snapshot', () => {
    const renderedComponent = renderer.create(
      <ApolloProvider client={client}>
        <Ads adSelected={undefined} selectAd={selectAd} />
      </ApolloProvider>,
    );
    const tree = renderedComponent.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('will load API', () => {
    const wrapper = mount(adsComponent);
    expect(wrapper.contains(<div>Loading</div>)).toEqual(true);
  });

  it('will render data', async () => {
    const wrapper = mount(adsComponent);
    expect(wrapper.find('.ad-row').exists()).toEqual(false);
    await new Promise(resolve => setTimeout(resolve));
    wrapper.update();
    expect(wrapper.find('.ad-row').exists()).toEqual(true);
  });

  it('will click and execute adSelected', async () => {
    const adsWrapper = mount(adsComponent);
    await new Promise(resolve => setTimeout(resolve));
    adsWrapper.update();
    const firstElement = adsWrapper.find('.ad-row').first();
    firstElement.first().simulate('click');
    await new Promise(resolve => setTimeout(resolve));
    appWrapper.update();
    expect(selectAd).toHaveBeenCalled();
  });
});

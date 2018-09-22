import * as queries from '../../src/queries';

const mocks = [{
  request: {
    query: queries.getAds,
    variables: {},
  },
  result: {
    data: {
      adsDetails: [{
        id: 1,
        name: '123',
        status: 'INACTIVE',
        remoteId: '123',
        impressions: '123',
        reach: 123,
        frequency: 1.0413449389302,
        cpm: 12.30131445905,
        spend: 182.49,
        ctr: 0.87630603303,
        costPerInlineLinkClick: 3.0415,
        goal: 3,
        linkClick: 60,
        costPerGoal: 60.83,
        offsiteConversion: 123,
      }],
    },
  },
}];

export default mocks;

import gql from 'graphql-tag';

const getAds = gql`
  {
    adsDetails {
      id
      remoteId
      name
      status
      name
      frequency
      spend
      cpm
      ctr
      costPerInlineLinkClick
      goal
      linkClick
      costPerGoal
      offsiteConversion
      reach
    }
  }
`;


export default getAds;
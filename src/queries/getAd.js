import gql from 'graphql-tag';

const getAd = gql`
  query Ad($id: String!) {
    ad(id: $id){
      id
      remoteId
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
      name
      status
      reach
    }
  }
`;

export default getAd;
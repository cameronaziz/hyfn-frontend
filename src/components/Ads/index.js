import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Chip } from '@material-ui/core';
import { graphql } from 'react-apollo';
import { getAds } from '../../queries';
import styles from './styles';

const Ads = ({
  adSelected, classes, selectAd, data,
}) => {
  if (data.loading) { return <div>Loading</div>; }
  return (
    <Fragment>
      <h1>Ads</h1>
      <Paper className={classes.root}>
        <div className={classes.table}>
          <div className={classes.tableHeader}>
            <div className={classes.stickyHeaderCell}>Name</div>
            <div className={classes.tableHeaderCell}>Status</div>
            <div className={classes.tableHeaderCell}>Frequency</div>
            <div className={classes.tableHeaderCell}>Spend</div>
            <div className={classes.tableHeaderCell}>CPM</div>
            <div className={classes.tableHeaderCell}>CTR</div>
            <div className={classes.tableHeaderCell}>Cost per Inline Link Click</div>
            <div className={classes.tableHeaderCell}>Goal</div>
            <div className={classes.tableHeaderCell}>Link Click</div>
            <div className={classes.tableHeaderCell}>Cost per Goal</div>
            <div className={classes.tableHeaderCell}>Offsite Conversion</div>
            <div className={classes.tableHeaderCell}>Reach</div>
          </div>
          <div className={classes.tableBody}>
            {data.adsDetails && data.adsDetails.map(row => (
              <div
                tabIndex={-1}
                role="button"
                key={row.remoteId}
                className={classes.tableRow}
                selected={adSelected === row.id}
                onClick={() => {
                  selectAd(row.id);
                }}
                onKeyPress={() => {
                  selectAd(row.id);
                }}
              >
                <div className={classes.stickyCell}>
                  {row.name}
                </div>
                <div className={classes.tableCell}>
                  <Chip
                    color={
                      row.status === 'ACTIVE' ? 'primary' : 'secondary'
                    }
                    label={row.status}
                  />
                </div>
                <div className={classes.tableCell}>{row.frequency}</div>
                <div className={classes.tableCell}>{row.spend}</div>
                <div className={classes.tableCell}>{row.cpm}</div>
                <div className={classes.tableCell}>{row.ctr}</div>
                <div className={classes.tableCell}>{row.costPerInlineLinkClick}</div>
                <div className={classes.tableCell}>{row.goal}</div>
                <div className={classes.tableCell}>{row.linkClick}</div>
                <div className={classes.tableCell}>{row.costPerGoal}</div>
                <div className={classes.tableCell}>{row.offsiteConversion}</div>
                <div className={classes.tableCell}>{row.reach}</div>
              </div>
            ))}
          </div>
        </div>
      </Paper>
    </Fragment>
  );
};

Ads.propTypes = {
  selectAd: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    table: PropTypes.string.isRequired,
    tableHeader: PropTypes.string.isRequired,
    stickyHeaderCell: PropTypes.string.isRequired,
    tableHeaderCell: PropTypes.string.isRequired,
    tableBody: PropTypes.string.isRequired,
    tableRow: PropTypes.string.isRequired,
    tableCell: PropTypes.string.isRequired,
    stickyCell: PropTypes.string.isRequired,
  }).isRequired,
  adSelected: PropTypes.string,
};

Ads.defaultProps = {
  adSelected: undefined,
};

export default graphql(getAds)(withStyles(styles)(Ads));

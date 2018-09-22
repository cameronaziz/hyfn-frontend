import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from '@material-ui/core';
import { graphql } from 'react-apollo';
import { getAds } from '../../queries';
import styles from './styles';

const Ads = ({
  adSelected, classes, selectAd, data,
}) => {
  if (data.loading) { return <div>Loading</div>; }
  return (
    <Fragment>
      <h1>Data</h1>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={classes.stickyCol}>Name</TableCell>
              <TableCell className={classes.col}>Remote ID</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Frequency</TableCell>
              <TableCell>Spend</TableCell>
              <TableCell>CPM</TableCell>
              <TableCell>CTR</TableCell>
              <TableCell>Cost per Inline Link Click</TableCell>
              <TableCell>Goal</TableCell>
              <TableCell>Link Click</TableCell>
              <TableCell>Cost per Goal</TableCell>
              <TableCell>Offsite Conversion</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Reach</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.adsDetails && data.adsDetails.map(row => (
              <TableRow
                key={row.id}
                className="ad-row"
                selected={adSelected === row.id}
                onClick={() => {
                  selectAd(row.id);
                }}
              >
                <TableCell className={classes.stickyCol}>
                  {row.name}
                </TableCell>
                <TableCell>{row.remoteId}</TableCell>
                <TableCell>
                  <Chip
                    color={
                      row.status === 'ACTIVE' ? 'primary' : 'secondary'
                    }
                    label={row.status}
                  />
                </TableCell>
                <TableCell>{row.frequency}</TableCell>
                <TableCell>{row.spend}</TableCell>
                <TableCell>{row.cpm}</TableCell>
                <TableCell>{row.ctr}</TableCell>
                <TableCell>{row.costPerInlineLinkClick}</TableCell>
                <TableCell>{row.goal}</TableCell>
                <TableCell>{row.linkClick}</TableCell>
                <TableCell>{row.costPerGoal}</TableCell>
                <TableCell>{row.offsiteConversion}</TableCell>
                <TableCell>{row.reach}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Fragment>
  );
};

Ads.propTypes = {
  selectAd: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    table: PropTypes.string.isRequired,
    tableHead: PropTypes.string.isRequired,
    stickyCol: PropTypes.string.isRequired,
    tableRow: PropTypes.string.isRequired,
  }).isRequired,
  adSelected: PropTypes.string,
};

Ads.defaultProps = {
  adSelected: undefined,
};

export default graphql(getAds)(withStyles(styles)(Ads));

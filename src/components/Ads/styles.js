const styles = theme => ({
  root: {
    width: '80%',
    margin: '0 auto',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    paddingBottom: '10px',
  },
  table: {
    width: '100%',
    display: 'table',
  },
  tableHeader: {
    display: 'table-header-group',
    backgroundColor: '#ccc',
    fontSize: '18px',
    whiteSpace: 'nowrap',
  },
  tableHeaderCell: {
    display: 'table-cell',
    padding: '10px',
    textAlign: 'justify',
    borderBottom: '1px solid black',
  },
  stickyHeaderCell: {
    display: 'table-cell',
    padding: '10px',
    textAlign: 'justify',
    borderBottom: '1px solid black',
    fontSize: '18px',
    whiteSpace: 'nowrap',
    left: 0,
    position: 'sticky',
    backgroundColor: '#ccc',
  },
  tableBody: {
    display: 'table-row-group',
  },
  tableRow: {
    display: 'table-row',
  },
  tableCell: {
    padding: '0 10px',
    display: 'table-cell',
    borderTop: '10px solid transparent'
  },
  stickyCell: {
    padding: '0 10px',
    display: 'table-cell',
    left: 0,
    position: 'sticky',
    backgroundColor: '#fff',
  },
});

export default styles;

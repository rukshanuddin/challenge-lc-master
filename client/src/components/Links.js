import React, { PureComponent, Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { railsActions } from "redux-rails";
import clsx from "clsx";
import { AutoSizer, Column, Table } from "react-virtualized";
import {
  CircularProgress,
  Paper,
  Typography,
  TableCell,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import _ from "lodash";


const styles = (theme) => ({
  flexContainer: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
  },
  table: {
    "& .ReactVirtualized__Table__headerRow": {
      flip: false,
      paddingRight: theme.direction === "rtl" ? "0 !important" : undefined,
    },
  },
  tableRow: {
    cursor: "pointer",
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: "initial",
  },
});

class MuiVirtualizedTable extends PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48,
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={
          (columnIndex != null && columns[columnIndex].numeric) || false
            ? "right"
            : "left"
        }
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns, classes } = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(
          classes.tableCell,
          classes.flexContainer,
          classes.noClick
        )}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? "right" : "left"}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const {
      classes,
      columns,
      rowHeight,
      headerHeight,
      ...tableProps
    } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: "inherit",
            }}
            headerHeight={headerHeight}
            className={classes.table}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={(headerProps) =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired,
    })
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

function createData(name, link, language, category, section, blurb) {
  return {
    name,
    link,
    language,
    category,
    section,
    blurb,
  };
}

class Links extends Component {
  static propTypes = {
    fetchTwit: PropTypes.func,

    links: PropTypes.array,

    loading: PropTypes.bool,
  };

  componentDidMount() {
    this.props.fetchLinks();
  }
  render() {
    const { classes, loading, links } = this.props;
    const rows = links.map((link) =>
      createData(
        link.attributes.name,
        link.attributes.link,
        link.attributes.language,
        link.attributes.category,
        link.attributes.section,
        link.attributes.blurb
      )
    );
    if (loading) {
      return (
        <div className={classes.progress}>
          <CircularProgress size={32} />
        </div>
      );
    }

    return (
      <Paper
        square={true}
        style={{
            align: "center",
          margin: "auto",
          padding: "1em",
          marginTop: "1em",
          height: "100%",
          width: "95%",
        }}
      >
        <Typography variant="h2" component="h1">
          The Big-Ass List
        </Typography>
        <Paper style={{ margin: "auto", width: "75%" }}>
          <Typography>A list of all available resources</Typography>
        </Paper>
        <Paper
          square={true}
          style={{ margin: "auto", height: 600, width: "75%" }}
        >
          <VirtualizedTable
            rowCount={rows.length}
            rowGetter={({ index }) => rows[index]}
            columns={[
              {
                dataKey: "name",
                label: "Name",
                width: 375,
              },
              {
                dataKey: "link",
                label: "Link",
                width: 375,
              },
              {
                dataKey: "language",
                label: "Languages/Frameworks",
                width: 120,
              },
              {
                dataKey: "category",
                label: "Category",
                width: 70,
              },
              {
                dataKey: "section",
                label: "Section",
                width: 70,
              },
            ]}
          />
        </Paper>
      </Paper>
    );
  }
}
const mapStateToProps = (state) => ({
  links: state.Links.models,

  loading: state.Links.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchLinks: () => {
    dispatch(
      railsActions.index({
        resource: "Links",
      })
    );
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(Links);

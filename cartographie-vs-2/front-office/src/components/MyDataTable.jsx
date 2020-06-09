import React, {Component} from 'react';
import DataTable, { createTheme } from 'react-data-table-component';

// const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' } ...];
const current_year = new Date().getFullYear();
const columns = [
  {
    name: 'Provinces',
    selector: 'label',
    sortable: true,
    width : "150px"
  },
  {
    name: 'Total des cas',
    selector: 'total',
    sortable: true,
    width : "130px"
  },
  {
    name: current_year,
    selector: 'current_year',
    sortable: true,
    width : "100px"
  },
  {
    name: current_year-1,
    selector: 'one_year_ago',
    sortable: true,
    width : "100px"
  },
  {
    name: current_year-2,
    selector: 'two_year_ago',
    sortable: true,
    width : "100px"
  },
];


class MyDataTable extends Component {
    
  render() {
    return (
      <DataTable
        title="REPUBLIQUE DEMOCRATIQUE DU CONGO"
        columns={columns}
        data={this.props.data}
        pagination={true}
        defaultSortField="label"
        theme="boostrap"
      />
    )
  }
};

export default MyDataTable;
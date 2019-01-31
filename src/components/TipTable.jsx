import React, { Component } from 'react';
import { Table } from 'reactstrap';
import TipRow from './TipRow';

export class TipTable extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn('onRemove not defined')
  };

  render() {
    const { data } = this.props;
    const rows = data.map(tip => (
      <TipRow key={tip.id} tip={tip} onRemove={this.props.onRemove} />
    ));

    return (
      <Table>
        <thead>
          <th>Text</th>
          <th>Edit</th>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    );
  }
}

export default TipTable;

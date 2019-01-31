import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

export class TipRow extends Component {
  static defaultProps = {
    tip: {
      id: 0,
      text: 'Null'
    }
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  handleRemove = () => {
    const { tip, onRemove } = this.props;
    onRemove(tip.id);
  };

  render() {
    const { id, text } = this.props.tip;

    return (
      <tr>
        <td>
          {this.props.edit === true ? (
            <Input type="text" name="text" defaultValue={text} />
          ) : (
            this.props.tip.text
          )}
        </td>
        <td>
          <Button outline color="danger" onClick={this.handleRemove}>
            삭제
          </Button>
        </td>
      </tr>
    );
  }
}

export default TipRow;

import React, { Component } from "react";
import { Button, Input, Table } from "reactstrap";
import Axios from "axios";

export class Tips extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tips: []
    };
  }

  componentDidMount() {
    Axios.get(`http://kimdex.ssiat.xyz/api/tips`).then(res => {
      const tips = res.data;
      this.setState({ tips });
      console.log(tips);
    });
  }

  render() {
    return (
      <Table>
        <thead>
          <th>#</th>
          <th>Text</th>
          <th>Edit</th>
        </thead>
        <tbody>
          {this.state.tips.map(tip => (
            <DataRow edit tip={tip} />
          ))}
        </tbody>
      </Table>
    );
  }
}

class DataRow extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <tr>
        <th scope="row">{this.props.tip.id}</th>
        <td>
          {this.props.edit === true ? (
            <Input type="text" name="text" defaultValue={this.props.tip.text} />
          ) : (
            this.props.tip.text
          )}
        </td>
        <td>
          <Button outline color="primary" className="mr-1">
            수정
          </Button>
          <Button outline color="danger">
            삭제
          </Button>
        </td>
      </tr>
    );
  }
}

class EditBox extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.id}</th>
        <td>
          <Input type="text" name="text" />
        </td>
        <td>
          <Button outline color="primary" className="mr-1">
            적용
          </Button>
          <Button outline color="danger">
            취소
          </Button>
        </td>
      </tr>
    );
  }
}

export default Tips;

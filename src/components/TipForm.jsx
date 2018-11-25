import React, { Component } from "react";
import { Button, Col, Input, Row } from "reactstrap";

export class TipForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onCreate(this.state);
    this.setState({ text: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Row>
          <Col>
            <Input placeholder="새로운 팁을 입력해주세요." value={this.state.text} onChange={this.handleChange} name="text" />
          </Col>
          <Col className="align-items-center">
            <Button type="submit" color="primary" onClick={this.handleCreate}>
              생성
            </Button>
          </Col>
        </Row>
      </form>
    );
  }
}

export default TipForm;

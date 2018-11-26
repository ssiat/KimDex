import React, { Component } from "react";
import {
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Row
} from "reactstrap";
import Axios from "axios";

export class TipForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      delayTime: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onCreate(this.state);
    this.setState({ text: "" });
  };

  handleSetDelayTime = event => {
    event.preventDefault();
    console.log(this.state)
    Axios.post("http://kimdex.ssiat.xyz/bot/setting/delaytime", {
      time: this.state.delayTime
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Row>
            <Col xs="10">
              <Input
                placeholder="새로운 팁을 입력해주세요."
                value={this.state.text}
                onChange={this.handleChange}
                name="text"
              />
            </Col>
            <Col xs="2" className="align-items-center">
              <Button type="submit" color="primary" onClick={this.handleCreate}>
                생성
              </Button>
            </Col>
          </Row>
        </form>
        <form>
          <Row>
            <Col xs="10">
              <InputGroup>
                <Input
                  placeholder="지연 시간"
                  value={this.state.delayTime}
                  onChange={this.handleChange}
                  name="delayTime"
                />
                <InputGroupAddon addonType="append">분</InputGroupAddon>
              </InputGroup>
            </Col>
            <Col xs="2" className="align-items-center">
              <Button type="submit" color="primary" onClick={this.handleSetDelayTime}>
                적용
              </Button>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

export default TipForm;

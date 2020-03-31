import React, { Component } from "react";
import CustomSelect from "../../shared/Select";
import { connect } from "react-redux";
import {getUsers} from '../../state/data'
import {Row,Col,Layout} from 'antd';

class Dashboard extends Component {
  
  onFocus=()=>{
    console.log("focus");
  }
  onChange=(value)=>{
    this.props.getUsers(value);
  }
  onBlur=()=>{
    console.log("blur");
  }
  onSearch=(value)=>{
    console.log("search:",value);
  }


  render() {
    const { Header, Footer, Sider, Content } = Layout;

    const usersList = this.props.users.items;
    const usersIntheCity =
      usersList != undefined
        ? this.props.users.items.map((user, index) => {
            return (
              <Row>
                <Col span={24}>
                  <a key={index} href={user.html_url} target="_blank">
                    {user.full_name}
                  </a>
                </Col>
              </Row>
            );
          })
        : null;

    return (
      <div>
        <Layout>
        <Header>
        <CustomSelect onChange={this.onChange} 
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onSearch={this.onSearch}
         cities={this.props.cities}
         placeHolder="Select a City"></CustomSelect>         
         </Header>
         <Content>{usersIntheCity}</Content>
         </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.data.cities,
    users:state.data.users
  };
};
export default connect(mapStateToProps,{getUsers})(Dashboard);

import { Button } from "antd";
import React from "react";
import "./Header.css";
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
const { Search } = Input;

export default class Header extends React.Component {
  root = () => {
    this.props.history.push("/");
  };

  explore = () => {
    this.props.history.push("/products");
  };

  register = () => {
    this.props.history.push("/register");
  };

  login = () => {
    this.props.history.push("/login");
  };

  logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="header">
        {/* Shows Qkart title image */}
        <div className="header-title" onClick={this.root}>
          <img src="icon.svg" alt="QKart-icon"></img>
        </div>
        <Search placeholder="Search" onChange={(e)=>{this.props.debounceSearch(e)}} onSearch={(e)=>{this.props.Search(e)}}  enterButton />
        {/* TODO: CRIO_TASK_MODULE_PRODUCTS - Display any child element passed to the component*/}

        {/* Display links based on if the user's logged in or not */}
        <div className="header-action">
          {localStorage.getItem("username") ? (
            <>
              <img
                src="avatar.png"
                alt="profile"
                className="profile-image"
              ></img>

              <div className="header-info">
                {localStorage.getItem("username")}
              </div>

              <Button type="primary" onClick={this.logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <div className="header-link" onClick={this.explore}>
                Explore
              </div>
              <div className="header-link" onClick={this.login}>
                Login
              </div>

              <div className="header-link">
                <Button type="primary" onClick={this.register}>
                  Register
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

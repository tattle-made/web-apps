import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload,
  faDownload,
  faSync,
  faTrashAlt,
  faCheck,
  faEdit
} from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { textFilter } from "react-bootstrap-table2-filter";

//actions
import { fetchUsers } from "../../redux/actions/fetchData";
import { userDelete, selectedUser } from "../../redux/actions/user";

//components
import BreadCrumb from "../atomic-components/BreadCrumb";
import Table from "../components/Table";
import PrimaryActionUser from "../components/PrimaryActionUser";

// action control
import AccessControl from "../components/AccessControl";

// socket io
import io from "socket.io-client";

//connect to server
const socket = io("http://localhost:3001/");

class UsersTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: true,
      refresh: false
    };

    this.refresh = this.refresh.bind(this);
    this.actionIconsFormatter = this.actionIconsFormatter.bind(this);
  }

  actionIconsFormatter(cell, row, rowIndex, props) {
    console.log("props actonformatter", props);
    return (
      <div>
        <AccessControl
          allowedPermissions={["user:canView"]}
          text={() => this.dothis()}
          renderNoAccess={() => console.log("u dont have permission")}
        >
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="mr-2"
            onClick={() => {
              props.userDelete(row.id, row.id);
            }}
          />
        </AccessControl>
        <FontAwesomeIcon
          icon={faEdit}
          className="mr-2"
          onClick={() => {
            props.selectedUser(row);
            props.history.push(`/users/update/${row.id}`);
          }}
        />
        <FontAwesomeIcon icon={faCheck} />
      </div>
    );
  }

  componentDidMount() {
    console.log("mounted");
    this.props.fetchUsers();
    this.setState({
      users: this.props.users
    });
    // SOCKET IO
    // so when new data is received the page will refresh automatically.
    socket.on("users/newData", value => {
      console.log("new Data received", value.name);
      this.refresh();
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log("will recieve new props", nextProps);
    if (nextProps.users !== this.props.users) {
      this.setState({
        users: nextProps.users.data
      });
    }
    if (nextProps.refresh !== this.props.refresh) {
      this.setState({
        refresh: nextProps.refresh
      });
      this.refresh();
    }
  }
  refresh() {
    console.log("refreshing");
    this.props.fetchUsers();
  }

  //TODO : change this life cycle method.

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.fetch) {
  //     return {
  //       data: nextProps.fetch.data,
  //       loading: nextProps.fetch.loading
  //     };
  //   }
  //   else return null;
  // }

  // componentDidUpdate(prevProps, prevState){
  //   if(prevProps.fetch !== )
  // // }

  // rowEvents() {
  //   console.log("row");
  // }

  render() {
    const columns = [
      {
        dataField: "username",
        text: "Username"
        // sort: true
      },
      {
        dataField: "email",
        text: "Email",
        formatter: this.previewFormatter
      },
      {
        dataField: "role",
        text: "Role",
        // sort: true,
        filter: textFilter(),
        headerAlign: "center"
      },
      {
        dataField: "posts",
        text: "Posts",
        // sort: true,
        filter: textFilter(),
        headerAlign: "center"
      },
      {
        dataField: "actions",
        text: "Actions",
        // sort: true
        formatter: this.actionIconsFormatter,
        formatExtraData: this.props
      }
    ];

    console.log("hello state", this.state.users);
    console.log("hello props", this.props.users);
    return (
      <div className="container">
        {/* {//the color of posts in heading 2 is black , and in spec file posts title color is # #060D42;} */}
        <BreadCrumb />
        <PrimaryActionUser
          faUpload={eval(faUpload)}
          faDownload={eval(faDownload)}
          faSync={eval(faSync)}
          refresh={this.refresh}
        />
        <Table data={this.state.users} columns={columns} page={1} count={10} />
      </div>
    );
  }
}

UsersTable.propTypes = {
  fetchUsers: PropTypes.func,
  userDelete: PropTypes.func
};

const mapStateToProps = state => ({
  users: state.users,
  refresh: state.refresh
});

const prev = {
  width: "300px"
};

const UsersTablePage = withRouter(
  connect(
    mapStateToProps,
    { fetchUsers, userDelete, selectedUser }
  )(UsersTable)
);

export default UsersTablePage;
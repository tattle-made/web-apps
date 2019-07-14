import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload,
  faDownload,
  faSync,
  faTrashAlt,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import overlayFactory from "react-bootstrap-table2-overlay";
import axios from "axios";

//actions
import { fetchPosts } from "../actions/fetchData";
import { postDelete } from "../actions/post";

//components
import { HeadingTwo } from "../reusableComponents/text/HeadingTwo";
import { Card } from "./Card";
// action control
import AccessControl from "./accessControl";

// socket io
import io from "socket.io-client";

//todo import from an external file;
const SHELL_SERVER_API_ENDPOINT = "http://13.233.110.23:8080/posts";

//connect to server
const socket = io("http://localhost:3001/");

class PostsTable extends Component {
  constructor(props) {
    super(props);
    /**
     * consists of 3 state:
     * 1. data
     * 2. loading
     * 3. columns
     */
    this.state = {
      data: [],
      loading: true,
      columns: [
        {
          dataField: "type",
          text: "Title"
          // sort: true
        },
        {
          dataField: "filename",
          text: "Description",
          formatter: this.previewFormatter,
          events: {
            onClick: (e, column, columnIndex, row, rowIndex) => {
              // console.log("events");
              // console.log(column);
              // console.log(columnIndex);
              // console.log(row);
              // console.log(rowIndex);
              const url = `/posts/${row.id}`;
              this.props.history.push(url);
            }
          }
        },
        {
          dataField: "tags",
          text: "Tags",
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
      ]
    };

    this.refresh = this.refresh.bind(this);
  }

  previewFormatter(cell, row) {
    console.log("row");
    console.log(row);
    console.log("cell");
    console.log(cell);
    if (row.type == "image") {
      return (
        <div className="card" style={prev}>
          <img
            src={`https://firebasestorage.googleapis.com/v0/b/crowdsourcesocialposts.appspot.com/o/bot-posts%2F${cell}?alt=media&token=88192814-45bb-4302-b409-b5c26e90390b`}
            alt="preview"
          />
        </div>
      );
    } else if (row.type == "video") {
      return (
        // <video
        //   // src={`https://firebasestorage.googleapis.com/v0/b/crowdsourcesocialposts.appspot.com/o/bot-posts%2F${cell}?alt=media&token=88192814-45bb-4302-b409-b5c26e90390b`}
        //   // src={"https://youtu.be/DBXH9jJRaDk"}
        // />
        <div className="card" style={prev}>
          <iframe src="https://www.youtube.com/embed/hZFNVj505HQ" />
        </div>
      );
    } else if (row.type == "text") {
      return (
        <div className="card" style={prev}>
          <div className="card-text">
            Mollit anim Lorem quis nulla mollit officia ad. Do do aute dolore
            incididunt pariatur enim cupidatat reprehenderit quis eu non. Est
            incididunt commodo enim voluptate mollit sit reprehenderit elit
            proident aute non et. Consectetur aliquip tempor anim excepteur nisi
            consectetur sint pariatur. Do veniam pariatur enim aliquip ut elit
            nulla ad ad et deserunt do reprehenderit minim. Pariatur culpa
            adipisicing nulla occaecat aliquip cupidatat labore nisi excepteur
            mollit excepteur.
          </div>
        </div>
      );
    }
  }

  actionIconsFormatter(cell, row, rowIndex, props) {
    // console.log("props", props);
    return (
      <div>
        <AccessControl
          allowedPermissions={["user:canView"]}
          text={() => this.dothis()}
          renderNoAccess={() => console.log("u dont have permission")}
        >
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="mr-5"
            onClick={() => {
              props.postDelete(row.id);
              console.log("delete");
            }}
          />
        </AccessControl>
        <FontAwesomeIcon icon={faCheck} />
      </div>
    );
  }

  componentDidMount() {
    // console.log("mounted");
    // console.log("props", this.props);
    console.log("data", this.props.fetch.data);
    this.props.fetchPosts();

    // SOCKET IO
    // so when new data is received the page will refresh automatically.
    socket.on("posts/newData", value => {
      console.log("new Data received", value.name);
      this.refresh();
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fetch.data !== this.props.fetch.data) {
      this.setState({
        data: nextProps.fetch.data
      });
    }
  }

  refresh() {
    console.log("refreshing");
    this.props.fetchPosts();
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
    // const rowEvents = {
    //   onClick: (e, row, rowIndex) => {
    //     // console.log("row Event");
    //     // console.log(e);
    //     // console.log(row);
    //     // console.log(rowIndex);
    //     const url = `/posts/${row.id}`;
    //     this.props.history.push(url);
    //   }
    // };

    // console.log("hello", this.state.data);

    return (
      <div className="container">
        {/* {//the color of posts in heading 2 is black , and in spec file posts title color is # #060D42;} */}
        <HeadingTwo text="Posts" />
        <div className="my-3">
          <button className="btn btn-sm btn-color-white-one mr-3">
            <FontAwesomeIcon icon={faUpload} /> Upload
          </button>
          <Button
            variant="light"
            size="sm"
            onClick={this.refresh}
            className="mr-3"
          >
            <FontAwesomeIcon icon={faSync} />
          </Button>
          <Button variant="color-primary-one" size="sm">
            <FontAwesomeIcon icon={faDownload} /> Download
          </Button>
        </div>
        <BootstrapTable
          striped
          hover
          keyField="id"
          data={this.state.data}
          columns={this.state.columns}
          filter={filterFactory()}
          pagination={paginationFactory()}
          // rowEvents={rowEvents}
          // loading={this.state.loading} //only loading is true, react-bootstrap-table will render overlay
          // overlay={overlayFactory()}
        />
      </div>
    );
  }
}

PostsTable.propTypes = {
  fetchPosts: PropTypes.func
};

const mapStateToProps = state => ({
  fetch: state.fetch
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchPosts, postDelete }
  )(PostsTable)
);

const prev = {
  width: "300px"
};

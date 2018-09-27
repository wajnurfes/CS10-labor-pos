import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { Create, Delete, DoneOutline, ArrowRightAlt } from "@material-ui/icons";
import {
  Typography,
  Grid,
  Dialog,
  IconButton,
  Button
} from "@material-ui/core";
import { ItemList, DeleteItem } from "../../components";
import { DETAILED_CLIENT_BY_ID } from "../../queries";
import "./clientview.css";

//  This component renders a s a child of home on the path
//  /clients/%clientid.  It presents the user with all information
//  about a given client, as well as paginated card for associated
//  notes and jobs.

//  https://balsamiq.cloud/sc1hpyg/po5pcja/r4C62

class ClientView extends Component {
  constructor() {
    super();
    this.state = {
      note_page: 0,
      part_page: 0,
      tag_page: 0,
      deleting: false
    };
  }

  handleDeleteButton = () => {
    this.setState({ deleting: true });
  };

  cancelDelete = () => {
    this.setState({ deleting: false });
  };

  render() {
    return (
      <Query
        query={DETAILED_CLIENT_BY_ID}
        variables={{ id: this.props.match.params.id }}
      >
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          console.log(data);
          console.log(loading);
          console.log(error);
          let name;
          if (data.client.businessName) name = data.client.businessName;
          else name = `${data.client.firstName} ${data.client.lastName}`;
          return (
            <div>
              <div className="client-view-top">
                <Grid
                  container
                  direction="row"
                  justify="space-around"
                  alignItems="center"
                  spacing={24}
                >
                  <Grid item xs={1}>
                    <Link to={`/clients/${data.client.id}/edit`}>
                      <IconButton>
                        <Create />
                      </IconButton>
                    </Link>
                  </Grid>
                  <Grid item xs={10}>
                    <h3>{name}</h3>
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton onClick={this.handleDeleteButton}>
                      <Delete />
                    </IconButton>
                  </Grid>
                </Grid>
              </div>
              <Typography paragraph>{data.client.description}</Typography>
              PLACEHOLDER!!!
              <Dialog
                open={this.state.deleting}
                onClose={this.cancelDelete}
                className="delete-modal"
              >
                <DeleteItem
                  cancelDelete={this.cancelDelete}
                  type="client"
                  item={data.client.job}
                  after_path="/clients"
                />
              </Dialog>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withRouter(ClientView);

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import NoteForm from './noteform';
import { DETAILED_NOTE_BY_ID } from '../../queries';
import { Query } from 'react-apollo';
import { Typography } from '@material-ui/core';

//  This component will render on the /notes/:id/edit route when the user is logged in
//  It is a child of the home component.
//  It presents the user with a prepopulated form to update a note.

//  https://balsamiq.cloud/sc1hpyg/po5pcja/r5720
class EditNote extends Component {
  render() {
    return (
      <Query
        query={DETAILED_NOTE_BY_ID}
        variables={{ id: this.props.match.params.id }}
      >
        {({ loading, error, data, refetch }) => {
          if (loading) return <Typography>Loading...</Typography>;
          if (error) return <Typography>Error! {error.message}</Typography>;
          return (
            <div>
              <NoteForm
                mode='edit'
                note={data.note}
                after_url='/notes'
                refetch={refetch}
              />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withRouter(EditNote);

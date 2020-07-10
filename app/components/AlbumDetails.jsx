import * as React from 'react';
import { connect } from 'react-redux';

class AlbumDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { albums } = this.props;
    const { albumId } = this.props.match.params;
    const album = albums.find(({ id }) => `${id}` === `${albumId}`);

    return (
      <div>
        <h1>Album Details</h1>
        {album && (
          <ul>
            <li>{album.title}</li>
            <li>{album.userId}</li>
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ albums }) => {
  return {
    albums
  };
};

export default connect(
  mapStateToProps,
  null
)(AlbumDetails);

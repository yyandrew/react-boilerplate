import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Albums extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'ALBUMS_FETCH_REQUESTED' });
  }

  render() {
    const { albums } = this.props;

    return (
      <div>
        <h1>Albums list</h1>
        <ul>
          {albums.map(album => {
            return (
              <li key={album.id}>
                <Link to={`/album/${album.id}`}>{album.title}</Link>;
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStatesToProps = ({ albums }) => {
  return { albums };
};

export default connect(
  mapStatesToProps,
  null
)(Albums);

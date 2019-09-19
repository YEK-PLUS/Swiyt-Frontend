import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import Comment from '../ui/comment';
class Comments extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`w-full h-auto flex flex-col px-4 my-4 shadow`}>
        <div className={`w-full h-auto py-3 border-b border-gray-100 text-black font-black`}>Yorumlar</div>
        <div className={`w-full h-auto py-3 flex flex-row flex-wrap justify-between`}>
          {this.props.comments.map(comment => <div className={`w-2/5 mx-3`}>
            <Comment
              name={comment.user.realname}
              image={comment.user.image.cdn.url}
              comment={comment.comment}
            />
          </div>)}
        </div>
      </div>
    );
  }
}

export default (Comments);

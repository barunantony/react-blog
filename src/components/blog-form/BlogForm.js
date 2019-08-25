import React from 'react';
import { connect } from 'react-redux';

import * as blogActions from '../../redux/actions/blogActions';
import { CATEGORIES } from '../../constants';

import { Button, Input } from '../index';
import './BlogForm.scss';

function BlogForm({ addBlog, history}) {
  const onSubmit = (e) => {
      addBlog({
            title: `${e.target[0].value} Added Title`,
            content: 'Added blog content...',
            datePosted: '12/12/2018',
            category: [CATEGORIES.technical]
        });

      history.push('/?sidebar=open');

  };

  return (
    <div className="BlogForm">
      <header className='header'>Add Blog</header>
      <form className='formContainer' onSubmit={
        (e) => {
          e.preventDefault();
          onSubmit(e);
        }
      }>
        <Input
          inputName="Title"
          onChange={() => {}}
        />
        <Button buttonName='Add Blog' type='submit' />
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBlog: (blog) => {
      dispatch(blogActions.addBlog(blog))
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(BlogForm);

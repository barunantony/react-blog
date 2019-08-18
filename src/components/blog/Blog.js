import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import './Blog.scss';

const Blog = ({ blogs, match, location }) => {
    const blogId = location.search.slice(1).split('&')[0].split('=')[1];
    const {title, content, datePosted, categories} = blogs[blogId] || {};

    return (
        <div className='blogContainer'>
            <h1>Blog</h1>
            <div>{title}</div>
            <div>{content}</div>
            <div>{datePosted}</div>
            <div>{categories}</div>
        </div>
    );
}

Blog.propTypes = {
    blogs: PropTypes.array
}
  
const mapStateToProps = (state) => {
    return {
        blogs: state.blogs.data.blogs
    };
};
  
  export default connect(
    mapStateToProps,
    null
  )(Blog);
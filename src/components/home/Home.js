import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu } from '../index';

import './Home.scss';

const Home = ({ blogTitles }) => {
    const links = blogTitles.map((title, i) => (<Link to={`/blog?id=${i}`}>{title}</Link>));
    return (
        <div className='homeContainer'>
            <Menu />
            <h1>Home</h1>
            {links}
        </div>
    );
}

Home.propTypes = {
    blogNumber: PropTypes.number,
    blogTitles: PropTypes.array
}
  
const mapStateToProps = (state) => {
    return {
        blogTitles: state.blogs.data.blogs.map((blog) => blog.title)
    };
};
  
  export default connect(
    mapStateToProps,
    null
  )(Home);
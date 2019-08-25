import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = ({ blogTitles }) => {
    const links = blogTitles.map((title, i) => 
        (<Link key={`blog-id-${i}`} to={`/blog?id=${i}`}>{title}</Link>));
    
    links.push(<Link key='add-blog' to='/add-blog'>Add new blog</Link> );

    return (
        <div className='homeContainer'>
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
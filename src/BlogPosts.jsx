import React from 'react'

function BlogPosts(props) {
    var mappedBlogPosts = props.blogPosts.map(blogPost => <p>{blogPost}</p>)
    return (
        <div>
            <h1>My Blog Posts</h1>
            {mappedBlogPosts}
        </div>
    )
}

export default BlogPosts
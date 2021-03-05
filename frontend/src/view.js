import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';

class View extends Component {
  constructor() {
      super()
    this.state = {
      posts: [],
    };
  }
    

  componentDidMount() {
    axios
      .get('http://localhost:8082/')
      .then(res => {
        this.setState({
          posts: res.data
        })
        //console.log(this.state.books);
      })
      .catch(err =>{
        console.log('Error from View '+err);
      })
  };


  render() {
    const posts = this.state.posts;
    let postList;

    if(!posts) {
      postList = "There is no product record!";
    } else {
      postList = posts.map((post, index) =>
        <div>
          <h2 style={{textAlign:"center", color:"blue"}}> {post.title} </h2>
          <h4 style={{textAlign:"center"}}> By {post.author} </h4>
          <p style={{textAlign:"center"}}> {post.description} </p>
          <hr/> <br/>
        </div>
      );
    }

        return(
          <div>
            <Link to='/add'> Add Blog </Link> <br/>
            <Link to='/update'> Update Blog </Link> <br/>
            <Link to='/delete'> Delete Blog </Link>
            
            <h1 style={{textAlign:"center"}}> BLOGS </h1> <hr/>
            {postList}
          </div>
        );
    
      
    } 
  }


export default View;
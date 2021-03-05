import React, { Component } from 'react';
import axios from 'axios';

class DeletePost extends Component {
  constructor() {
    super();
    this.state = {
      id: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

  axios
  .delete('http://localhost:8082/api/delete/'+this.state.id)
  .then(res => {
      alert("Post deleted");
    this.props.history.push('/');
  })
  .catch(err => {
    console.log("Error in deleteBlog!");
  })
  }

  render(){
      return(
          <div>
              <form onSubmit={this.onSubmit}>
                  <input 
                    type='text' 
                    placeholder='Enter the ID of the blog'
                    name='id'
                    value={this.state.id}
                    onChange={this.onChange}
                  />
                  <input 
                    type='Submit'
                    value='DELETE'
                  />
              </form>
          </div>
      );
  }
}

export default DeletePost;
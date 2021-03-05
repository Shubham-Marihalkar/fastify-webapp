import React, { Component } from 'react';
import axios from 'axios';

class AddPost extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      description:'',
    };
  }


  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      author: this.state.author,
      description: this.state.description
    };
    console.log(data);
    axios
      .post('http://localhost:8082/api/post', data)
      .then(res => {
        this.setState({
          title: '',
          author: '',
          description:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in AddBlog!");
      })

  };

  render() {
    return (
      <div className="AddBlog">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Post</h1>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Blog'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Author of the Blog'
                    name='author'
                    className='form-control'
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Describe the title'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>
                
                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                    value="Submit"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPost;
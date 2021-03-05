import React, { Component } from 'react';
import axios from 'axios';

class UpdatePost extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      title:"",
      author:"",
      desc:"",
      dis:""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

  axios
  .get('http://localhost:8082/api/getOne/'+this.state.id)
  .then(res => {
    console.log(res.data);
    this.setState({
        title: res.data.title,
        author: res.data.author,
        desc: res.data.description
    })
    this.setState({dis: "ready" })
  })
  .catch(err => {
    console.log("Error in deleteBlog!");
  })
  }

  update = e =>{
      e.preventDefault();

    const data={
        title: this.state.title,
        author: this.state.author,
        description: this.state.desc
    }
    console.log(data);
    axios
    .put('http://localhost:8082/api/update/'+this.state.id, data)
    .then(res => {
      alert('Blog post updates')
      this.props.history.push('/')
    })
    .catch(err => {
      console.log("Error in updateBlog!");
    })
  }

  render(){
      if(this.state.dis === "ready"){
        return(
            <div>
            <form onSubmit={this.update}>
                  <input 
                    type='text' 
                    placeholder='Title'
                    name='title'
                    value={this.state.title}
                    onChange={this.onChange}
                  /> <br/>

                <input 
                    type='text' 
                    placeholder='Author'
                    name='author'
                    value={this.state.author}
                    onChange={this.onChange}
                  /> <br/>

                <input 
                    type='text' 
                    placeholder='Description'
                    name='desc'
                    value={this.state.desc}
                    onChange={this.onChange}
                  />
                  <input 
                    type='Submit'
                    value='Update'
                  /> <br/>
              </form>
        </div>
        )
      }
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
                    value='Submit'
                  />
              </form>
          </div>
      )   
  }

}

export default UpdatePost;
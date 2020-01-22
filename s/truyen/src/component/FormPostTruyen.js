import React, { Component } from 'react';
import axios from '../axios'

class FormPostTruyen extends Component {
    state = {
       
      }
    componentDidMount(){
      
    }
    
      handleSubmit = () => {
        var a = document.getElementById("category").value;
        var b= a.split(",");
        axios.post('/api/manga',{
          name: document.getElementById("name").value,
          author: document.getElementById("author").value,
          category: b,
          avatar: document.getElementById("avatar").value,
          description: document.getElementById("depcription").value,
          date: new Date(),
          anotherName:document.getElementById("anotherName").value,
        }).then(
            res=>{
              console.log("post: ")
              console.log(res.data.data.name);
            }   
          ).catch(
            err=>console.log("err:" + err),
          )

      }
  
  render(){
      return(
<div className="App">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <input class="form-control" type="text" placeholder="name" id="name" readonly></input>
                    <input class="form-control" type="text" placeholder="anotherName" id="anotherName" readonly></input>
                    <input class="form-control" type="text" placeholder="author" id="author" readonly></input>
                    <input class="form-control" type="text" placeholder="category" id="category" readonly></input>
                    <input class="form-control" type="text" placeholder="depcription" id="depcription" readonly></input>
                    <input class="form-control" type="text" placeholder="avatar" id="avatar" readonly></input>
                    
                    <button type="submit" class="btn btn-primary mb-2" onClick={this.handleSubmit}>Confirm identity</button>
                </div>
            </div>
        </div>
    </div>
      )
  }
    
}
export default FormPostTruyen;

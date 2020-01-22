import React, { Component } from 'react';
import axios from '../axios'

class FormPostChapter extends Component {
    state = {
       
      }
    componentDidMount(){
      
    }
    
      handleSubmit = () => {
        var imageLink1 = document.getElementById("imageLink").value;
        imageLink1= imageLink1.split(",");
        var mangaId=document.getElementById("manga").value;
        axios.post('/api/chapter',{
          name: document.getElementById("name").value,
          chapIndex: document.getElementById("chapIndex").value,
          manga: document.getElementById("manga").value,
          imageLink:imageLink1,
          date: new Date(),
        }).then(
            res=>{
                axios.put(`/api/manga/${mangaId}`,{
                    chapters: res.data.data._id
                  }).then(
                      res=>{
                        console.log("p2: ")
                        console.log(res.data)
                      }   
                    ).catch(
                      err=>console.log("err:" + err),
                    )
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
                    <input class="form-control" type="text" placeholder="chapIndex" id="chapIndex" readonly></input>
                    <input class="form-control" type="text" placeholder="manga" id="manga" readonly></input>
                    <input class="form-control" type="text" placeholder="imageLink" id="imageLink" readonly></input>                    
                    <button type="submit" class="btn btn-primary mb-2" onClick={this.handleSubmit}>Confirm identity</button>
                </div>
            </div>
        </div>
    </div>
      )
  }
    
}
export default FormPostChapter;
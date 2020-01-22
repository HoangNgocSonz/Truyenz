import React,{Component} from 'react'
import axios from '../axios';
import NavBar from '../component/NavBar';
import './DetailComic.css';
import {Link} from 'react-router-dom';

class DetailComic extends Component{
    state={
        comic:0
    }
     componentDidMount=()=>{
        axios.get(`/api/manga/${this.props.match.params.comicId}`)
        .then(res => {
          this.setState({comic:res.data.data})
        }).catch(
            err=>console.log("err:" + err),
          )
    }

    updateFollow=()=>{
        axios.put(`/api/manga/${this.props.match.params.comicId}`,{
            follow: this.state.comic.follow+1
          }).then(
              res=>{
                this.componentDidMount()
              }   
            ).catch(
              err=>console.log("err:" + err),
            )
    }
    updateLike=()=>{
        axios.put(`/api/manga/${this.props.match.params.comicId}`,{
            like: this.state.comic.like+1
          }).then(
              res=>{
                this.componentDidMount()
              }   
            ).catch(
              err=>console.log("err:" + err),
            )
    }
    render(){
        var allChapter;
        if(this.state.comic !=0){
            allChapter=this.state.comic.chapters.map((chapter)=>(
                <Link to={`read/${chapter._id}`}>
                    <p>chapter {chapter.chapIndex}</p>
                </Link>
               
            ))
        }
        return(
            <div >
                <NavBar/>
               {this.state.comic.length !=0 ?
               <div className="container">
                    <h4>{this.state.comic.name}</h4>
                   <div className="row">
                        <div className="col-3" id="col-3">
                            <img src={this.state.comic.avatar} className="avatar"></img>
                        </div>
                        <div className="col-7">
                            <p>tên khác: {this.state.comic.anotherName}</p>
                            <p>tác giả: {this.state.comic.author}</p>
                            <p>tình trạng: {this.state.comic.status}</p>
                            <p>thể loại: {this.state.comic.category}</p>
                            <p>lượt xem: {this.state.comic.view}</p>
                            <button onClick={this.updateFollow}>theo dõi</button>
                             <p>{this.state.comic.follow} người theo dõi</p>
                            <p>thích: {this.state.comic.like}</p>
                            <div>
                                <img src="https://vistapointe.net/images/heart-1.jpg" className="heart" onClick={this.updateLike}></img>
                            </div>
                             
                        </div>
                   </div>
                   <div>
                       <h4>Nội dung:</h4>
                       {this.state.comic.description}
                   </div>
                   <div>
                       <h4>Danh sách chương: </h4>
                       {allChapter}
                   </div>
               </div>
               :"1"
            }
            </div>
        )
    }
}

export default DetailComic;
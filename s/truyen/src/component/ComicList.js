import React,{Component} from 'react';
import './ComicList.css';
import {Link} from 'react-router-dom';

class ComicList extends Component{
    state={
        d:Date.now()
    }
    componentDidMount(){
      console.log( this.props.comics[0].chapters[this.props.comics[0].chapters.length-1].date)
    }

    render(){
        const img= this.props.comics.map((comic)=>(
            <div  className="col-2" id="div1-imgComicList">
                <Link to={`/${comic._id}`}>
                    <img src={comic.avatar} id="imgComicList"></img> 
                    <p>{comic.name}</p>
                    <p>view: {comic.view}</p>
                    <p>like: {comic.like}</p>
                    <p>follow: {comic.follow}</p>
                    <p>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(new Date())}</p>
                    <p>chapter {comic.chapters[comic.chapters.length-1].chapIndex}: {comic.chapters[comic.chapters.length-1].date.split("T")[0]}</p>
                    <p>chapter {comic.chapters[comic.chapters.length-2].chapIndex}: {comic.chapters[comic.chapters.length-2].date.split("T")[0]}</p> 
                </Link>
            </div>               
        )
    )
        return(
            <div className="container">
                <h3>Truện mới cập nhật</h3>
                <div className="row">
                    {img }
                </div>

            </div>
           
        )
    }
}

export default ComicList
import React, {Component} from 'react';
import NavBar from '../component/NavBar';
import axios from '../axios';
import './Read.css'

class Read extends Component{
    state={
        chapter:0
    }
    componentDidMount(){
        axios.get(`api/chapter/${this.props.match.params.chapterId}`)
        .then(
            (res)=>(
                this.setState({chapter:res.data.data}),
                console.log(res.data.data.manga),
                    axios.put(`/api/manga/${res.data.data.manga._id}`,{
                        view: res.data.data.manga.view+1
                    }).then(
                        
                    ).catch(
                    err=>console.log("err:" + err),
                    )
            )
        )
        .catch(err=>console.log(err));
    }

    render(){
        var allImages;
        if(this.state.chapter!=0){
            allImages=this.state.chapter.imageLink.map((link)=>(
                <div className="content-2">
                    <img src={link} className="img"></img>
                </div> 
            ))
        }

        return(
            <div>
                <NavBar/>
                <div className="content">
                    <center>
                        {allImages} 
                    </center>

                </div>
                
            </div>
        )
    }
}

export default Read
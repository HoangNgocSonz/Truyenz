import React,{Component} from 'react'
import NavBar from'../component/NavBar';
import Carosel from '../component/Carosel';
import ShowManga from '../component/ShowManga';
import FormPostChapter from '../component/FormPostChapter'
class HomeScreen extends Component{
    
    render(){
        return(
            <div>
                <NavBar/>
                <Carosel/>    
                <ShowManga/>
            </div>
        )
    }
}

export default HomeScreen;
import React, {Component} from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
class NavBar2 extends Component{
    Category1=["Adult","Adventure","Anime","Comedy","Comic","Doujinshi","Drama","Ecchi","Fantasy","Gender Bender"];
    Category2=["Harem","Historical","Horror","Josei","Live action","Manhua","Manhwa","Martial Arts","Mature","Mecha"];
    Category3=["Mystery","One shot","Psychological","Romance","School Life","Sci-fi","Seinen","Shoujo","Shoujo Ai","Shounen"];
    Category4=["Shounen Ai","Slice of Life","Smut","Soft Yaoi","Sports","Supernatural","Action"];
    
    componentDidMount=()=>{
    }
    render(){
        const cate1=this.Category1.map(
            (cate)=>(
                <Link to={`/category/s/${cate}`}>
                    <a class="dropdown-item" href="#">{cate}</a>
                </Link>
            )
        )
        const cate2=this.Category2.map(
            (cate)=>(
                <Link to={`/category/${cate}`}>
                    <a class="dropdown-item" href="#">{cate}</a>
                </Link>
            )
        )
        const cate3=this.Category3.map(
            (cate)=>(
                <Link to={`/category/${cate}`}>
                    <a class="dropdown-item" href="#">{cate}</a>
                </Link>
            )
        )
        const cate4=this.Category4.map(
            (cate)=>(
                <Link to={`/category/${cate}`}>
                    <a class="dropdown-item" href="#">{cate}</a>
                </Link>
            )
        )
        
        return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="NavBar">
         <img src="https://img.pngio.com/twitter-logo-transparent-png-stickpng-twitter-logo-transparent-background-png-400_400.png" className="logo" ></img>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Hot <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Theo dõi</a>
            </li>
            
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Thể loại
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <div className="row">
                        <div className="col-3">
                            {cate1}
                        </div>
                        <div className="col-3">
                            {cate2}
                        </div>
                        <div className="col-3">
                            {cate3}
                        </div>
                        <div className="col-3">
                            {cate4}
                        </div>
                    </div>
               
              
               
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                sắp xếp
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" id="nav-link">Lịch sử</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Bộ lọc</a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>
                )
            }
        }
export default NavBar2
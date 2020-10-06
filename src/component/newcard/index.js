import React,{Component} from 'react';
import Image1 from "../images/404.jpg"
import "./index.css";

export default class NewCard extends Component {
        render(){
            const {content={}} = this.props;  
        return(
         <div className="card">
            {content.response.docs.map(i=>{
               let url;
               let url2=i.web_url;
              if(i.multimedia.length !==0){url=`https://www.nytimes.com/${i.multimedia[1].url}`}
              else {  url=Image1}
              return(
              <div className="product-card">
               <div className="badge">{i.news_desk}</div>
                <div className="badge-left"><i class="material-icons">favorite_border</i></div>
		        <div className="product-tumb">
			      <img src={url}alt="News"/>
                  <a href={url2}><div className="middle">
                 <div className="text">Read More</div>
                  </div>
                  </a>
		        </div>
		        <div className="product-details">
			    <h4><a href={url2}>{i.headline.main}</a></h4>
                <span className="product-catagory">{i.byline.original}</span>
                <p>{i.abstract}</p>
				<div className="product-links">
                <a href={url2}><button className="product-more">Read More</button></a>
			  </div>
			 </div>
             </div>
            )})}
        </div>
        )
    }
}
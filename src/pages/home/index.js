import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {pageData} from "../../api_helper/slice/homeSlice";
import {NewCard,Menu,Loader} from "../../component";
import ReactPaginate from "react-paginate";
import "./index.scss";

class Home extends Component{
    constructor(props){
        super(props);
        this.state ={
           page:0,
           offset:false,
           processing:false
        }
    }
    rendernextpage=()=>{
        const {dispatch}=this.props;
        let pages=this.state.page
           dispatch(pageData(pages))
           this.setState({offset:false})
      }
    handlePageChange=pageNumber=>{
        let pages=pageNumber.selected
         this.setState({page:pages,offset:true})
    }
    componentDidMount(){
        const {page}=this.state;
        const {dispatch}=this.props;
        dispatch(pageData(page))
    }

    render(){
        const {home}=this.props;
        return(
        <div>
            <Menu/>
            {home.status === "Request" &&<Loader/>}
            {home.status === "Success" && 
            <div> 
              <NewCard content={home.datas}/>
            </div>
            }
          <div className="pagination">
            <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            marginPagesDisplayed={0}
            pageRangeDisplayed={0}
            onPageChange={this.handlePageChange}
            disableInitialCallback={false}/> 
          </div>
           {this.state.offset===true && this.rendernextpage()}
        </div>
        )
    }
}

function mapStateToProps(state){
    const {home}=state;
    return {
        home
    }
}

export default withRouter(connect(mapStateToProps)(Home))
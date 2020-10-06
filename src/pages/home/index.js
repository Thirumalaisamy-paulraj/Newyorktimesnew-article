import React,{Component,Suspense,lazy} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {pageData} from "../../api_helper/slice/homeSlice";
import {Menu,Loader} from "../../component";
import "./index.scss";
import InfiniteScroll from "react-infinite-scroll-component";
 const NewCard =lazy(()=>import("../../component/newcard"));
 
class Home extends Component{
    constructor(props){
        super(props);
        this.state ={
          Data:[],
           page:0,
           loadmore:true
            
        }
    }    
    componentDidMount(){
        const {page}=this.state;
        const {dispatch}=this.props;
        dispatch(pageData(page));
       
    }
    fetchMoreData = () => {
        const {dispatch}=this.props;
          let pages=this.state.page +1;
           setTimeout(() => { dispatch(pageData(pages)) },150);
            this.setState({page:pages})
        };
    
    componentDidUpdate(prevProps){
        let newProps =this.props;
        let datas=[]
         let propsChanged =prevProps.home.status !==newProps.home.status;
         if(newProps.home.status ==="Success" && propsChanged){
             let data=newProps.home.datas;
             if(this.state.page===0){
                datas=[...datas,data]
             this.setState({
                 Data:[...datas]
             })}
             else{
            this.setState({
                Data:this.state.Data.concat(data)
            })
        }
         }
    }

    render(){
        const{Data}=this.state;
        return(
        <div>
            <Menu/> 
            <Suspense fallback={<Loader/>}>
            <InfiniteScroll
            dataLength={this.state.Data.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h1>Still Loading...</h1>}
            
          >
            {Data.map(i=>{ return(<NewCard content={i.response.docs}/>)})}
            </InfiniteScroll>
            </Suspense>
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
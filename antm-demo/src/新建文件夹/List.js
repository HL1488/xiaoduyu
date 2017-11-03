import React,{Component} from 'react';

		let sty={
			display:'inline-block',
			width:'45%',
			fontSize:'13px',
			color:'#ccc',
			textOverflow:'ellipsis',
			overflow:'hidden',
			whiteSpace:'nowrap',
			marginLeft:'.5rem',
            marginTop:'.4rem'
			
		}
		let sty2={
			width:'.5rem',
			height:'.5rem',
			borderRadius:'50%',
			position:'relative',
			top:'.1rem',
			marginRight:'.1rem',

		}
		let sty0={
			background:'#fff',
			margin:'0',
			height:'1rem',
			borderBottom:'1px solid #f5f5f5',
            cursor:'pointer'
		}

		let t= new Date().getTime();

class List extends Component{

	constructor(props){
		//构造函数
		super(props);		
		//调用父集方法
		this.state={data:null}
		//当前的 状态 数据为空
	}

	componentDidMount() {
		//组件部分安装
		let head=new Headers();
		//头部 新的 头文件
        head.append('Content-Type','application/json');
        //头部附加（）
        let sendData={
        	//发送数据
            method:'GET',
            //方法是GET
            headers:head,
            //头文件的头部
            mode:'cors',
            //方式
            body:null,
            cache: 'default'
            //隐藏
        }
        let path=`https://www.xiaoduyu.com/api/v1/topic?child=1&parent_id=${this.props.id}&page=0&per_page=30&_t=${t}`;

        let This=this;

        fetch(path,sendData)
        //路径发送数据
            .then(function(response) {
                return response.json();
                //返回对象符号
            })
            .then(function(data) {

                This.setState({data});
                //当前的状态是数据
            });
	}

	

	render(){
		let arr=[];

		if(this.state.data!=null){

			this.state.data.data.forEach(function(value,index){
				arr.push(
					<p key={index} style={{width:'100%',cursor:'pointer'}} style={sty0}>
						<img style={sty2} src={value.avatar} />
						{value.name}<span style={sty}>{value.brief}</span>
						<span style={{float:'right',cursor:'pointer',lineHeight:'50px'}}>+关注</span>
						
					</p>
					)
			})
		return(
		<div>
			{arr}
		</div>
			
			)
		}else{
			return(<p>正在加载...........</p>)
		}
	}
}


export default List;
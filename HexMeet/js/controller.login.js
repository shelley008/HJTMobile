

mui.init({
	keyEventBind: {
		backbutton: false  //关闭back按键监听
	}
})

mui.plusReady(function(){
	 
	 
})



var vm = new Vue({
	el:'#Login',
	data:{
		userName: '',
    userPassword: '',
		is_private:true
	},
	mounted:function(){},
	methods:{
		  userLogin(){
				let params = {
					account: 'hua',
					password:'7c4a8d09ca3762af61e59520943dc26494f8941b',
					intranet: false
				}
				restLogin(params);
			}
		}
})


function restLogin(params){
	var serverAddress = 'cloud.hexmeet.com';
	var restPath = '/api/rest/v2.0';
	var BaseURL = 'http://' + serverAddress + restPath;
	var loginRestUrl = BaseURL + '/web/login';
	mui.ajax(loginRestUrl,{
		    data:{
					account:params.username,
					intranet:params.intranet,
          password:params.password
				},
				dataType:'json',
				type:'post',
				timeout:3000,
				headers:{'Content-Type':'application/json'},
				success:function(data){
					mui.toast('data is ok')
					//登录成功跳到会议列表页
					//openConferen()
				},
				error:function(xhr,type,errorThrown){
					//mui.toast('sorry no data');
					openConferen()
				}
			})
}


function openConferen(){
	mui.openWindow({
			url:'home.html',
			id:'home.html',
				extras:{
					name:'shelley',
					roomId:'12345678901'
			},
			show:{
				duration:300
			}
	})
}


var subpage_style = {
				top:'0px',
				bottom:'0px',
				width:'100%',
				height:'100%'
};

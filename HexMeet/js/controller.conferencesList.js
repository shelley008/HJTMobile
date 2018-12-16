mui.init({
	pullRefresh: {
		container:"#refreshId",
		down: {
      style: mui.os.android ? "default" : "circle",
		  contentdown: "下拉可以刷新",
		  contentover: "释放立即刷新",
		  contentrefresh: "正在刷新...",
		  callback:pulldownRefresh 
    },
		up: {
			contentinit: '',
			contentrefresh: '正在加载...',
			contentnomore: '没有更多了',
			callback: pullupRefresh
		 }
    }
})

mui.plusReady(function(){
	loadData();
})

var vm = new Vue({
	el:'#Conferences',
	data:{
		conferences:[],
	},
	mounted:function(){
		this.autoRefresh()
		//loadData()
	},
	methods:{
		getConfDatas:function(){
			//loadData();
		},
		autoRefresh:function(){
			setInterval(function(){
			  loadData()
			},3000)
		}
	}
})


//下拉刷新具体业务实现
function pulldownRefresh() {
	loadData();
	setTimeout(function(){
		mui('#refresh').pullRefresh().endPullupToRefresh();
		mui.toast('aaa')
	},1000)
	
}

// 上拉加载具体业务实现
function pullupRefresh() {
	loadData();
}

// 会议列表
function loadData(){
	var currentDate = new Date();
    var start = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        0,
        0,
        0
      ).getTime();
    var end = start + 3600 * 1000 * 24 * 365;
    var para = {
        status: "",
        startTime: start,
        endTime: end,
        maxResults:100,
        includeHierarchicalDepts:true,
        token:'a194b69c02e54a2cb1ae0ac97f0d311a'
      };
	  
	mui.ajax('http://cloud.hexmeet.com/api/rest/v2.0/conferences?status=&startTime=1544889600000&endTime=1576425600000&maxResults=100&includeHierarchicalDepts=true&token=a194b69c02e54a2cb1ae0ac97f0d311a',{
		        //data:para,
				dataType:'json',
				type:'get',
				timeout:3000,
				headers:{'Content-Type':'application/json'},
				success:function(data){
					//mui.toast('has data');
					vm.conferences = data;
					return;
				},
				error:function(xhr,type,errorThrown){
					//mui.toast('sorry no data');
				}
	})
}





var defineStorage = {
  save(key,obj){
    var storage = window.localStorage;
    storage.setItem(key,JSON.stringify(obj));
  },
  get(key){
     return JSON.parse(window.localStorage.getItem(key))
  },
  clear(){
    localStorage.clear()
  },
  remove(key){
    localStorage.removeItem(key)
  }
};


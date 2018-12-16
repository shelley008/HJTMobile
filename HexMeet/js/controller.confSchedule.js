mui.init()
mui.plusReady(function(){
				
})


var vm = new Vue({
	el:'#confSchedule',
	data:{
		conf: {name:'', startTime: '', duration:'', password: '', description: '', users: []},
	},
	methods:{
		addSchedule:function(){
			mui.toast('还没作完')
		},
		 goback:function(){
			
		}
	},
	
	
	
})
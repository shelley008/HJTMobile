mui.init();
mui.plusReady(function(){
	handlerInitWebview();
	handlerChangeWebview();
})


//子页面定位
var subview_style = {
		top:'0px',
		bottom:'100px'
};

//子页面定义
var subPages = ['conferenceScreen.html','joinConf.html','setting.html']



//设置默认页
var Index = 0;
//初始化webview
var handlerInitWebview = function(){
	var self = plus.webview.currentWebview();
	for(var i = 0; i < subPages.length; i++ ){
			//创建webview子页
			var sub = plus.webview.create(subPages[i],subPages[i],subview_style);
			if(i != Index){
				sub.hide();
			}
			//将webview添加到窗口
			self.append(sub);
	}
}


//切换子页面
var handlerChangeWebview = function(){
		//当前显示的页面
		var activeTab = subPages[Index],
		title = document.querySelector(".mui-title");
		mui('.mui-bar-tab').on('tap','a',function(e){
			//获取子页面的id
			var targetTab = this.getAttribute('viewPage');
			if(targetTab == activeTab){
				return;
			}
			this.setAttribute("style","top:0px");
			//显示目标选项卡
			plus.webview.show(targetTab);
			//隐藏当前
			plus.webview.hide(activeTab);
			//更改当前活跃的选项卡
			activeTab = targetTab;
		})
	}
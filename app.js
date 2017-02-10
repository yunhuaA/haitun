//主入口文件
angular.module("myApp",["ngRoute","angularCSS"])
	//配置路由,使用routeProvider配置路由规则
	.config(["$routeProvider",function($routeProvider){
		$routeProvider.when("/home",{
			//当路由对应的锚点为home时，链接到页面
			tempalteURL : "./html/home.html",
			controller : "HomeCtrl as homeCtrl"
			
		})
		.when("/consult",{
			templateURL : "./consult.html",
			controller : "ConsultCtrl as consultCtrl"
		})
		.when("/customization",{
			templateURL : "./customization.html",
			controller : "CustomizationCtrl as customizationCtrl"
		})
		.when("/stick",{
			templateURL : "./stick.html",
			controller : "StickCtrl as stickCtrl"
		})
		
	}])

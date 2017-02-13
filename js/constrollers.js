//所有的控制器---海豚
angular.module("myApp")
//首页-----需要注入的服务$css，和homeService
	.constroller("HomeCtrl",['$css','HomeService',function($css,HomeService){
		$css.add('./css/home.css');
		var self = this;
		self.page = 
		
	}])

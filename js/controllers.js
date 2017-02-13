//注意：这里angular.module('myApp') 第二个参数依赖去掉 
angular.module('myApp')
	//依赖注入$css（这个是angularCSS这个插件中的服务）
	.controller('HomeCtrl', ['$css','HomeService','$http',function ($css, HomeService,$http) {
		//引入CSS，路径都是相对于index.html
		$css.add('./css/home.css');
		var self = this;
		//调用服务中的方法
		//轮播图				
		var swiper = new Swiper('.swiper-container', {
			        pagination: '.swiper-pagination',
					autoplay : 2000,
			        slidesPerView: 'auto',
			        paginationClickable: true,
			        spaceBetween: 30,
			        observer:true,//修改swiper自己或子元素时，自动初始化swiper
					observeParents:true,
			    });

		//热门旅游等json文件
		$http.get("./json/index.json")
			  	.success(function(result){
			  		self.travels = result.address;
			  		console.log(result.address);
			  		
			  		self.hotTravels = result.hotAddress;
			  		console.log(result.hotAddress);
			  		
			  		self.topTravel = result.topTravel;
			  		console.log(result.topTravel);
			  	})
		
	}])
	//$location是一个内置服务，可以获取地址、跳转路由等功能
	.controller('MarketCtrl', ['$location', '$css',function ($location,$css) {
		$css.add('./css/chat.css');
		var self = this;
		self.goBack = function () {
			//默认浏览器历史记录
//			window.history.back();
			//跳到指定的路由
			$location.path('home');
		}
		//测试jquery
//		$('.market h1').css({
//			fontSize : '100px'
//		});
	}])
	.controller('CartCtrl', ['$routeParams', '$css',function ($routeParams,$css) {
		//$routeParams 可以获取到通过路由传过来的所有参数，我们可以通过点
		//语法获取相应的参数
		$css.add('./css/order.css');
		var self = this;
		self.name = $routeParams.name;
		self.age = $routeParams.age;
	}])
	.controller('MineCtrl', ['$location','$css',function ($location,$css) {
		$css.add('./css/home.css');
		var self = this;
		
		
	}])
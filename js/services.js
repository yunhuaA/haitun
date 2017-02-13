//这里统一管理service(服务)
angular.module('myApp')
	.factory('HomeService', ['$http',function ($http) {
	
		var list = [
					{ name : 'b', age : '18' },
					{ name : 'a', age : '15' },
					{ name : 'c', age : '20' },
					{ name : 'd', age : '17' }
				];
				
		return {
			getUserList : function () {
				// 模拟获取用户列表数据
				return list;
			},
			getPageName : function () {
				//模拟获取页面名字数据
				return "我是首页";
			}
//			getResult : function(){
//				return $http.get("./json/index.json")
//			}
			
		}	
	}])
	
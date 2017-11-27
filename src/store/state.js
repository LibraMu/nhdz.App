import bg from '../assets/img/bg.jpg'
import mei from '../assets/img/mei.jpg'

export default{
	recomList:[{
		bool:{
			loadBool:false,
			controlBool:true
		},
		group:{
			user:{
				avatar_url:mei,
				medals:[],
				name:'加载用户'

			},
			category_name:'加载话题',
			large_cover:{url_list:[{url:bg}]},
			large_image:{url_list:[{url:bg}]}
		},
		comments:[]
	}],    						
	tip:'',	
	comList:[],					
	showList:[{
		group:{
			large_cover:{url_list:[{url:bg}]}
		}
	}],
	GifBool:false,
	runInter:''
}
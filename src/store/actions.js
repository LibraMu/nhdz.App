import axios from 'axios';
import get from '../mock/xhr.js'

export default{
	getDate(context,urlType) {
		let url =  urlType.url + `/stream/mix/v1/?&content_type=-${urlType.type}&count=5`
		get(url).then((res) => {
			let newData = res.data.data
			let tip =  res.data.tip
			newData.forEach(function(object,index){
				object.bool = {
					loadBool:false,
					controlBool:true,
					comfirmBool:false,
					XqBool:false,
					moreShare:false
				}
			})
			if (urlType.bool) {
				newData  = context.state.recomList.concat(newData)
			}
			context.commit('addData',{newData,tip})
		}).catch((res) => {
			console.log("getDate出错")
		})
	},
	getShow(context,urlType){
		
		let url =  urlType.url + `/stream/mix/v1/?&count=8`
		get(url).then((res) => {
			console.log(res)
			var newData = res.data.data
			if (urlType.bool) {
				console.log(123)
				newData = context.state.showList.concat(newData)
			}
			context.commit('addShow',{newData})
		}).catch((res) => {
			console.log("getShow出错")
		})
	},
	deleteObj(context,obj){
		context.commit('Objdelete',obj)
		context.commit('dislike',obj.index)
	},
	getCode(context){
		axios.get('/yzm').then((res) => {
			if (res.data.success) {
				context.commit('setCode',{bool:true,number:res.data.code})
			}else{
				context.commit('setCode',{bool:false})
			}
		}).catch((res) =>{
			console.log("getCode错误")
		})
	}
}
import Vue from 'vue'

export default {
	addData(state,data){
		state.recomList = data.newData
		state.tip = data.tip
	},
	addShow(state,data){
		state.showList = data.newData
	},
	Objdelete(state,obj){
		let bool = obj.bool
		state.recomList[obj.index].bool.comfirmBool = true
	},
	dislike(state,index){
		var dislike = []
		state.recomList[index].group.dislike_reason.forEach(function(object,index){
			dislike.push(object.title)
		})
		state.comList = dislike
	},
	alterComfirm(state,index){
		state.recomList.splice(index,1)
	},
	conVideo(state,obj){
		state.recomList[obj.index].bool.controlBool = !obj.bool.controlBool
	},
	setCode(state,data){
		if (data.bool) {
			state.codeBool = true
			state.code = data.number
		}else{
			console.log("获取失败")
		}
	},
	loginInter(state,interval){
		state.runInter = interval

	},
	clearGif(state,bool){
		clearInterval(state.runInter)
		state.GifBool = bool
	}
	
}
<template>
	<div class="gif">
		<img src="../../static/qq.png" alt="" ref='img'>
		<p>
			<span>鬼畜加载中<i ref='dian'></i></span>
		</p>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				index:0,
				inter:null
			}
		},
		computed:{
			...mapState(['GifBool','runInter'])
		},
		methods:{
			run(){
				let _this = this
				let imgArr = ['qq','qr','qs','qt']
				let dianArr = ['.','..','...','....']
				if (this.inter != null) {
					clearInterval(this.inter)
				}else{
					this.inter = setInterval(function(){
						_this.index++;
						if (_this.index>3) {
							_this.index = 0
						}
						_this.$refs.img.setAttribute('src','../../static/'+imgArr[_this.index]+'.png')
						_this.$refs.dian.innerHTML = dianArr[_this.index]
					},50)
					this.$store.commit('loginInter',this.inter)
				}

			}
		},
		created(){
			this.run()
		},
		watch:{
			GifBool(){
				this.run()
			}
		}
	}
</script>
<style scoped>
	.gif{
		margin: 100px auto;
	}
	.gif img{
		display: block;
		margin: 0 auto;
	}
	.gif p{
		width:40%;
		margin:0 auto;
	}
	.gif span{
		font-size: 1.5rem;
		display: block;
		text-align: left;
	}
</style>
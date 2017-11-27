<template>
	<div class="headerBox">
		<div class="header">
			<ul>
				<router-link v-for='(item,index) in list' 
							:to='item.linkTo'
							 tag='li' 
							 :key='item.msg'
							 @click.native='clickColor(index)'
							 >
					{{item.msg}}
				</router-link>
			</ul>
		</div>
	</div>
</template>
<script>
	import {XButton} from 'vux'
	export default {
		data () {
			return {
				list:[
					{
						class:'care',
						msg:'关注',
						linkTo:'/index/case'
					},{
						class:'recommend',
						msg:'推荐',
						linkTo:'/index/recommend'
					},{
						class:'video',
						msg:'视频',
						linkTo:'/index/video'
					},{
						class:'pic',
						msg:'图片',
						linkTo:'/index/pic'
					},{
						class:'riff',
						msg:"段子",
						linkTo:'/index/riff'
					},{
						class:'essence',
						msg:'精华',
						linkTo:'/index/essence'
					}
				]
			}
		},
		components: {
			XButton
		},
		methods:{
			clickColor(index){
				this.flg = index
			}
		},
		
	}
</script>
<style scoped>
	.headerBox{
		height: 40px;

	}
	.header{
		width: 100%;
		background: #ddd;
		position: fixed;
		top: 0;
		z-index: 9;
		overflow: hidden;
		
	}
	.header ul{
		display: flex;
		flex-direction:row;
		justify-content:center;
		align-items:center;
	}
	.header ul li{
		flex-grow:1;
		flex-shrink:1;
		text-align: center;
		line-height: 35px;
		font-size: 14px;
		color: #666;
	}
	.header ul li.router-link-active{
		color:#ff6990;
	}
</style>
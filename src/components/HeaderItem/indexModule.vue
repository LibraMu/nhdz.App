<template>
	<div class="recom">
		<!-- 加载 -->
		<div class="loadMore" v-if='loadBool'> 
			<loginGif></loginGif>
		</div>
		<!-- 主体 -->
		<div class="main" v-else>
			<!-- 主体内容遍历 -->
			<div class="recomBox" v-for='(item,index) in recomList'>
				<!-- 用户作者 -->
				<div class="router-div" @click.stop='item.bool.XqBool = true'>
					<!-- 用户标题 -->
					<div class="recom-header">
						<div class="hot">
							<img src="./img/qk.png" alt="" :class=''>
						</div>
						<div class="router" v-if='item.group !=undefined'>
							<img :src="item.group.user.avatar_url" alt="" class="use-pic">
							<span>{{item.group.user.name}}</span>
							<img v-if='item.group.user.medals.length != 0' :src="item.group.user.medals[0].small_icon_url" alt="" class="hot-pic">
						</div>
						<div class="dele" @click.stop='deleteObj({index:index,bool:item.bool})'>
							<span class="iconfont icon-chuyidong"></span>
							<div class="dislike">
								<confirm v-model='item.bool.comfirmBool' :hide-on-blur='true' title='选择不喜欢的理由' @on-confirm='alterComfirm(index)'>
									<checklist labelPosition ='left' :options="comList" style='text-align:left;'></checklist>
								</confirm>
							</div>
						</div>
					</div>
					<!--标签，标题  -->
					<div class="title">
						<span>#{{item.group.category_name}}#</span>
						{{item.group.content}}
					</div>
				</div>
				<!-- 发表内容 -->
				<div class="publish">
					<!-- 视频 --> 
					<div class="video-con" v-if="item.group['360p_video'] !=undefined" >
						<img v-lazy="item.group.large_cover.url_list[0].url" alt="">
						<!-- 按钮 -->
						<div class="videoPlay" >
							<button @click='conVideo({bool:item.bool,index:index})' :class="item.bool.controlBool?'play':'pause'"></button>
						</div>
					</div>
					<!-- 图片 -->
					<div class="txt-con" v-else-if='item.group.large_image != undefined'>
						<img v-lazy="item.group.large_image.url_list[0].url" alt="">
					</div>
				</div>
				<!-- 神评论 -->
				<div class='god'>
					<div class="godCom" v-if='item.comments.length != 0'>
						<div class="god-msg">
							<img :src='item.comments[0].avatar_url' alt="">
							<span>{{item.comments[0].user_name}}</span>
							<img :src="item.comments[0].medals[0].small_icon_url" alt="">
							<span class="number">
								<img src="./img/ry.png" alt="">
								{{item.comments[0].digg_count}}
								<img src="./img/r2.png" alt="" class="share">
							</span>
						</div>
						<div class="god-txt">
							<span>{{item.comments[0].text}}</span>
						</div>
					</div>
					<div class="godCom" v-if='item.comments[1] !=undefined'>
						<div class="god-msg">
							<img :src='item.comments[1].avatar_url' alt="">
							<span>{{item.comments[1].user_name}}</span>
							<img :src="item.comments[1].medals[0].small_icon_url" alt="">
							<span class="number">
								<img src="./img/ry.png" alt="">
								{{item.comments[1].digg_count}}
								<img src="./img/r2.png" alt="" class="share">
							</span>
						</div>
						<div class="god-txt">
							<span>{{item.comments[1].text}}</span>
						</div>
					</div>
				</div>
				<!-- 评论状态 -->
				<div class="comState">
					<span>
						<img src="./img/ry.png" alt="" @click.stop='giveLike(item.group,index)' ref='likeImg'>
						{{item.group.user.followers}}
					</span>
					<span>
						<img src="./img/ru.png" alt="" @click.stop='lower(item.group,index)' ref='lowerImg'>
						{{item.group.bury_count}}
					</span>
					<span>
						<img src="./img/s0.png" alt="">
						{{item.group.comment_count}}
					</span>
					<span class="fr share">
						<img src="./img/r2.png" alt="">
						{{item.group.share_count}}
					</span>
				</div>
				<!-- 话题详情 -->
				<popup v-model='item.bool.XqBool' width='100%' position='right'>
					<div class="detailBox" @click='item.bool.moreShare = false'>
						<div class="detai-header">
							<!-- 头部 -->
							<div class="recom-header">
								<div class="retreat fl" @click='item.bool.XqBool = false'>
									<img src="./img/kepler_back_normal.png" alt="">
								</div>
								<div class="router fl">
									<img :src="item.group.user.avatar_url" alt="" class="use-pic">
									<span>{{item.group.user.name}}</span>
									<img v-if='item.group.user.medals.length != 0' :src="item.group.user.medals[0].small_icon_url" alt="" class="hot-pic">
								</div>
								<!-- 更多 -->
								<div class="more fr" @click.stop='item.bool.moreShare = true'>
									<img src="./img/nb.png" alt="">
									<popup v-model='item.bool.moreShare' height='35%' position='bottom' class='pop-share'>
										<div class="share-more">
											<h4>分享到</h4>
											<ul>
												<li>
													<img src="/static/y9.png" alt="">
													<span>微信</span>
												</li>
												<li>
													<img src="/static/y8.png" alt="">
													<span>朋友圈</span>
												</li>
												<li>
													<img src="/static/w8.png" alt="">
													<span>QQ</span>
												</li>
												<li>
													<img src="/static/wc.png" alt="">
													<span>空间</span>
												</li>
												<li>
													<img src="/static/uc.png" alt="">
													<span>微博</span>
												</li>
											</ul>
											<p>
												<span @click.stop='item.bool.moreShare = false'>取消</span>
											</p>
										</div>
									</popup>
								</div>
							</div>
							<!-- 发布内容 -->
							<div class="publish">
								<!-- 视频 -->
								<div class="video-con" v-if="item.group['360p_video'] !=undefined">
									<img :src="item.group.large_cover.url_list[0].url" alt="">
									<!-- 按钮 -->
									<div class="videoPlay" >
										<span v-if='item.bool.loadBool'>
											<inline-loading style='width:100%;height:100%;'></inline-loading>
										</span>
										<button @click='videoControl({bool:item.bool,index:index})' :class="item.bool.controlBool?'play':'pause'"></button>
									</div>
								</div>
								<!-- 图片 -->
								<div class="txt-con" v-else-if='item.group.large_image != undefined'>
									<img :src="item.group.large_image.url_list[0].url" alt="">
								</div>
							</div>
							<!--标签，标题  -->
							<div class="title">
								<span>#{{item.group.category_name}}#</span>
								{{item.group.content}}
							</div>
							<!-- 评论状态 -->
							<div class="comState">
								<span>
									<img src="./img/ry.png" alt="">
									{{item.group.user.followers}}
								</span>
								<span>
									<img src="./img/ru.png" alt="">
									{{item.group.bury_count}}
								</span>
								<span>
									<img src="./img/s0.png" alt="">
									{{item.group.comment_count}}
								</span>
								<span class="fr share">
									<img src="./img/r2.png" alt="">
									{{item.group.share_count}}
								</span>
							</div>
							<!-- 评论区 -->
							<div class="comment-place">
								<span>热门评论( {{item.comments.length}} )</span>
								<div class="unknow" v-if='item.comments.length == 0'>
									<p>
										暂无数据
									</p>
								</div>
								<!-- 如果有评论 -->
								<div class="comment" else>
									<div v-for='comItem in item.comments'>
										<!-- 评论用户 -->
										<div class="comm-user">
											<!-- 头像 -->
											<div class="portrait">
												 <img :src='comItem.avatar_url' alt="">
											</div>
											<!-- 用户名 -->
											<div class="user-name">
												<span>{{comItem.user_name}}</span>
												<img :src="comItem.medals[0].small_icon_url" alt="">
												<div class="favour">
													<img src="./img/ry.png" alt="">
													<i>{{comItem.digg_count}}</i>
													<img src="./img/r2.png" alt="" class="share">
												</div>
											</div>
											<!-- 评论内容 -->
											<div class="user-content">
												<span>{{comItem.text}}</span>
											</div>
										</div>
									</div>
								</div>
								<!-- 写评论 -->
								<div class="com-write">
									<div class="write-fix">
										<input type="text" placeholder="期待你的神评论" v-model='writeContent'>
										<span @click='writeCom({item:item.comments,content:writeContent})'>发送</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</popup>
			</div>
			<!-- 刷新 -->
			<div class="refirm">
				<!-- 提醒 -->
				<div class="tip" v-if='tipBool'>
					{{tip}}
				</div>
				<!-- 按钮 -->
				<div class='refresh' @click='refresh' ref='fresh'>
					<img src="./img/mk2.png" alt="">
				</div>
			</div>
		</div>
		<!-- 底部加載 -->
		<div class="recom" v-if='floorLoad'>
			<load-more :show-loading="true" tip='加载中'></load-more>
			<load-more :show-loading="false" tip='请稍等'></load-more>
		</div>
	</div>
</template>
<script>
	import {
		InlineLoading,
		LoadMore,
		Confirm,
		Checklist,
		Popup 
	} from 'vux'
	import { mapState,mapActions,mapMutations } from 'vuex'
	import LoginGif from '@/components/loginGif'
	import lower from './img/rv.png'
	import unlower from './img/ru.png'
	import like from './img/rz.png'
	import unlike from './img/ry.png'
	import mei from './img/mei.jpg'
	import hot from './img/hot.png'

	export default {
		components:{
			InlineLoading,
			LoadMore,
			Confirm,
			Checklist,
			Popup,
			LoginGif
		},
		props:['type'],
		data () {
			return {
				loadBool:true,
				floorLoad:false,
				freshBool:false,
				tipBool:false,
				scrollBool:true,
				writeContent:'',

			}
		},
		computed: {
			...mapState(['recomList','comList','tip'])
		},
		methods:{
			...mapActions({
				deleteObj:'deleteObj',
			}),
			...mapMutations(['alterComfirm','conVideo','clearGif']),
			// 滚动加载
			againDate(){
				const client_H = document.documentElement.clientHeight
				const scroll_top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				const scroll_H = document.body.scrollHeight
				if(scroll_top + client_H == scroll_H && scroll_top !=0 && this.freshBool){
					if(this.scrollBool){
						this.$store.dispatch('getDate',{url:this.HOST,type:this.type,bool:true})
						this.floorLoad = true
					}
					this.scrollBool = false
				}
			},
			// 刷新
			refresh(){
				let fresh = this.$refs.fresh
				const _this = this
				fresh.style.transition = 'all 1s  linear';
				fresh.style.transform = 'rotate(1080deg)';
				fresh.addEventListener('webkitTransitionEnd',function(){
					fresh.style.transition = 'none';
					fresh.style.transform = 'rotate(0deg)';
					if (_this.freshBool) {
						_this.$store.dispatch('getDate',{url:_this.HOST,type:_this.type,bool:false})
						document.documentElement.scrollTop = document.body.scrollTop =0;
						_this.freshBool = false
					}
				})
				// 清除点赞效果
				this.$refs.likeImg.forEach(function(obj){
					obj.setAttribute('src',unlike)
				})
				this.$refs.lowerImg.forEach(function(obj){
					obj.setAttribute('src',unlower)
				})
			},
			// 内容提示框
			showTip(){
				this.tipBool = true
				const _this = this
				setTimeout(function(){
					_this.tipBool = false
				},2000)
				
			},
			// 点赞
			giveLike(obj,index){
				if (obj.user.likeBool || obj.lowerBool) {
					return 
				}else{
					this.$set(obj.user,'followers',obj.user.followers+1)
					this.$set(obj.user,'likeBool',true)
					this.$refs.likeImg[index].setAttribute('src',like)
				}
			},
			// 
			lower(obj,index){
				if (obj.lowerBool || obj.user.likeBool) {
					return 
				}else{
					this.$set(obj,'bury_count',obj.bury_count+1)
					this.$set(obj,'lowerBool',true)
					this.$refs.lowerImg[index].setAttribute('src',lower)
				}
			},
			// 写评论
			writeCom(data){
				data.item.push({
					user_name:'匿名用户',
					avatar_url:mei,
					medals:[{small_icon_url:hot}],
					digg_count:0,
					text:data.content
				})
				this.writeContent = ''
			}
		},
		created () {
			let _this = this
			setTimeout(function(){
				_this.$store.dispatch('getDate',{url:_this.HOST,type:_this.type,bool:false})
			},1000)
			
		},
		mounted () {
			window.addEventListener('scroll',this.againDate)
		},
		beforeRouteLeave (to, from, next) {
		    window.removeEventListener("scroll");
		    next()
 		 },
		watch:{
			recomList(value){
				this.freshBool = true
				this.scrollBool = true
				// 清除 Gif 加载
				let _this = this
				this.clearGif(true)
				setTimeout(function(){
					_this.loadBool = false
				},50)
			}
		}
	}
</script>
<style scoped lang='less'>
	@import '~@/assets/css/index.css';
	@import '~@/assets/css/riff.css';
	@import '~@/assets/css/index.less';
	.hide{
		display: none;
	}
</style>
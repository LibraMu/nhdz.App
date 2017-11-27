<template>
	<div class="bottom">
		<div class="bottom-nav">
			<ul>
				<router-link tag='li' to='/index/?'>
					<i class="iconfont icon-shouye"></i>
					<span>首页</span>
				</router-link>
				<router-link tag='li' to='/show/?'>
					<i class="iconfont icon-leimupinleifenleileibie"></i>
					<span>朋友秀</span>
				</router-link>
				<router-link tag='li' to='' class='addLi'>
					<span>
						<img src="./img/sf.png" alt="" class='add' @click='open'>
					</span>
					<div class="posted">
						<popup v-model='popShow' height='100%' :show-mask='false' :hide-on-blur='false'>
							<div class="postedBox">
								<div class="postedTitle">
									<span @click='close' class="iconfont icon-chuyidong"></span>
									<a href="#">发表</a>
								</div>
								<a href="#">
									#选择话题#
								</a>
								<div class="content">
									<textarea maxlength='300'>
									</textarea>
									<div class="floor">
										<div class="floor-tip">
											你还可以输入{{textNumber}}个字
											<span>
												<input type="checkbox" id='nim'>
												<label for="nim">匿名</label>
											</span>
										</div>
										<div class="floor-choose">
											<ul>
												<li>
													<img src="./img/照片.svg" alt="">
													<span>图片</span>
												</li>
												<li>
													<img src="./img/视频.svg" alt="">
													<span>视频</span>
												</li>
												<li>
													<img src="./img/直播.svg" alt="">
													<span>直播</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</popup>
					</div>
				</router-link>
				<router-link tag='li' to='/find'>
					<i class="iconfont icon-sousuo find"></i>
					<span>发现</span>
				</router-link>
				<router-link tag='li' to='/my'>
					<i class="iconfont icon-yonghu my"></i>
					<span>我的</span>
				</router-link>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	import {
		Popup,
		Group,
		Cell
	} from 'vux'
	export default {
	 	components:{
	 		Popup
	 	},
	 	data () {
	 		return {
	 			popShow:false,
	 			textNumber:300,
	 		}
	 	},
	 	methods:{
	 		open(){
	 			this.popShow = true;
	 		},
	 		close(){
	 			this.popShow = false;
	 		}
	 	}
	}
</script>
<style scoped lang='less'>
	@import '~@/assets/css/posted.less';
	@import '~@/assets/css/bottom.less';
</style>
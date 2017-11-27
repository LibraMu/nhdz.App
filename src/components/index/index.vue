<template>
	<div id="index">
		<index-header></index-header>
		<div>
			<router-view></router-view>
		</div>
		
	</div>
</template>
<script>
	import IndexHeader from '@/components/indexHeader/indexHeader'
	export default {
		data () {
			return {
			}
		},
		components:{
			IndexHeader
		},
		beforeRouteUpdate (to, from, next) {
		    this.$store.commit('clearGif',true)
		    next()
		},
		beforeRouteLeave(to, from, next) {
			this.$store.commit('clearGif',true)
		    next()
		}
	}
</script>

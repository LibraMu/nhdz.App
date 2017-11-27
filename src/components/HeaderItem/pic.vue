<template>
	<!-- 推荐 -->
	<div class="recommend">
		<child-module :type='type'></child-module>
	</div>
</template>
<script>
	import ChildModule from './indexModule'
	export default {
		components: {
			ChildModule
		},
		data() {
			return {
				type:103
			}
		}
	}
</script>
<style scoped lang='less'>

</style>
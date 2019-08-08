<template>
<div class="bg-look">
  	<div class="container">
		<div class="row">
			<div class="col-md-6 col-xs-12">
				<div class="grid">GRID LAYOUT 2 COLUMNS</div>
				</div>

				<div class="col-md-6 col-xs-12">
				<div class=" txt">AnyMovie > Grid Layout 2 Columns</div>
			</div>


		</div>		
	</div>
</div>

</template>

<script>
export default {
	name: 'subSection',
};
</script>

<style lang="scss" scoped>
.bg-look {
	background: #000000db;
	color: white;
	height: 150px;
}
.grid {
	margin: 59px 50px;
	font-size: 30px;
	margin-left: -111px;
}
.txt {
	float: right;
	margin: 70px 60px;
	font-size: 10px;
	margin-right: 14px;
}
.row {
	padding: 0px;
}

@media (min-width: 481px) and (max-width: 767px) {
	.grid {
		margin: 59px 50px;
		font-size: 20px;
		margin-left: -203px;
	}
	.txt {
		float: right;
		margin: -83px 60px;
		font-size: 10px;
		margin-right: -31px;
	}
}

@media (min-width: 320px) and (max-width: 480px) {
	.grid {
		margin: 44px 12px;
		font-size: 20px;
		margin-left: -11px;
	}
	.txt {
		float: right;
		font-size: 10px;
		margin-top: -39px;
		margin-right: 72px;
	}
}
</style>


<template>
<header>
	<div class="bg-look">
		<div class="container">
			<div class="row">

				<div class="text">
				<p class="float-left font-weight-bold">VIP SWEEPSTAKES </p>
				</div>

				<div class="text1">
  				<p class="font-weight-bold">$5000 SHOPPING SPREE </p>
 				</div>

 				<div class="text2">
    			<p class="font-weight-normal">Join Movies VIP for a chance to win.Don't forget to join during checkout.</p>
 				</div>

   				<div class="login">
  				<p class ="float-right">Login</p>   
				</div>
		</div>
 	</div>
</div>

</header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bg-look {
	background: black;
	margin-top: 10px;
}
.text {
	background: plum;
	display: block;
	color: white;
	margin-left: 13px;
	font-size: 10px;
	text-align: center;
	p {
		margin-bottom: 1rem;
		margin-top: 1rem;
	}
}
.text1 {
	color: orange;
	margin-left: 10px;
	font-size: 10px;
	p {
		margin-top: 0;
		margin-bottom: 1rem;
		margin-top: 1rem;
	}
}
.text2 {
	color: grey;
	margin-left: 10px;
	p {
		margin-top: 0;
		margin-bottom: 1rem;
		margin-top: 1rem;
		font-size: 10px;
	}
}
.login {
	color: grey;
	text-align: right;
	margin-left: 90px;
	p {
		margin-bottom: 1rem;
		margin-top: 1rem;
		font-size: 10px;
		margin-left: 417px;
	}
}
/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

@media (min-width: 481px) and (max-width: 767px) {
	.text2 {
		color: grey;
		margin-left: 10px;
		p {
			margin-bottom: 1rem;
			margin-top: 1rem;
			font-size: 10px;
			margin-right: -2rem;
		}
	}
	.login {
		color: grey;
		text-align: right;
		margin-left: 90px;
		p {
			margin-bottom: 1rem;
			margin-top: -2rem;
			font-size: 10px;
			margin-left: 504px;
		}
	}
}

/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/

@media (min-width: 320px) and (max-width: 480px) {
	.text2 {
		color: grey;
		margin-left: 10px;
		p {
			margin-top: 0;
			margin-bottom: 2rem;
			margin-top: 1rem;
			margin-left: -11px;
			font-size: 10px;
		}
	}
	.login {
		color: grey;
		text-align: right;
		margin-left: 90px;
		p {
			margin-bottom: 1rem;
			margin-top: -1rem;
			font-size: 10px;
			margin-left: 179px;
		}
	}
}
</style>

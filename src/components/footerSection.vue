<template>
<div class="bg-look">
  <div class="container">
    <div class="row">
      
  <!-- Footer Top -->
      
<div class="col-md-3">
   <h6 class="txt text-left blog font-weight-bold" >Moviak.com</h6>
      <p class="txt text-left">Moviak is an online platform that allows users to book tickets for movies, 
          sporting events and concerts.</br> 
          Moviak was founded in 2007.</p>
          </div>

<div class="col-md-3">
    <h6 class="txt text-left blog font-weight-bold">Custom Services</h6>
      <p class="txt text-left">Help and Contact</p>
        <p class="txt text-left">Return Policy</p>
        <p class="txt text-left">Careers</p>
        </div>

<div class="col-md-3">
   <h6 class="txt text-left blog font-weight-bold">Recent Posts</h6>
   <p class="txt text-left">Doctor Strange assemble with the Avengers</p>
    <p class="txt text-left">5 movies to watch this week(29 Sep 2016)</p>
    </div>

<div class="col-md-3">
  <h6 class="txt text-left blog font-weight-bold">Contact Us</h6>
  <p class="txt text-left"> 9067 Zunich, Switzerland 87</p>
  <p class="txt text-left"> abc@gmail.com</p>
  <p class="txt text-left"> + 01 234 567 8</p>
</div>

  <!-- Footer End -->


<div class="title col-md-6">
<p class="txt">© Copyright2016Movies</p>
</div>

<div class="title col-md-6">
<p class="txt">Privacy Policy Terms Of Us Site Map</p>
</div>



</div>
</div>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bg-look {
	background-image: url('../assets/images/footer.jpg');
	margin-top: 50px;
	padding: 101px;
	background-repeat: no-repeat;
	background-size: cover;

	.txt {
		color: white;
		padding-top: 10px;
		font-size: 12px;
	}
	.title {
		padding-bottom: 5px;
		padding-right: -15px;
	}
	.blog {
		font-size: 18px;
	}
}

@media (min-width: 481px) and (max-width: 767px) {
	.bg-look {
		background-image: url('../assets/images/footer.jpg');
		margin-top: 15px;
		padding: 13px;
		background-repeat: no-repeat;
		background-size: cover;
	}
}

@media (min-width: 320px) and (max-width: 480px) {
	.bg-look {
		background-image: url('../assets/images/footer.jpg');
		margin-top: 21px;
		padding: 10px;
		background-repeat: no-repeat;
		background-size: cover;
	}
}
</style>

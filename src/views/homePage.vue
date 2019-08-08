<template>
<div class="home">
<headerSection/>
<subHeaderSection/>
<subSection/>
<cardImage/> 
<footerSection/>
</div>
</template>

<script>
import headerSection from '@/components/headerSection.vue';
import subHeaderSection from '@/components/subHeaderSection.vue';
import subSection from '@/components/subSection.vue';
import cardImage from '@/components/cardImage.vue';
import footerSection from '@/components/footerSection.vue';

export default {
	name: 'homePage',
	components: {
		headerSection,
		subHeaderSection,
		subSection,
		cardImage,
		footerSection,
	},
};
</script>
<style lang="scss" scoped>

</style>

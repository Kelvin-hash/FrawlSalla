const container = document.querySelector('.screenshotcontent');
const jumbo = document.querySelector('.jumbo');
const imgss1 = document.querySelectorAll('.imgss1');

container.addEventListener('click',function(e){
	if(e.target.className=='imgss1'){
		jumbo.src=e.target.src;
		jumbo.classList.add('fade');
		setTimeout(function(){
			jumbo.classList.remove('fade');
		},500);
		
		imgss1.forEach(function(imgss1){
			imgss1.className='imgss1';
		});

		e.target.classList.add('screenshotactive');
	}
});

document.addEventListener('DOMContentLoaded', () => {

	function maskPhone(selector, masked = '+7 (___) ___-__-__') {
		const elems = document.querySelectorAll(selector);
	
		function mask(event) {
			const keyCode = event.keyCode;
			const template = masked,
				def = template.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, "");
			let i = 0,
				newValue = template.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
				});
			i = newValue.indexOf("_");
			if (i !== -1) {
				newValue = newValue.slice(0, i);
			}
			let reg = template.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}";
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
				this.value = newValue;
			}
			if (event.type === "blur" && this.value.length < 5) {
				this.value = "";
			}
	
		}
	
		for (const elem of elems) {
			elem.addEventListener("input", mask);
			elem.addEventListener("focus", mask);
			elem.addEventListener("blur", mask);
		}
		
	}
	
	maskPhone('input[type="tel"]')

	document.addEventListener('scroll', e => {
		if ($('header').offset().top > 20) {
			document.querySelector('header').classList.add('scroll')
		} else {
			document.querySelector('header').classList.remove('scroll')
		}
	})

	// SWIPER

	var swiper = new Swiper(".top__slider", {
		autoplay: {
		  delay: 10000,
		  disableOnInteraction: false,
		},
		pagination: {
			el: ".pagination",
		},
	});

	var swiper1 = new Swiper(".catalog__slider", {
		navigation: {
			nextEl: ".arrow.right",
			prevEl: ".arrow.left",
		},
		slidesPerView: "auto",
      	spaceBetween: 30,
	});

	const InfImg = new Swiper("section.infrastructure .img__slider.swiper", {});
	const InfInfo = new Swiper("section.infrastructure .info__slider.swiper", {
		navigation: {
			nextEl: "section.infrastructure .arrow.next",
			prevEl: "section.infrastructure .arrow.prev",
		},
	});

	const swipeAllSliders = (index) => {
		InfImg.slideTo(index);
		InfInfo.slideTo(index);
	}

	InfImg.on('slideChange', () => swipeAllSliders(InfImg.activeIndex));
	InfInfo.on('slideChange', () => swipeAllSliders(InfInfo.activeIndex));

	
	const BenImg = new Swiper("section.benefits .img__slider.swiper", {});
	const BenInfo = new Swiper("section.benefits .info__slider.swiper", {
		navigation: {
			nextEl: "section.benefits .arrow.next",
			prevEl: "section.benefits .arrow.prev",
		},
	});

	const swipeBenefitsSliders = (index) => {
		BenImg.slideTo(index);
		BenInfo.slideTo(index);
	}

	BenImg.on('slideChange', () => swipeBenefitsSliders(BenImg.activeIndex));
	BenInfo.on('slideChange', () => swipeBenefitsSliders(BenInfo.activeIndex));

	// NAV 

	// document.querySelector('.mobile__menu').addEventListener('click', e => {
	// 	e.preventDefault()
	// 	if (e.target.textContent == 'Меню') {
	// 		e.target.innerHTML = 'Закрыть'
	// 		e.target.classList.add('active')
	// 		document.querySelector('.nav__container').classList.add('active')
	// 	} else if (e.target.textContent == 'Закрыть') {
	// 		e.target.classList.remove('active')
	// 		document.querySelector('.nav__container').classList.remove('active')
	// 		e.target.innerHTML = 'Меню'
	// 	}
	// })

	// document.querySelectorAll('a.nav__link').forEach(btn => {
	// 	btn.addEventListener('click', e => {
	// 		document.querySelector('.mobile__menu').classList.remove('active')
	// 		document.querySelector('.nav__container').classList.remove('active')
	// 		document.querySelector('.mobile__menu').innerHTML = 'Меню'
	// 	})
	// })

	// SMOOTH SCROLL

	// Smooth scroll when link clicked
	const $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 800);
		return false;
	});


})




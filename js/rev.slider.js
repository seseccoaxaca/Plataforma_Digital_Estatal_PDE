var dzrevapi;
var dzQuery =jQuery;
'use strict';

/* Slider 1 */
function dz_rev_slider_1(){
	if(dzQuery("#rev_slider_486_1").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_486_1");
	}else{
		dzrevapi = dzQuery("#rev_slider_486_1").show().revolution({
			sliderType:"standard",
			jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout:"fullwidth",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
					keyboardNavigation: "on",
					keyboard_direction: "vertical",
					mouseScrollNavigation: "off",
					onHoverStop: "off",
					touch: {
						touchenabled: "on",
						swipe_threshold: 75,
						swipe_min_touches: 1,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					},
					arrows: {
						style: "erinyen",
						enable: true,
						hide_onmobile: false,
						hide_onleave: false,
						tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div>    <div class="tp-arr-img-over"></div>	<span class="tp-arr-titleholder">{{title}}</span> </div>',
						left: {
							h_align: "left",
							v_align: "center",
							h_offset: 10,
							v_offset: 0
						},
						right: {
							h_align: "right",
							v_align: "center",
							h_offset: 10,
							v_offset: 0
						}
					},
					
				},
			
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1240,1024,778,480],
			gridheight:[650,650,600,500],
			lazyType:"none",
			parallax: {
				type:"",
				origo:"enterpoint",
				speed:400,
				levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
			},
			shadow:0,
			spinner:"off",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			shuffle:"off",
			autoHeight:"off",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
	
}

/* Slider 2 */
function dz_rev_slider_2(){
	if(dzQuery("#rev_slider_1059_1").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_1059_1");
	}else{
		dzrevapi = dzQuery("#rev_slider_1059_1").show().revolution({
			sliderType:"standard",
			jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout:"fullwidth",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
				keyboardNavigation: "on",
				keyboard_direction: "horizontal",
				mouseScrollNavigation: "off",
				onHoverStop: "off",
				touch: {
					touchenabled: "on",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				},
				arrows: {
					style: "hesperiden",
					enable: true,
					hide_onmobile: false,
					hide_onleave: false,
					tmp: '',
					left: {
						h_align: "left",
						v_align: "center",
						h_offset: 30,
						v_offset: 0
					},
					right: {
						h_align: "right",
						v_align: "center",
						h_offset: 30,
						v_offset: 0
					}
				},
				
				
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1240,1024,778,480],
			gridheight:[650,650,600,500],
			lazyType:"none",
			parallax: {
				type:"scroll",
				origo:"slidercenter",
				speed:1000,
				levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,100,55],
			},
			shadow:0,
			spinner:"off",
			stopLoop:"on",
			stopAfterLoops:-1,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "60px",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
}

/* Slider 3 */
function dz_rev_slider_3(){
	if(dzQuery("#rev_slider_1059_1").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_1059_1");
	}else{
		dzrevapi = dzQuery("#rev_slider_1059_1").show().revolution({
			sliderType:"standard",
			jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout:"fullwidth",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
				keyboardNavigation: "on",
				keyboard_direction: "horizontal",
				mouseScrollNavigation: "off",
				onHoverStop: "off",
				touch: {
					touchenabled: "on",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				},
				arrows: {
					style: "hesperiden",
					enable: true,
					hide_onmobile: false,
					hide_onleave: false,
					tmp: '',
					left: {
						h_align: "left",
						v_align: "center",
						h_offset: 30,
						v_offset: 0
					},
					right: {
						h_align: "right",
						v_align: "center",
						h_offset: 30,
						v_offset: 0
					}
				},
				bullets: {
					enable: true,
					hide_onmobile: false,
					style: "hesperiden",
					hide_onleave: false,
					direction: "horizontal",
					h_align: "left",
					v_align: "bottom",
					h_offset: 20,
					v_offset: 20,
					space: 5,
					tmp: ''
				},
				thumbnails: {
					style: "hesperiden",
					enable: true,
					width: 100,
					height: 50,
					min_width: 100,
					wrapper_padding: 5,
					wrapper_color: "#ffffff",
					wrapper_opacity: "0.5",
					tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title">{{title}}</span>',
					visibleAmount: 5,
					hide_onmobile: false,
					hide_onleave: false,
					direction: "horizontal",
					span: false,
					position: "inner",
					space: 5,
					h_align: "right",
					v_align: "bottom",
					h_offset: 20,
					v_offset: 50
				},
				
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1240,1024,778,480],
			gridheight:[650,650,600,500],
			lazyType:"none",
			parallax: {
				type:"scroll",
				origo:"slidercenter",
				speed:1000,
				levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,100,55],
			},
			shadow:0,
			spinner:"off",
			stopLoop:"on",
			stopAfterLoops:-1,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "60px",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
}

/* Slider 4 */
function dz_rev_slider_4(){
	if(dzQuery("#rev_slider_1059_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_1059_1");
		}else{
			dzrevapi = dzQuery("#rev_slider_1059_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
				sliderLayout:"fullscreen",
				dottedOverlay:"none",
				delay:9000,
				startwidth:1200,
				startheight:800,
				navigation: {
					keyboardNavigation: "on",
					keyboard_direction: "horizontal",
					mouseScrollNavigation: "off",
					onHoverStop: "off",
					touch: {
						touchenabled: "on",
						swipe_threshold: 75,
						swipe_min_touches: 1,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					},
					arrows: {
						style: "hesperiden",
						enable: true,
						hide_onmobile: false,
						hide_onleave: false,
						tmp: '',
						left: {
							h_align: "left",
							v_align: "center",
							h_offset: 30,
							v_offset: 0
						},
						right: {
							h_align: "right",
							v_align: "center",
							h_offset: 30,
							v_offset: 0
						}
					},
					bullets: {
						enable: true,
						hide_onmobile: false,
						style: "hesperiden",
						hide_onleave: false,
						direction: "horizontal",
						h_align: "left",
						v_align: "bottom",
						h_offset: 20,
						v_offset: 20,
						space: 5,
						tmp: ''
					},
					thumbnails: {
						style: "hesperiden",
						enable: true,
						width: 100,
						height: 50,
						min_width: 100,
						wrapper_padding: 5,
						wrapper_color: "#ffffff",
						wrapper_opacity: "0.5",
						tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title">{{title}}</span>',
						visibleAmount: 5,
						hide_onmobile: false,
						hide_onleave: false,
						direction: "horizontal",
						span: false,
						position: "inner",
						space: 5,
						h_align: "right",
						v_align: "bottom",
						h_offset: 20,
						v_offset: 50
					},
					
				},
				responsiveLevels:[1240,1024,778,480],
				visibilityLevels:[1240,1024,778,480],
				gridwidth:[1240,1024,778,480],
				gridheight:[650,650,600,500],
				lazyType:"none",
				parallax: {
					type:"scroll",
					origo:"slidercenter",
					speed:1000,
					levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,100,55],
				},
				lazyType:"none",
				shadow:0,
				spinner:"off",
				stopLoop:"on",
				stopAfterLoops:0,
				stopAtSlide:1,
				shuffle:"off",
				autoHeight:"off",
				fullScreenAutoWidth:"off",
				fullScreenAlignForce:"off",
				fullScreenOffsetContainer: "",
				fullScreenOffset: "0px",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
}

/* Slider 5 */
function dz_rev_slider_5(){
	if(dzQuery("#rev_slider_1059_1").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_1059_1");
	}else{
		dzrevapi = dzQuery("#rev_slider_1059_1").show().revolution({
			sliderType:"standard",
			jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout:"fullwidth",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
				mouseScrollReverse:"default",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					swipe_threshold: 75,
					swipe_min_touches: 50,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
				,
				bullets: {
					enable:true,
					hide_onmobile:true,
					hide_under:800,
					style:"zeus",
					hide_onleave:false,
					direction:"horizontal",
					h_align:"center",
					v_align:"bottom",
					h_offset:0,
					v_offset:30,
					space:5,
					tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title">{{title}}</span>'
				}
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1240,1024,778,480],
			gridheight:[650,650,600,500],
			lazyType:"none",
			parallax: {
				type:"scroll",
				origo:"slidercenter",
				speed:1000,
				levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,100,55],
			},
			shadow:0,
			spinner:"off",
			stopLoop:"on",
			stopAfterLoops:-1,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "60px",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
}
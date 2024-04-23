<!--inicio de cabezara-->
<?php 
include 'layout/menu.php';
?>
    <!-- header END -->
    <!-- Content -->
    <div class="page-content">
        <!-- inner page banner -->
        <div class="dez-bnr-inr overlay-black-middle" style="background-image:url(images/background/bg4.jpg);">
            <div class="container">
                <div class="dez-bnr-inr-entry">
                    <h1 class="text-white">Contact Us</h1>
                </div>
            </div>
        </div>
        <!-- inner page banner END -->
        <!-- Breadcrumb row -->
        <div class="breadcrumb-row">
            <div class="container">
                <ul class="list-inline">
                    <li><a href="#">Home</a></li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
        <!-- Breadcrumb row END -->
        <!-- contact area -->
        <div class="section-full content-inner bg-white contact-style-1">
			<div class="container">
                <div class="row">
                    <!-- Left part start -->
                    <div class="col-lg-8">
                        <div class="p-a30 bg-gray clearfix m-b30 ">
							<h2>Send Message Us</h2>
							<div class="dzFormMsg"></div>
							<form method="post" class="dzForm" action="script/contact.php">
							<input type="hidden" value="Contact" name="dzToDo" >
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <div class="input-group">
                                                <input name="dzName" type="text" required class="form-control" placeholder="Your Name">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <div class="input-group"> 
											    <input name="dzEmail" type="email" class="form-control" required  placeholder="Your Email Id" >
                                            </div>
                                        </div>
                                    </div>
									<div class="col-md-6">
                                        <div class="form-group">
                                            <div class="input-group">
                                                <input name="dzOther[Phone]" type="text" required class="form-control" placeholder="Phone">
                                            </div>
                                        </div>
                                    </div>
									<div class="col-md-6">
                                        <div class="form-group">
                                            <div class="input-group">
                                                <input name="dzOther[Subject]" type="text" required class="form-control" placeholder="Subject">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="input-group">
                                                <textarea name="dzMessage" rows="4" class="form-control" required placeholder="Your Message..."></textarea>
                                            </div>
                                        </div>
                                    </div>
									<div class="col-lg-12">
										<div class="form-group">
											<div class="input-group">
												<div class="g-recaptcha" data-sitekey="<!-- Put reCaptcha Site Key -->" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
												<input class="form-control d-none" style="display:none;" data-recaptcha="true" required data-error="Please complete the Captcha">
											</div>
										</div>
									</div>
                                    <div class="col-md-12">
                                        <button name="submit" type="submit" value="Submit" class="site-button "> <span>Submit</span> </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- Left part END -->
                    <!-- right part start -->
                    <div class="col-lg-4 d-flex">
                        <div class="p-a30 m-b30 border-1 contact-area align-self-stretch">
							<h2 class="m-b10">Quick Contact</h2>
							<p>If you have any questions simply use the following contact details.</p>
                            <ul class="no-margin">
                                <li class="icon-bx-wraper left m-b30">
                                    <div class="icon-bx-xs bg-primary"> <a href="#" class="icon-cell"><i class="fa fa-map-marker"></i></a> </div>
                                    <div class="icon-content">
                                        <h6 class="text-uppercase m-tb0 dez-tilte">Address:</h6>
                                        <p>123 West Street, Melbourne Victoria 3000 Australia</p>
                                    </div>
                                </li>
                                <li class="icon-bx-wraper left  m-b30">
                                    <div class="icon-bx-xs bg-primary"> <a href="#" class="icon-cell"><i class="fa fa-envelope"></i></a> </div>
                                    <div class="icon-content">
                                        <h6 class="text-uppercase m-tb0 dez-tilte">Email:</h6>
                                        <p>info@company.com</p>
                                    </div>
                                </li>
                                <li class="icon-bx-wraper left">
                                    <div class="icon-bx-xs bg-primary"> <a href="#" class="icon-cell"><i class="fa fa-phone"></i></a> </div>
                                    <div class="icon-content">
                                        <h6 class="text-uppercase m-tb0 dez-tilte">PHONE</h6>
                                        <p>+61 3 8376 6284</p>
                                    </div>
                                </li>
                            </ul>
							<div class="m-t20">
								<ul class="dez-social-icon dez-social-icon-lg">
									<li><a href="javascript:void(0);" class="fa fa-facebook bg-primary"></a></li>
									<li><a href="javascript:void(0);" class="fa fa-twitter bg-primary"></a></li>
									<li><a href="javascript:void(0);" class="fa fa-linkedin bg-primary"></a></li>
									<li><a href="javascript:void(0);" class="fa fa-pinterest-p bg-primary"></a></li>
									<li><a href="javascript:void(0);" class="fa fa-google-plus bg-primary"></a></li>
								</ul>
							</div>
                        </div>
                    </div>
                    <!-- right part END -->
                </div>
				<div class="row m-b30">
					<div class="col-md-12">
					<!-- Map part start -->
					<h2>Our Location</h2>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1500819483219" style="border:0; width:100%; height:400px;" allowfullscreen></iframe>
					<!-- Map part END -->
					</div>
				</div>
            </div>
        </div>
        <!-- contact area  END -->
    </div>
    <!-- Content END-->
    <!-- Footer pie de pagina -->
	<?php 
	
	include 'layout/footer.php';
	
	?>
	<!-- Footer END-->
    <!-- scroll top button -->
    <button class="scroltop fa fa-arrow-up" ></button>
</div>
<!-- JavaScript  files ========================================= -->
<script src="js/jquery.min.js"></script><!-- JQUERY.MIN JS -->
<script src="plugins/bootstrap/js/popper.min.js"></script><!-- BOOTSTRAP.MIN JS -->
<script src="plugins/bootstrap/js/bootstrap.min.js"></script><!-- BOOTSTRAP.MIN JS -->
<script src="plugins/bootstrap-select/bootstrap-select.min.js"></script><!-- FORM JS -->
<script src="plugins/bootstrap-touchspin/jquery.bootstrap-touchspin.js"></script><!-- FORM JS -->
<script src="plugins/magnific-popup/magnific-popup.js"></script><!-- MAGNIFIC POPUP JS -->
<script src="plugins/counter/waypoints-min.js"></script><!-- WAYPOINTS JS -->
<script src="plugins/counter/counterup.min.js"></script><!-- COUNTERUP JS -->
<script src="plugins/imagesloaded/imagesloaded.js"></script><!-- IMAGESLOADED -->
<script src="plugins/masonry/masonry-3.1.4.js"></script><!-- MASONRY -->
<script src="plugins/masonry/masonry.filter.js"></script><!-- MASONRY -->
<script src="plugins/owl-carousel/owl.carousel.js"></script><!-- OWL SLIDER -->
<script src="js/custom.min.js"></script><!-- CUSTOM FUCTIONS  -->
<script src="js/dz.carousel.min.js"></script><!-- SORTCODE FUCTIONS  -->

<script src='https://www.google.com/recaptcha/api.js'></script> <!-- Google API For Recaptcha  -->
<script src="js/dz.ajax.js"></script><!-- CONTACT JS  -->
<div id="loading-area"></div>

</body>
</html>

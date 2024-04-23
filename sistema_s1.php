<!-- header inicio -->
<!--inicio de cabezara-->
<?php 
include 'layout/menu.php';
?>
    <!-- header END -->
    <!-- Content -->
    <div class="page-content">
        <!-- infor pagina banner -->
        <div class="dez-bnr-inr overlay-black-middle" style="background-image:url(images/manos_equipo.jpg);">
            <div class="container">
                <div class="dez-bnr-inr-entry">
                    <h1 class="text-white"><strong>S1 -</strong> Sistema de evolución patrimonial, declaración de intereses y constancia de presentación de declaración fiscal.</h1>
                    <p class="text-white">Artículo 33. El objeto del sistema es permitir la inscripción de los datos de los servidores públicos obligados a presentar declaración patrimonial y de interés,
                 así como de garantizar la inscripción de la constancia de la declaración anual de impuesta que emita la autoridad fiscal competente.</p>              
                </div>
            </div>
        </div>
        <!-- inner page banner END -->
        <!-- contact area -->
        <div class="section-full content-inner bg-white contact-style-1">
			<div class="container">
                <div class="row">
					<!-- Left part start -->
                    <div class="col-lg-12">
                        <div class="p-a30 bg-gray clearfix m-b30 ">
							<h2>BÚSQUEDA DE SERVIDORES PÚBLICOS</h2>
							<div class="dzFormMsg"></div>
							<form method="post" class="dzForm" action="script/contact.php">
							<input type="hidden" value="Contact" name="dzToDo" >
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
											<label>TIPO DE DECLARACIÓN</label>
												<select name="dzName" id="" required  >
													<option value="">Inicial</option>
													<option value="">Modificación</option>
													<option value="">Conclusión</option>
												</select>
                                        </div>
                                    </div>
                                </div>
								<div class="row">
									<div class="col-md-4">
                                        <div class="form-group">
                                            <div class="input-group"> 
											    <input name="dzEmail" type="email" class="form-control" required  placeholder="NOMBRE" >
                                            </div>
                                        </div>
                                    </div>
									<div class="col-md-4">
                                        <div class="form-group">
                                            <div class="input-group">
                                                <input name="dzOther[Phone]" type="text" required class="form-control" placeholder="PRIMER APELLIDO">
                                            </div>
                                        </div>
                                    </div>
									<div class="col-md-4">
										<div class="form-group">
											<div class="input-group">
												<input name="dzOther[Phone]" type="text" required class="form-control" placeholder="SEGUNDO APELLIDO">
											</div>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
                                        <div class="form-group">
                                            <div class="input-group"> 
											    <input name="dzEmail" type="email" class="form-control" required  placeholder="ENTE PÚBLICO" >
                                            </div>
                                        </div>
                                    </div>
								</div>
								<div class="row">
									<div class="col-md-4">
                                        <div class="form-group">
											<label>API INTERCONECTADA</label>
                                            <div class="input-group"> 
											    <input name="dzEmail" type="email" class="form-control" required  placeholder="API INTERCONECTADA" >
                                            </div>
                                        </div>
                                    </div>
									<div class="col-md-4">
                                        <div class="form-group">
											<label>FECHA DE INICIO</label>
                                            <div class="input-group">
                                                <input name="dzOther[Phone]" type="date" required class="form-control" placeholder="FE">
                                            </div>
                                        </div>
                                    </div>
									<div class="col-md-4">
										<div class="form-group">
											<label>FECHA DE FIN</label>

											<div class="input-group">
												<input name="dzOther[Phone]" type="date" required class="form-control" placeholder="SEGUNDO APELLIDO">
											</div>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<button name="submit" type="submit" value="Submit" class="site-button "> <span>Buscar</span> </button>
									</div>
								</div>
                            </form>
                        </div>
                    </div>
                    <!-- Left part END -->
					<!-- right part start -->
                   <!--<div class="col-lg-6 m-b30 d-flex">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1500819483219" class="align-self-stretch m-b30" style="border:0; width:100%; min-height:350px; height: 100%;" allowfullscreen></iframe>
                    </div>-->
                    <!-- right part END -->
                </div>
            </div>
        </div>
        <!-- contact area  END -->
    </div>
    <!-- Content END-->
    <!-- Footer -->
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

<!-- header inicio -->
<!--inicio de cabezara-->
<?php 
include 'layout/menu5.php';
?>
    <!-- header END -->
    <!-- Content -->
    <div class="page-content bg-white">
        <!-- inner page banner -->
        <div class="dez-bnr-inr overlay-black-middle" style="background-image:url(images/manos_equipo.jpg);">
            <div class="container">
                <div class="dez-bnr-inr-entry">
                    <h1 class="text-white">Retos</h1>
                </div>
            </div>
        </div>
        <!-- inner page banner END -->
        <!-- contact area -->
        <div class="content-area">
            <!-- Career -->
            <div class="container">
                <div class="row">
                    <!-- Left part start -->
                    <div class="col-lg-9 col-md-7 m-b30">
                        <h1 class="m-b20 m-t0">Oaxaca en el contexto económico nacional</h1>
                        <div class="dez-separator bg-primary"></div>
                        <p><strong>El estado de Oaxaca enfrenta una serie de desafíos importantes en términos de bienestar, según los indicadores proporcionados por la Organización para la Cooperación y el Desarrollo Económicos (OCDE).</strong></p>
                        <h2 class="m-t30 m-b10 ">Indicadores de bienestar para el estado de Oaxaca.</h2>
                        <ul class="list-check-circle primary">
                            <li>Porcentaje de la población con acceso a los servicios de salud.</li>
                            <li>Porcentaje de hogares con buena calidad de servicios (agua entubada,drenaje y electricidad).</li>
                            <li>Nivel educativo: porcentaje de la población económicamente activa de 15 años y más que cuenta con al menos educación media superior respecto a la población económicamente activa de 15 años y más. </li>
                            <li>Gini del ingreso disponible de los hogares per cápita.</li>
                            <li>Tasa de pobreza: porcentaje de población cuyo ingreso es inferior al valor de la línea de bienestar y que padece al menos una carencia social. </li>
                            <li>Tasa de pobreza extrema: porcentaje de población que padece tres o más carencias sociales y cuyo ingreso es inferior a la línea de bienestar mínimo. </li>
                        
						</ul>                            
					 </div>
                    <!-- Left part start END -->
                    <!-- Right part start -->
                    <div class="col-lg-3 col-md-5">
                        <div class="row">
						</div>
                    </div>
                    <!-- Right part start END -->
                </div>
            </div>
            <!-- Career END -->
        </div>
        <!-- contact area END -->
    </div>
    <!-- Content END-->
	<div class="chat-button" id="chatButton">
        <img src="images/sistemas2/asistente/chat_verde.png" alt="Chat Icon" title="Asistente Virtual">
    </div>
    <div class="chat-popup" id="chatPopup">
        <div class="chat-content">
            <!-- Aquí coloca el contenido del chatbot -->
			<div class="chat-container">
				<div class="chat-header">
					<h2 style="color:#9e264b !important;"><strong>PDE-Oaxaca</strong></h2><hr>
					<p>Bienvenido al Asistente virtual, ¿En que podemos ayudarte?</p>
					<button hidden id="toggleChat">Abrir Chat</button>
				</div>
				<div class="chat-body" id="chatBody">
					<!-- Aquí se mostrarán los mensajes del chat -->
				</div>
				<div class="chat-footer">
					<div class="row">
						<div class="col-md-8">
							<input type="text" id="userInput" class="form-control" placeholder="Escribe un mensaje...">
						</div>
						<div class="col-md-4">
							<button id="sendMessage" class="btn btn-primary" >Enviar</button>
						</div>
					</div>
				</div>
			</div>
        </div>
        <span class="close" id="closeChat">&times;</span>
    </div>
	<!-- Footer -->
	<?php 
	
	include 'layout/footer.php';
	
	?>
	<!-- Footer END-->
    <!-- scroll top button -->
    <button class="scroltop fa fa-arrow-up" ></button>
</div>
<!-- JavaScript  files ========================================= -->
<script src="script/script.js"></script>
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

<script src="js/dz.ajax.js"></script><!-- CONTACT JS  -->
<div id="loading-area"></div>

</body>
</html>

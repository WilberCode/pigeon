<div class="modal-wrap" id="modal-wrap"  >
		<div  class="modal-close-wrap" id="modal-close-wrap" ></div>
		<div  class="modal" > 
			<button class="modal-close" id="modal-close" >X</button>
			<section class=" modal-body "> 
				<section class=" modal-content  "  > 
					<h2>Suscríbete y recibe <span >beneficios exclusivos</span> </h2>
					<div class="modal-message" id="modal-message" >  
							<h3>¡Gracias por  Suscribirte!</h3>  
					</div> 
					<form id="envioPigeon" data-nombre="envioPigeon" data-destino="/data/envioPigeon.php" action="/data/envioPigeon.php" class="form">
					
								<input id="correo" type="email" name="correo" class="email required" placeholder="e-mail" /> 
								<input id="nombre_completo" type="text" name="nombre_completo" class="texto required " placeholder="nombre completo" />
				
								<div class="modal-options-wrap">
									<div  class="modal-options" > 
										<label for="mama"><input id="mama" type="checkbox" name="mama" value="Si" class="email required" /> <span>Soy mamá </span> </label>
										<div  class="modal-options-date-wrap" >
											<label>Nacimiento último hijo</label>
											<div class="modal-options-date">
												<input type="text" maxlength="2" min="1" max="31"   class="number"  name="day" id="day" placeholder="día">
												<input type="text" maxlength="2" min="1" max="12"  class="number"  name="month" id="month"  placeholder="mes">
												<input type="text" maxlength="4" min="<?php echo date("Y")-5; ?>" max="<?php echo date("Y"); ?>"  class="number"  name="year" id="year" placeholder="año">
											</div>
										</div>
									</div>
									<div  class="modal-options" > 
										<label for="embarazada"><input id="embarazada" type="checkbox" name="embarazada" value="Si" class="email required" /> <span> Estoy embarazada </span> </label>
										<div  class="modal-options-date-wrap" >
											<label>Vivo en</label> 
											<select name="paises" id="paises" class="texto required" placeholder="País"> 
												<option hidden style="display: none" >PAÍS</option>
												<option value="Bolivia">Bolivia</option>
												<option value="Chile">Chile</option>
												<option value="Colombia">Colombia</option>
												<option value="Costa Rica">Costa Rica</option>
												<option value="Guatemala">Guatemala</option>
												<option value="Ecuador">Ecuador</option>
												<option value="México">México</option>
												<option value="Panamá">Panamá</option>
												<option value="Perú">Perú</option> 
											</select> 
										</div>
									</div>
								</div>
								
						<section>
							<input type="submit" value="QUIERO RECIBIR BENEFICIOS" class="submit boton_rojo"  >
						</section>
 					</form>
					 
				</section>
				<p  class="modal-info">Cuando se suscribe, está dando su consentimiento para que usemos la dirección de correo electrónico proporcionada para enviarle beneficios y la selección de contenido más relevante. Puede retirar este consentimiento y darse de baja de estos en cualquier momento. Pondremos a su disposición al final de cada email un link para poder darse de baja de forma automática.</p>
			</section>
		<!-- 	<div class="overflow" id="overflow" >
				<div  class="overflow-message py-12 md:py-16 px-10 bg-white">
					<section > 
						<h2 class="text-center  text-black font-semibold md:text-3xl ">Gracias por llenar tus datos</h2>
						<a href="https://www.albamar.com.pe/grant-miraflores/"  class="md:text-lg tracking-wider text-center block mt-6 md:mt-8 text-title font-normal font-gotham  " >Mira más en <span  class="font-bold underline " ><b>GRANT en Miraflores </b> </span> </a>

					</section>
				</div>
			</div>  -->
		</div>
	</div>



<footer id="l-footer" class="l-reset">
			<div class="footer-upper">
				<div class="upper-inner">
					<p class="upper-catch">
						<img src="/assets/svg/t_footer_catch.svg" alt="Celebrate babies the way they are"
							class="hide-tab hide-pc">
						<img src="/assets/svg/t_footer_catch_pc.svg" alt="Celebrate babies the way they are"
							class="hide-sp">
					</p>
				 <ul class="upper-sns">
				 		<li class="sns-item">
							<a href="/tiendaslatam/" class="item-inner" target="_blank"
								rel="noopener">
								<svg xmlns="http://www.w3.org/2000/svg" width="86.88" height="86.88"
									viewBox="0 0 86.88 86.88">
									<path
										d="M82.09,0H4.78A4.78,4.78,0,0,0,0,4.8V82.09a4.79,4.79,0,0,0,4.78,4.79H46.41V53.27H35.12V40.13H46.41V30.46c0-11.24,6.84-17.34,16.87-17.34a93.72,93.72,0,0,1,10.12.51V25.36H66.47C61,25.36,60,28,60,31.75v8.38H73L71.3,53.27H60V86.88h22.1a4.8,4.8,0,0,0,4.79-4.79V4.8A4.79,4.79,0,0,0,82.09,0"
										style="fill:#fff"></path>
								</svg>
							</a>
						</li>
						<li class="sns-item">
							<a href="/tiendaslatam/" class="item-inner" target="_blank"
								rel="noopener">
								<svg xmlns="http://www.w3.org/2000/svg" width="86.88" height="86.88"
									viewBox="0 0 86.88 86.88">
									<path d="M43.45,33A10.47,10.47,0,1,0,53.89,43.43,10.46,10.46,0,0,0,43.45,33"
										style="fill:#fff"></path>
									<path
										d="M67.92,24.91A10.51,10.51,0,0,0,62,19a17.68,17.68,0,0,0-5.84-1.07c-3.3-.16-4.29-.2-12.67-.2s-9.38,0-12.69.2A17.43,17.43,0,0,0,24.93,19a9.62,9.62,0,0,0-3.6,2.35A9.84,9.84,0,0,0,19,24.91a17.57,17.57,0,0,0-1.08,5.85c-.15,3.29-.18,4.29-.18,12.67s0,9.36.18,12.69A17.15,17.15,0,0,0,19,61.93a9.68,9.68,0,0,0,2.36,3.62,9.34,9.34,0,0,0,3.6,2.33A16.66,16.66,0,0,0,30.76,69c3.31.14,4.29.18,12.69.18s9.37,0,12.67-.18A16.9,16.9,0,0,0,62,67.88a9.49,9.49,0,0,0,3.6-2.33,9.68,9.68,0,0,0,2.36-3.62A17.48,17.48,0,0,0,69,56.12c.16-3.33.18-4.31.18-12.69s0-9.38-.18-12.67a17.91,17.91,0,0,0-1.07-5.85M43.45,59.54A16.12,16.12,0,1,1,59.56,43.43,16.09,16.09,0,0,1,43.45,59.54M60.19,30.43A3.77,3.77,0,1,1,64,26.67a3.77,3.77,0,0,1-3.78,3.76"
										style="fill:#fff"></path>
									<path
										d="M82,0H4.87A4.85,4.85,0,0,0,0,4.85V82a4.87,4.87,0,0,0,4.87,4.87H82A4.87,4.87,0,0,0,86.88,82V4.85A4.85,4.85,0,0,0,82,0M74.65,56.37A23.39,23.39,0,0,1,73.18,64,16,16,0,0,1,64,73.18a22.82,22.82,0,0,1-7.62,1.45c-3.34.16-4.41.2-12.94.2s-9.59,0-12.94-.2a22.82,22.82,0,0,1-7.62-1.45,15.72,15.72,0,0,1-5.56-3.62A15.49,15.49,0,0,1,13.7,64a22.93,22.93,0,0,1-1.45-7.62c-.16-3.35-.19-4.42-.19-12.95s0-9.59.19-12.94a23,23,0,0,1,1.45-7.62,15.05,15.05,0,0,1,3.62-5.54,15.45,15.45,0,0,1,5.56-3.62,22.54,22.54,0,0,1,7.62-1.46c3.35-.15,4.42-.2,12.94-.2s9.6.05,12.94.2A22.54,22.54,0,0,1,64,13.7a15.37,15.37,0,0,1,5.56,3.62,15.18,15.18,0,0,1,3.62,5.54,23.5,23.5,0,0,1,1.47,7.62c.14,3.35.18,4.42.18,12.94s0,9.6-.18,12.95"
										style="fill:#fff"></path>
								</svg>
							</a>
						</li> 
						
					</ul>  
				</div>
			</div>



			<div class="footer-lower">
				<div class="lower-inner">
					<div class="lower-left">
						<ul class="left-menu">
							<!-- <li class="menu-item"><a href="/sitemap/" class="item-wrap">サイトマップ</a></li>
							<li class="menu-item"><a href="/about/companyinfo/company/group/"
									class="item-wrap">グループ会社</a></li>
							<li class="menu-item"><a href="/ir/management/disclosure/"
									class="item-wrap">ディスクロージャー・ポリシー</a></li>
							<li class="menu-item"><a href="/privacy/" class="item-wrap">個人情報保護方針および個人情報の取り扱いについて</a>
							</li>
							<li class="menu-item"><a href="/socialmediapolicy/" class="item-wrap">ソーシャルメディアポリシー</a></li>
							<li class="menu-item"><a href="/termsofuse/" class="item-wrap">ご利用にあたって</a></li>
							<li class="menu-item"><a href="/contact/" class="item-wrap">各種問合せ</a></li> -->
						</ul>

						<p class="left-logo">
							<a href="/" class="logo-inner">
								<span class="logo-img"><img src="/assets/svg/logo.svg" alt="pigeon"></span> 
							</a>
						</p>
					</div>

					<div class="lower-right">
						<p class="lower-copy">Copyright © Pigeon Corporation All Rights Reserved.</p>
					</div>
				</div>
			</div>
			<p class="footer-pagetop" data-pagetop>
				<a href="#top" class="pagetop-btn">
					<span class="btn-img"><img src="/assets/svg/i_arrow_pagetop.svg" alt="Volver a la pagina superior"></span>
					<span class="btn-txt">Volver a la pagina superior</span>
				</a>
			</p>


		</footer>
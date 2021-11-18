
	<div class="modal-wrap" id="modal-wrap"  >
		<div  class="modal-close-wrap" id="modal-close-wrap" ></div>
		<div  class="modal" > 
			<button class="modal-close" id="modal-close" >X</button>
			<section class=" modal-body "> 
				<section class=" modal-content  " data-maxwidth="1000"> 
					<h2>Suscríbete y recibe <span >beneficios exclusivos</span> </h2>
					<form id="formularioQuinde" data-nombre="formularioQuinde" data-destino="data/envioPigeon.php" action="data/envioPigeon.php" class="form pt-8 px-8 pb-12 ">
					
								<input id="correo" type="email" name="correo" class="email required" placeholder="e-mail" /> 
								<input id="nombresyapellidos" type="text" name="nombresyapellidos" class="texto required " placeholder="nombre completo" />
				
								<div class="modal-options-wrap">
									<div  class="modal-options" > 
										<label for="mama"><input id="mama" type="checkbox" name="mama" class="email required" /> <span>Soy mamá </span> </label>
										<div  class="modal-options-date-wrap" >
											<label>Nacimiento último hijo</label>
											<div class="modal-options-date">
												<input type="text"   name="day" placeholder="día">
												<input type="text"  name="month"  placeholder="mes">
												<input type="text" name="year" placeholder="año">
											</div>
										</div>
									</div>
									<div  class="modal-options" > 
										<label for="fecha-nacimiento"><input id="fecha-nacimiento" type="checkbox" name="fecha-nacimiento" class="email required" /> <span> Estoy embarazada </span> </label>
										<div  class="modal-options-date-wrap" >
											<label>Vivo en</label> 
											<select name="" id="" placeholder="País"> 
												<option hidden >PAÍS</option>
												<option value="peru">Bolivia</option>
												<option value="chile">Chile</option>
												<option value="chile">Colombia</option>
												<option value="chile">Costa Rica</option>
												<option value="chile">Guatemala</option>
												<option value="chile">Ecuador</option>
												<option value="chile">México</option>
												<option value="chile">Panamá</option>
												<option value="chile">Perú</option> 
											</select> 
										</div>
									</div>
								</div>
								
						<section>
							<input type="submit" value="QUIERO RECIBIR BENEFICIOS" class="submit boton_rojo py-4  md:py-5 px-20 rounded-lg tracking-wide cursor-pointer  leading-5 bg-secondary-500 text-white md:text-base  " data-minwidth="150">
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
<html>
<head>
	<title>Teste JavaScript</title>
	<meta charset="UTF-8"/>
	
	<script>
		function acendeLampada() {
			document.getElementById("luz").src = "img/lampada-acesa.jpg"
		}
		function apagaLampada() {
				document.getElementById("luz").src = "lampada-apagada.jpg"
		}
		function quebraLampada() {
			document.getElementById("luz").src = "lampada-quebrada.jpg"
				
				}

	</script>
</head>
<body>
	<h1>Acenda a lâmpada</h1>	
	<img src="lampada-apagada.jpg" id="luz" onmouseover="acendeLampada()" onmouseout="apagaLampada()" onclick="quebraLampada()"/>
</body>
</html>
let level = 0;if (fwVersion != null) {document.getElementById("firmware").innerHTML ='<span class="firmware">Firmware:' + " " + fwVersion + "</span>";}if (alertfirmware == true) {var msg ="ATTENTION! Nous avons détecté que votre PlayStation 4 fonctionne sous FW " +fwVersion +",qui n'est pas compatible avec PS4HostCS"; if (document.getElementById("menulist") != null) {document.getElementById("cache-overlay").style.display = "block";document.getElementById("menulist").style.display = "none";document.getElementById("alertfw").innerHTML='<div class="red">' + msg + "</div>";setTimeout(function (){document.getElementById("cache-overlay").style.display = "none";document.getElementById("alertfw").innerHTML ='<div class="red">PS4HostCS a été désactiver</div>';},5800);}}
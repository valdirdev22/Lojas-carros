window.onload=MapLoadScript;function GmapInit(){Gmap=$(".map-canvas");Gmap.each(function(){var a=$(this),o="",p="",y=12,u=false,z=true,l=true,s=google.maps.MapTypeId.ROADMAP,x="",b="",w=a.data("icon-path"),e=a.data("lat"),f=a.data("lng"),j=a.data("zoom"),i=a.data("type"),g=a.data("scrollwheel"),k=a.data("zoomcontrol"),d=a.data("hue"),h=a.data("title"),c=a.data("content");if(j!==undefined&&j!==false){y=parseFloat(j)}if(e!==undefined&&e!==false){o=parseFloat(e)}if(f!==undefined&&f!==false){p=parseFloat(f)}if(g!==undefined&&g!==null){u=g}if(k!==undefined&&k!==null){z=k}if(i!==undefined&&i!==false){if(i=="satellite"){s=google.maps.MapTypeId.SATELLITE}else{if(i=="hybrid"){s=google.maps.MapTypeId.HYBRID}else{if(i=="terrain"){s=google.maps.MapTypeId.TERRAIN}}}}if(h!==undefined&&h!==false){x=h}if(navigator.userAgent.match(/iPad|iPhone|Android/i)){l=false}var r={zoom:y,scrollwheel:u,zoomControl:z,draggable:l,center:new google.maps.LatLng(o,p),mapTypeId:s};var q=new google.maps.Map(a[0],r);var m=w;if(c!==undefined&&c!==false){b='<div class="map-data"><h6>'+x+'</h6><div class="map-content">'+c+"</div></div>"}var n=new google.maps.InfoWindow({content:b});var t=new google.maps.Marker({position:new google.maps.LatLng(o,p),map:q,icon:m,title:x});if(c!==undefined&&c!==false){google.maps.event.addListener(t,"click",function(){n.open(q,t)})}if(d!==undefined&&d!==false){var v=[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#d1cac7"},{visibility:"on"}]}];q.setOptions({styles:v})}})}function MapLoadScript(){var a=document.createElement("script");a.type="text/javascript";GmapInit();document.body.appendChild(a)};
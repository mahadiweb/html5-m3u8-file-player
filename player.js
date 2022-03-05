function playM3u8(url){
  if(Hls.isSupported()) {
      var video = document.getElementById('video');
      video.volume = 1.0;
      var hls = new Hls();
      var m3u8Url = window.location.search;
	  var urlParams = new URLSearchParams(m3u8Url);
	  var vurl = urlParams.get('vurl');
	  
      hls.loadSource(vurl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
      });
      document.title = url
    }
}

playM3u8(window.location.href.split("#")[1])
(()=>{
  const toast=document.getElementById('toast');let toastTimer;
  function notify(message){toast.textContent=message;toast.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('visible'),2600);}
  document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(button.dataset.copy);notify('微信号已复制');}catch{notify('微信号：'+button.dataset.copy);}}));
  const dialog=document.getElementById('lightbox'),image=document.getElementById('lightbox-image'),stage=document.getElementById('lightbox-stage');let zoom=1,fitWidth=1,opener;
  function resize(){image.style.width=Math.round(fitWidth*zoom)+'px';document.getElementById('zoom-reset').textContent=zoom===1?'适应屏幕':Math.round(zoom*100)+'%';}
  function fit(){fitWidth=Math.min(image.naturalWidth,stage.clientWidth-40);zoom=1;resize();}
  function close(){dialog.close();}
  document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('video').forEach(v=>v.pause());opener=button;image.alt=button.dataset.caption||'';document.getElementById('lightbox-title').textContent=button.dataset.caption||'查看图片';document.getElementById('image-original').href=button.dataset.image;image.onload=fit;image.src=button.dataset.image;dialog.showModal();document.body.style.overflow='hidden';if(image.complete&&image.naturalWidth)fit();}));
  document.getElementById('lightbox-close').addEventListener('click',close);
  dialog.addEventListener('close',()=>{document.body.style.overflow='';if(opener)opener.focus();});
  document.getElementById('zoom-in').addEventListener('click',()=>{zoom=Math.min(zoom+.5,5);resize();});
  document.getElementById('zoom-out').addEventListener('click',()=>{zoom=Math.max(zoom-.5,.5);resize();});
  document.getElementById('zoom-reset').addEventListener('click',fit);
  window.addEventListener('resize',()=>{if(dialog.open)fit();});
  const anchors=[...document.querySelectorAll('.toc a')];
  if(anchors.length&&'IntersectionObserver' in window){const sections=[...document.querySelectorAll('.content-section,.video-section')];const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){anchors.forEach(a=>{const active=a.getAttribute('href')==='#'+entry.target.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}}},{rootMargin:'-10% 0px -65% 0px',threshold:0});sections.forEach(s=>observer.observe(s));}
  const videos=[...document.querySelectorAll('video[data-hls]')];
  if(!videos.length)return;
  function error(video,message){const el=video.parentElement.querySelector('.video-error');el.textContent=message;el.hidden=false;}
  function attach(video){const source=video.dataset.hls;
    if(video.canPlayType('application/vnd.apple.mpegurl')){video.src=source;return;}
    if(window.Hls&&Hls.isSupported()){
      const hls=new Hls({maxBufferLength:30,maxMaxBufferLength:60,autoStartLoad:false});let started=false,retries=0;
      hls.loadSource(source);hls.attachMedia(video);
      const start=()=>{if(!started){started=true;hls.startLoad(-1);}};
      video.addEventListener('play',start);video.addEventListener('seeking',start);
      hls.on(Hls.Events.ERROR,(_,data)=>{if(!data.fatal)return;if(data.type===Hls.ErrorTypes.NETWORK_ERROR&&retries++<2){hls.startLoad();}else if(data.type===Hls.ErrorTypes.MEDIA_ERROR&&retries++<2){hls.recoverMediaError();}else{error(video,'视频加载暂时失败，请刷新页面后重试。');}});
      window.addEventListener('pagehide',()=>hls.destroy(),{once:true});
    }else error(video,'当前浏览器暂不支持此视频格式，请使用新版 Chrome、Edge 或 Safari 观看。');
  }
  const script=document.createElement('script');script.src='/assets/vendor/hls.min.js';script.onload=()=>videos.forEach(attach);script.onerror=()=>videos.forEach(v=>error(v,'播放器加载失败，请刷新页面后重试。'));document.head.appendChild(script);
})();

(function(){
  var root=document.documentElement, btn=document.getElementById('theme'), saved=null;
  try{saved=localStorage.getItem('theme')}catch(e){}
  var dark=saved?saved==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;
  function apply(){
    root.setAttribute('data-theme',dark?'dark':'light');
    if(btn){btn.textContent=dark?'Light mode':'Dark mode';btn.setAttribute('aria-pressed',dark);}
  }
  if(btn)btn.addEventListener('click',function(){dark=!dark;apply();try{localStorage.setItem('theme',dark?'dark':'light')}catch(e){}});
  apply();
  var y=document.getElementById('yr'); if(y)y.textContent=new Date().getFullYear();
})();

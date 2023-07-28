// toggle bar
let menubtn=document.getElementById('menubtn');
   menubtn.addEventListener('click', function(e)
{
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
    
})

//typing change
let type=new Typed('.auto-input',{
    strings: ['<i>Front-End Developer</i>','Programmer','Freelancer','Back-End Developer'],
      typeSpeed: 100,
      backSpeed:100,
      backDelay:1000,
      loop:true
});
let typ=new Typed('.auto',{
    strings: ['<i>Front-End Developer!</i>','Programmer!','Freelancer!','Back-End Developer!'],
      typSpeed: 150,
      backSpeed:150,
      backDelay:2000,
      loop:true
});


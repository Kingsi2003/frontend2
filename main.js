let traffic = document.querySelector('.traffic');
let traf = document.querySelector('.us');
let whatsapp = document.querySelector('.contactuss')
let contact = document.querySelector('.contactus')
let i = 0
traf.addEventListener('click',(e)=>{
    e.preventDefault()
    i++
    localStorage.setItem('count',i);
    traffic.innerHTML= localStorage.getItem('count')
    contact.style.display = 'none'
    whatsapp.style.display = 'flex'
})
let links = document.getElementsByClassName('navs');
for(var link of links){
    link.addEventListener('click',(e)=>{
      let rem =  document.getElementsByClassName('rem')
        for(var rems of rem){
            rems.classList.remove('active')
        }
        if(e.target.href.includes(e.target.innerHTML)){
            
            e.target.classList.add('active')
           
        }
       
    })
    console.log(link.href)

}
console.log(window.location.url)




document.body.addEventListener('click',(event)=>{

    const circle=document.createElement('div');
    circle.className='circle';
    // circle.classList.add('circle');
    const message=["Hi","Hello","welcome","Hey there","hola"];
    circle.textContent=message[Math.floor(Math.random()*message.length)];
    const x=event.clientX;
    const y=event.clientY;

    //create center 
    circle.style.left=`${x-25}px`
    circle.style.top=`${y-25}px`
    const background=["red","blue","green","wheat","orange","grey","wheat","pink"];
    circle.style.backgroundColor=background[Math.floor(Math.random()*background.length)];
    document.body.appendChild(circle);
    setTimeout(()=>{
        circle.remove();
    },5000)
})
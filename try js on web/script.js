// change color of first item in nav
let nav = document.getElementsByClassName('nav')[0].firstElementChild.firstElementChild.nextElementSibling;
console.log(nav);
nav.style.color = 'red';

//change the color of last element child
let last = document.getElementsByClassName('nav')[0].firstElementChild.lastElementChild;
last.style.color = 'green';

//change background color of all li elements of nav
Array.from(document.getElementsByClassName('nav')[0].getElementsByTagName('li')).forEach((element) => {
    element.style.background = 'yellow';
});

//toggle the classes to change the color of bulb
let bulb=document.getElementById('bulb');
setInterval(() => {
    bulb.classList.toggle('off');
}, 1000);

//time in nav through set interval
setInterval(() => {
    let a= new Date();
   timeh.innerHTML= a.getUTCHours()+5;
   timem.innerHTML= a.getMinutes();
   times.innerHTML= a.getSeconds();
    
}, 1000);

//Array.from (create array from strings of science facts)

let string = [

    `The largest living organism in the world is a fungus, covering over 9.6 square kilometers in Oregon, USA. Fungi are neither plants nor animals, but a unique kingdom of organisms`, `The human brain uses 20% of the body's energy, despite accounting for only 2% of its mass`, `The brain contains over 100 billion neurons, each with thousands of connections`, `The largest snowflake ever recorded was 15 inches wide, falling in Montana in 1887`, `Snowflakes are unique, with no two identical flakes`, `Honeybees communicate through dance, using complex movements to convey information`, `Bees are responsible for pollinating 1/3 of the world's crops`, `The deepest part of the ocean is the Challenger Deep, reaching depths of over 11,000 meters`, `The pressure at this depth is over 1,000 times greater than at sea level`,

    `The human eye can distinguish between 10 million different colors`, `The eye has a blind spot, but our brains fill in the gap`,

    `Astronauts grow up to 2 inches taller in space, due to spinal expansion`, `In space, there is no up or down, only directions`, `The world's largest waterfall, by volume of water, is actually located underwater, in the Denmark Strait. It's called the Denmark Strait Cataract`, `Butterflies taste with their feet, using tiny sensors to detect the sweetness or bitterness of a substance`, `The human nose can detect over 1 trillion different scents, making it one of the most sensitive organs in the human body`, `The Great Barrier Reef is the largest living structure on Earth, spanning over 2,300 kilometers`, `The highest recorded temperature on Earth was 56.7°C, in Death Valley, California, in 1913`, `The longest recorded flight of a chicken is 13 seconds, yes, you read that right!`, `The world's largest snowman was built in Maine, USA, and stood over 34 meters tall`, `The deepest recorded dive by a human is over 332 meters, in a specialized submersible vessel`, `The human heart beats over 3 billion times in a person's lifetime`, `The world's largest crystal cave is located in Naica, Mexico, and contains crystals up to 11 meters long`, `The world's largest waterfall, by volume of water, is actually located underwater, in the Denmark Strait. It's called the Denmark Strait Cataract`, `Butterflies taste with their feet, using tiny sensors to detect the sweetness or bitterness of a substance`, `The human nose can detect over 1 trillion different scents, making it one of the most sensitive organs in the human body`, `The Great Barrier Reef is the largest living structure on Earth, spanning over 2,300 kilometers`, `The highest recorded temperature on Earth was 56.7°C, in Death Valley, California, in 1913`, `The longest recorded flight of a chicken is 13 seconds, yes, you read that right!`, `The world's largest snowman was built in Maine, USA, and stood over 34 meters tall`, `The deepest recorded dive by a human is over 332 meters, in a specialized submersible vessel`, `The human heart beats over 3 billion times in a person's lifetime`, `The world's largest crystal cave is located in Naica, Mexico, and contains crystals up to 11 meters long`, `The largest planet in our solar system is Jupiter, with a diameter of approximately 142,984 km`, `The longest recorded duration of a rocket flight is around 15 years, achieved by the Voyager 1 spacecraft`, `The human eye can distinguish between 10 million different colors`, `The world's largest species of ray is the manta ray, reaching widths of up to 7 meters`, `The longest recorded duration of a person living at high altitude is around 21 years`, `The world's largest species of squid is the colossal squid, reaching lengths of up to 19 meters`, `The largest known black hole has a mass of around 66 billion times that of the Sun`, `The world's largest waterfall, by height, is the Angel Falls in Venezuela, dropping over 979 meters`, `The longest recorded duration of a person staying awake is around 264.4 hours`, `The world's largest species of frog is the Goliath frog, reaching lengths of up to 30 cm`, `The largest planet in our solar system is Jupiter, with a diameter of approximately 142,984 km`, `The longest recorded duration of a rocket flight is around 15 years, achieved by the Voyager 1 spacecraft`, `The human eye can distinguish between 10 million different colors`, `The world's largest species of ray is the manta ray, reaching widths of up to 7 meters`, `The longest recorded duration of a person living at high altitude is around 21 years`, `The world's largest species of squid is the colossal squid, reaching lengths of up to 19 meters`, `The largest known black hole has a mass of around 66 billion times that of the Sun`];
let arr15 = Array.from(string);
console.log(arr15.length);
let random = Math.random() * arr15.length;
random = parseInt(random);
console.log(arr15[random]);
let fact = arr15[random];

//changing inner html
first.innerHTML = fact;
first.style.color="red";

// insertion methods
let a = document.getElementById('who');
console.log(a);
//prepend (inner first place)
let n = document.createElement('div');
n.innerHTML = '<h3>it will be innner in div on first place</h3>';
a.prepend(n);
n.style.background="yellow";
//append (inner last place)
let d = document.createElement('div');
d.innerHTML = '<h3>it will be innner in div on last place</h3>';
a.append(d);
d.style.background="yellow";
//set 1 or more attributes at a time (following we set two classes at on time in one element) like class, hidden,id or more to any element like div, main etc 
d.setAttribute('class', 'last end');

// before (outer before) (will place the element before the div a)
let e= document.createElement("div");
e.innerHTML="it will be outer and before the main div a";
a.before(e);
e.style.background="cyan";

//after (outer after) (will place the element after the main div a)
let f= document.createElement('div');
f.innerHTML="it will be outer and after the main div";
a.after(f);
f.style.background="cyan";

//replaceWith (replace the main element with another)
let g= document.getElementById('about');
let h=document.createElement('div');
h.innerHTML='About us';
g.replaceWith(h);
h.style.background="yellow";
h.style.paddingTop='2.5vh';

//insert adjacent HTML/TEXT/ELEMENT
//insert adjacent HTML
let i=document.getElementById('insertion');
//beforebegin(will be inserted before the begining (outer) of pointed div)
i.insertAdjacentHTML('beforebegin','<div class="test1" id="beforebegin">This html will be inserted before the begining (outer) of pointed div </div>');
//change background color
document.getElementById('beforebegin').style.background="cyan";//can only get by id

//after begin (will be inserted after the begining (inner) of pointed div)
i.insertAdjacentHTML('afterbegin','<div class="test2" id="afterbegin">This html will be inserted after the begining (inner) of pointed div </div>');
document.getElementById('afterbegin').style.background="yellow";//can only get by id

//beforeend (will be inserted before the end (inner) of main or pointed div)
i.insertAdjacentHTML("beforeend",'<div class="test3" id="beforeend">This HTML will be inserted before the ending (inner) of main or pointed div </div>')
document.getElementById('beforeend').style.background='yellow';

//beforeend (will be inserted before the end (inner) of main or pointed div)
i.insertAdjacentHTML("afterend",'<div class="test4" id="afterend">This HTML will be inserted after the ending (outer) of main or pointed div </div>')
document.getElementById('afterend').style.background='cyan';

//adding more classes to an element to apply css like changing color
dark0.className="dark";
dark1.className="dark";
dark3.className="dark";

//adding a class to class list by id
dark3.classList.add('Mtopic');


// remowing a class from class list (id.class list shows all the classes assigned to an item);
dark3.classList.remove('Mtopic'); // will remove class"Mtopic" from element

//toggle (if the class is already assigned it will remove it and if not it will add it)
dark3.classList.toggle('dark'); //it will remove "dark" class because it is already assigned
dark3.classList.toggle('dark'); // it will re add "dark" class because it was removed;

// contains (it only check wheather the class list contains the specific class or not )
dark3.classList.contains('dark');

//set timeout (use to set a function execution to a specefic time range)
const welcome=()=>{
alert('welcome to our site\nThis message is sent by Timeout section');
}
let k=setTimeout(welcome,2000);
//to clear the Timeout
// clearTimeout(k);

//setInterval (use to set a function to run after a specific time again and again like a loop)
const help=()=>{
   let m= confirm("Do you need any help\nThis message is sent by setInterval");  
}
//in following line is the syntax to run the set interval but have commented out so it could be run through onclick function which is written following after some lines
let p=setInterval(help,1500);

//to clear the Time interval
clearInterval(p);

//adding Event listner 
let q= document.getElementsByClassName('onclick')[0];
var x;
let s = function () {
   console.log("Time interval started")
    x = setInterval(help,2000); //variable should be decleared globaly 
    
}


q.addEventListener('click', s);


//stoping the same time interval through removeEventListner('action' function);
let r= document.getElementsByClassName('onclick2')[0];
function stop(e) {
    console.log('Time interval stoped')
    clearInterval(x);
   
}
r.onclick = ()=>{
   stop();
}

// feching api data again and again through set interval 
const fetchContent= async (url)=>{
    con=await fetch(url);
    let a=await con.json()
    return a;
}


setInterval(async function () {
    let url="http://jsonplaceholder.typicode.com/todos/1";
    console.log(await fetchContent(url))
    refetch.innerHTML = await fetchContent(url);
}, 50000);


//event type and click co ordinates
let y=document.getElementsByClassName('onclick3')[0];
let z= function (e) {
    alert("type of event is '"+ e.type+"'"+"\n x cordinates is '"+e.clientX+"'  Y cordinates is '"+e.clientY+"'");
    

}
y.addEventListener('click', z);

//URL opening 
let a1= document.getElementById('facebook');
let a2= document.getElementById('google');
let a3= document.getElementById('youtube');

a1.onclick=()=>{
    window.location="https://www.facebook.com";
    window.focus();
}
a2.onclick=()=>{
    window.location="http://www.google.com";
}
a3.onclick=()=>{
    window.location="https://www.youtube.com";
}


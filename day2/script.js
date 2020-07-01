class Graphics1d
{
    constructor(f,xmin,xmax,ymin,ymax,w,h)
    {
        this.f=f;
        this.xmin=xmin;
        this.xmax=xmax;
        this.ymin=ymin;
        this.ymax=ymax;
        this.w=w;
        this.h=h;
    }
    draw()
    {
        ctx.beginPath();
        for(let i=-this.w;i<this.w;i+=1)
        {
            ctx.lineTo(i+this.w/2,-this.f(i)+this.h/2);
            ctx.strokeStyle='red';
            ctx.stroke();
            if(this.f(i)*this.f(i-1)<=0){
                ctx.ellipse(i+this.w/2, -this.f(i)+this.h/2, 2, 2, 0, 0, 2 * Math.PI);
            }
        }
        ctx.closePath();
    }
}





function Func()
{
    let qwe=document.getElementById("asd");
    let lol=qwe.value;
    let f=function(x){
        return eval(lol);
    }
    let graphic=new Graphics1d(f,-0,0,0,0,w,h);
    graphic.draw();
}

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let w=canvas.width;
let h=canvas.height;

ctx.beginPath();
ctx.moveTo(w/2,0);
ctx.lineTo(w/2,h);
ctx.moveTo(w,h/2);
ctx.lineTo(0,h/2);
ctx.strokeStyle="green";
ctx.stroke();
for(let i=0; i<=w;i+=w/20){
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(i,0)
    ctx.lineTo(i,h);
    ctx.stroke();
    ctx.lineWidth=0.5;
}
for(let i=0; i<=h;i+=h/20){
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(0,i)
    ctx.lineTo(w,i);
    ctx.stroke();
}
ctx.closePath();
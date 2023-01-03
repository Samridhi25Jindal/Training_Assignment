function max(...ar:number[])
{
    var s:number  = 0;

    for(let n of ar)
    {
        if(s<n)
        s=n
    }
    console.log("Maximum Value: " + s);
}

max(10,20,40,50,30,90,60,150,100);

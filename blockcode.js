let i =1000;
function demo()
{
 for(var i=0;i<4;i++){
     for(var j=0;j<=i;j++){
        process.stdout.write("*");
     }
     console.log(" ");
 }
}
function while_loop()
{
    var i =0,j=0;
    while(i < 4)
    {
        j=0;
        while (j<=i){
            process.stdout.write("*");
            j++;
        }
        i++;
        console.log(" ");
    }
}
while_loop();
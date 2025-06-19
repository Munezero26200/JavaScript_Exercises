function* fibonacciGenerator(limit){
    let prev=0;
    let curr=1;
    while(prev<=limit){
        yield prev;
        next= prev+curr;
        prev=curr;
        curr=next;
    }
}
for(let num of fibonacciGenerator(28)){
    console.log(num);
}
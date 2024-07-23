function task1(callback){
    setTimeout(()=> {
        console.log("task1");
        callback();
    }, 2000);

}
function task2(callback){
    setTimeout(()=> {
        console.log("task2")
        callback()
    }, 1000);
}
function task3(callback){
    setTimeout(()=> {
        console.log("task3")
        callback()
    }, 3000);
}
function task4(callback){
    setTimeout(()=> {
        console.log("task4")
        callback()
    }, 1500);

}

task1(()=>{
    task2(()=> {
        task3(() => {
            task4(() => {
                console.log("finished all tasks")
            })
        })
    })
})

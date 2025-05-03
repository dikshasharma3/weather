import readline from 'readline'

const rl=readline.createInterface({
    input:process.stdin, 
    // stdin =read, and stout = write   
    output:process.stdout
});

const tods=[];
const showmenu=()=>{
    console.log("1: Add a Task.")
    console.log("2: View a Task.")
    console.log("3: Exit.")
    rl.question("Chosse a Option! \n", handleInput)

}
const handleInput=(option)=>{
    if(option === "1")
    {
        rl.question("Enter Your Task \n",(task)=>{
            tods.push(task);
           console.log("Your Task is Added in List! \n" , task)
          showmenu();
        })   
    }

    else if(option === "2")
    {
        console.log("Your Task List");
        tods.map((task,index)=>{
            console.log(`${index + 1} ${task}`)
        })
        showmenu();
    }
    else if(option === "3")
    {
        console.log("GOODBye! See Yaa");
        rl.close();
    }
    else{
        console.log("plz enter valid option");
        showmenu();
    }


}

showmenu();
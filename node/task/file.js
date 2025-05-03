import readline from "readline"
import fs from "fs"
import { error } from "console";

const rl=readline.createInterface({
 input:process.stdin,
 output:process.stdout
});

const fileShow=()=>{
   rl.question("Enter Your File Name \n" ,(fileName)=>{
    rl.question("Enter Your Content to be in File \n",(content)=>{
        fs.writeFile(`${fileName}.txt`,content,(err)=>{
            if (err) {
                console.error("An error occurred:\n", err.message);
            }
            else{
                console.log(`your ${fileName} is created`)
            }
            rl.close();
        })
      
    })
   })
  
}


fileShow();
// //  user Login,user purchase,profileupdate,user logout

// const EventEmitter= require("events");
// const emiter= new EventEmitter;

// // for count 
// const eventCount={
//     userLogin:0,
//     userPurchase:0,
//     userUpdate:0,
//     userLogout:0
// };



// // this event listener for defining event
// emiter.on("user-login",(username)=>{
//     eventCount.userLogin++;
//     console.log(`User login : ${username}`)
// });

// emiter.on("user-purchase",(username,item) =>{
//     eventCount.userPurchase++;
//    console.log(`${username} purchases ${item}`)
// });
// emiter.on("profile-updated",(username,feild)=>{
//     eventCount.userUpdate++;
//     console.log(`${username} updated the ${feild}`)
// });
// emiter.on("user-logout",(username)=>{
//     eventCount.userLogout++;
//     console.log(`User Logout : ${username} `)
// });


// //now call all the events by emit
// emiter.emit("user-login","Diksha");
// emiter.emit("user-purchase","Diksha","Dress");
// emiter.emit("profile-updated","Diksha","Profile");
// emiter.emit("user-logout","Diksha");

// // now for summery for ALL HOE MANY THEY RUN means count
// emiter.on("summary",()=>{
//     console.log(eventCount);
// })

// emiter.emit("summary")



const { LocalStorage } = require('node-localstorage');
const EventEmitter = require('events');

// Setup local storage
const localStorage = new LocalStorage('./scratch'); // folder where data will save
const emitter = new EventEmitter();

// Initialize or get previous count
let eventCount = localStorage.getItem('eventCount');
eventCount = eventCount ? JSON.parse(eventCount) : {
    userLogin: 0,
    userPurchase: 0,
    userUpdate: 0,
    userLogout: 0
};

// Function to save to local storage
function saveCount() {
    localStorage.setItem('eventCount', JSON.stringify(eventCount));
}

// Event listeners
emitter.on("user-login", (username) => {
    eventCount.userLogin++;
    console.log(`User login: ${username}`);
    saveCount();
});

emitter.on("user-purchase", (username, item) => {
    eventCount.userPurchase++;
    console.log(`${username} purchased ${item}`);
    saveCount();
});

emitter.on("profile-updated", (username, field) => {
    eventCount.userUpdate++;
    console.log(`${username} updated the ${field}`);
    saveCount();
});

emitter.on("user-logout", (username) => {
    eventCount.userLogout++;
    console.log(`User logout: ${username}`);
    saveCount();
});

// Emit events
emitter.emit("user-login", "Diksha");
emitter.emit("user-purchase", "Diksha", "Dress");
emitter.emit("profile-updated", "Diksha", "Profile");
emitter.emit("user-logout", "Diksha");

// Summary
emitter.on("summary", () => {
    console.log("Event Summary:", eventCount);
});

emitter.emit("summary");

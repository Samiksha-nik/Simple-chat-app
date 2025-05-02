const mongoose=require("mongoose");
const Chat=require("./models/chat.js");


main()
.then(()=>{
    console.log("connection sucess");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats=[
    {
        from:"neha",
        to:"priya",
        msg:"send me exam sheets",
        created_at:new Date(),
    },
    {
    from:"rohit",
    to:"mohit",
    msg:"lets go to swimming today",
    created_at:new Date(),
    },
    {
    from:"amit",
    to:"sumit",
    msg:"send me notes for the exam",
    created_at:new Date(),
    },
    {
    from:"ram",
    to:"sham",
    msg:"all the best!",
    created_at:new Date(),
    },
];

Chat.insertMany(allChats);
    


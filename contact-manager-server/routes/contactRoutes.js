const router = require("express").Router();
const contactModel = require("../models/contact/contactModel")

const multer = require("multer");
const csv = require("csvtojson");
const fs=require('fs');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');

    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  });
const upload = multer({ storage: storage });
// add contact details for post
router.post("/", upload.single("file"),async  (req, res) => {
    
    if (!req.file) {
      return res.status(400).send("No file was uploaded.");
    }
    const file = req.file;
    const fileContents = fs.readFileSync(file.path, 'utf-8');
  
    await csv()
      .fromString(fileContents)
      .then(async (jsonObj) => {
        
        console.log(jsonObj);
        jsonObj.forEach(obj => {
          obj.user = "unknown"; // Get user id from frontend to add to each object
        });
        console.log(jsonObj);
        

        fs.unlink(file.path, (err) => {
          if (err) throw err;
          console.log(`${file.path} was deleted`);
        });
  
        res.send("File uploaded and parsed");
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Error parsing CSV file");
      });
  });





// delete contact

router.delete('/delete',async (req,res)=>{
    try{
    let delIds=req.headers['ids'].split(',');
    console.log(delIds);
    let deleted= await contactModel.deleteMany({ _id: { $in: delIds } });
    console.log(deleted.deletedCount);
    res.status(200).send({status: "Success"})
    }catch(e){
        res.status(500).send({status: "Failed", error : e})
    }
})

const fs = require('fs')
const addnotes = function (title,body)
{
    const notes = loadnotes()
    const duplicates = notes.filter(function(note){
        return note.title === title
    })
    if(duplicates.length===0){
    notes.push({
        title : title,
        body : body,
    })
    savenotes(notes)
}
    else{
        console.log('this title already exits')
    }
}
const loadnotes = function()
{
    try{
         const databuffer = fs.readFileSync('notesdata.json')
         const datajson = databuffer.toString()
          return JSON.parse(datajson)
    }catch(e){
        return []
    }
}
const savenotes = function(notes){
    const datajson = JSON.stringify(notes)
        fs.writeFileSync('notesdata.json',datajson)
}
const removenote = function(title){
    const notes = loadnotes()
    const notestokeep = notes.filter(function(note){
        return note.title!=title
    })
    if(notestokeep.length===notes.length)
    {
        console.log('note not found')
    }
    else{
    savenotes(notestokeep)
    console.log('one note removed')
    }
}
module.exports = {
    addnotes : addnotes,
    removenote : removenote,
}
// const fs = require('fs')

// fs.writeFileSync('input.txt','My name is Abhishek')
// fs.appendFileSync('input.txt','I live in Varanasi')
// const add = require('./utils.js')
// var a = add(2,3)
// console.log(a)
//    a = add(4,7)
//    console.log(a)
const yargs = require('yargs')
const notes = require('./notes.js')
yargs.command({
    command : 'add',
    describe : 'adding a note',
    builder : {
        title : {
            describe : 'Add title',
            demandOption : true,
            type : 'string',
        },
        body : {
            describe : 'Provide body',
            demandOption : true,
            type : 'string', 
        } 
    },
    handler : function(argv){
           notes.addnotes(argv.title, argv.body)
    }
})
yargs.command({
    command : 'remove',
    describe : 'remove a note',
    builder : {
        title : {
            describe : 'enter title to remove',
            demandOption : true,
            type : 'string',
        }
    },
    handler : function(argv){
        notes.removenote(argv.title)
    }
})
yargs.command({
    command : 'read',
    describe : 'reading a note',
    handler : function(){
        console.log('you are reading  a note')
    }
})
yargs.command({
    command : 'list',
    describe : 'listing notes',
    handler : function(){
        console.log('list note')
    }
})
yargs.parse()

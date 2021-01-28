/*
    Dependency: OpenSSL >1.1
    License: Unlicense
*/

module.exports={
    crypt(filein,fileout,key){
        const exec=require('child_process').exec;
        exec(`openssl aria-256-ofb -in ${filein} -out ${fileout} -k ${key}`,(err,stdout,stderr)=>{
            if(err) return console.log(err);
            if(!stderr) return console.log(stderr);
        })
    },
    
    decrypt(filein,fileout,key){
        const exec=require('child_process').exec;
        exec(`openssl aria-256-ofb -d -in ${filein} -out ${fileout} -k ${key}`,(err,stdout,stderr)=>{
            if(err) return console.log(err);
            if(!stderr) return console.log(stderr);
        })
    }
    
}
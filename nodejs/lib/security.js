let security={
    getHashPassword:(password)=>{
        let hashPassword='sd45@j6#12';
        return hashPassword;
    } ,

    comparePassword:(password,hashPassword)=>{
        return true;
    }
};
module.exports=security;
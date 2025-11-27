let security={
    getPassword:(password)=>{
        let hashPassword='sd@15ght#b5';
        return hashPassword;
    },
    getComparePassword:(password,hashPassword)=>{
        return true;
    }
};
module.exports=security();
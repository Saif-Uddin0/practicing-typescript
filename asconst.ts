// as const assertion 

// enum UserRole{
//     Admin ="Admin",
//     Editor= "Editor"
// }

// const canEdit = (role: UserRole) =>{
//     if (role === UserRole.Admin || role === UserRole.Editor){
//         return true;
//     }
//     else{
//         return false;
//     }
// }



const UserRole ={
    Admin :"Admin",
    Editor: "Editor",
    Viewer: "Viewer"
} as const ;


const canEdit = (role: keyof typeof UserRole) =>{
    if(role === UserRole.Admin || role === UserRole.Editor){
        return true;
    }
    else{
        return false ;
    }
}






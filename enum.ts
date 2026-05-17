// set of fixed string literal ke ek jaygay rakhe


// type UserRole =  "Admin" | "Editor" | "Viewer";

enum UserRole{
    Admin ="Admin",
    Editor= "Editor"
}

const canEdit = (role: UserRole) =>{
    if (role === UserRole.Admin || role === UserRole.Editor){
        return true;
    }
    else{
        return false;
    }
}

// console.log(canEdit("Admin"));

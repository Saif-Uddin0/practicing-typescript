type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };
type Employee = Person & JobDetails;


const getProfile =( st: Employee) =>{
    return `"Name: ${st.name}", "Role: ${st.role}"`
}


console.log(
  getProfile({
    name: "Mahir",
    age: 20,
    role: "Frontend Developer",
    salary: 50000,
  })
);

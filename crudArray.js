const students=[
    {id:1, name:"Jhon Doe", age:20},
    {id:2, name:"Ravi", age:21},
    {id:3, name:"Raju", age:22},
];
const newStudent={id:4, name:"Bob brown", age:21};
students.push(newStudent);
console.log("All students: ",students);
const studentIDToRead=2;
const studentToRead=students.find(students=>students.id===studentIDToRead);
console.log(`students with ID $(studentIDToRead):`, studentToRead);
const studentIDToUpdate=3;
const UpdateStudentData={name:"Alice willams", age:20};
const studentIndexToUpdate=students.findIndex(student=>students.id===studentIDToUpdate);
if(studentIndexToUpdate!==-1){
    students[studentIndexToUpdate]={
        ...students[studentIndexToUpdate],
        ...UpdateStudentData,
    };
    console.log(`upload student with ID ${studentIDToUpdate}:`,students[studentIndexToUpdate],

    );
}else{
    console.log(`student with ID $(studentIdToUpdate) not found`);
}
        const studentIDtoDelete=1;
        const studentIndexToDelete=students.findIndex(student=>students.id===studentIDtoDelete);
        if(studentIndexToDelete!==-1){
            const deletedStudent=students.splice(studentIndexToDelete, 1);
            console.log(`Delete student with ID $(studentIdDelete)`);
        }else{
            console.log(`student with ID $(studentIdDelete) not found`);
        }
        console.log("All student records after crud: ",students);

        
    



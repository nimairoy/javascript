
// export let text = "Hello world";
// console.log(text);

// export const setText = (txt) => {
//     text = txt;
// }

// export {text as message} ;

export class Student{
    constructor(id,name,cgpa){
        this.id = id;
        this.name = name;
        this.cgpa = cgpa;
    }
    // set studentName(name){
    //     this.name = name;
    // }

    get studentInfo(){
        return this.id+" "+ this.name+ " " + this.cgpa;
    }


}
export let stdnt = new Student(102,"Prodip Chandra Roy",3.99); 

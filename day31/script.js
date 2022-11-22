    // How to create an object
    // How print the value of an object
    // adding a constractor

    function Student(name,age,cgpa,lang){
        this.name = name,
        this.age = age,
        this.cgpa = cgpa,
        this.lang = lang
    }
    var student1 = new Student("Nimai Roy", 26, 3.25, ["Bangla","English","Hindi"]);
    var student2 = new Student("Tithe", 23, 2.53, ["Bangla","English","Urdu"]);
    console.log(student1.name);
    console.log(student1.age);
    console.log(student1.cgpa);
    console.log(student1.lang);
    console.log(student2.name);
    console.log(student2.age);
    console.log(student2.cgpa);
    console.log(student2.lang);


    // How to create an object
    // How print the value of an object
    // adding a constractor

    function Student(name,age,cgpa,lang){
        this.name = name,
        this.age = age,
        this.cgpa = cgpa,
        this.lang = lang

        this.display = function(){
          console.log(this.name);
          console.log(this.age);
          console.log(this.cgpa);
          console.log(this.lang);

        }
        
    }
    var student1 = new Student("Nimai Roy", 26, 3.25, ["Bangla","English","Hindi"]);
    var student2 = new Student("Tithe", 23, 2.53, ["Bangla","English","Urdu"]);
    var student3 = new Student("Anis",27,2.465,["Arbi","Farshi","Tamil"]);

    student1.display();
    student2.display();
    student3.display();


    // console.log(student1.name);
    // console.log(student1.age);
    // console.log(student1.cgpa);
    // console.log(student1.lang);

    // console.log(student2.name);
    // console.log(student2.age);
    // console.log(student2.cgpa);
    // console.log(student2.lang);

    // console.log(student3.name);
    // console.log(student3.age);
    // console.log(student3.cgpa);
    // console.log(student3.lang);


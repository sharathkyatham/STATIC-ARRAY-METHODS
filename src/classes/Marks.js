class Marks {

    static passMarks = 35;

    constructor(){
        console.log("Inside marks constructor");
    
        this.engMarks = 0;
        this.telMarks = 0;
    }

    calculateResult = ()=>{
        if (this.engMarks >= Marks.passMarks && this.telMarks >= Marks.passMarks){

        }
    };

    static aboutMarks =()=>{
        console.log("Inside about Marks");
    }
}

export default Marks;

function maxrep(arr){
    let max = 0 
    let conter = 0
    let ret = arr[0]
    for(let i = 1 ;i< arr.length;i++){
        conter = 0
        for(let j = 0 ;j < arr.length;j++){
            if (arr[i] == arr[j])
                conter++
        }
        if (max < conter){
            max = conter
            ret = arr[i]
        }
    }tr
    console.log(ret)
    return ret
}
// console.log(maxrep([1,2,2,3,5,6,6,6,1]))


const students = [
  {
    name: "Emma Johnson",
    notes: [88, 92, 85, 90, 95]
  },
  {
    name: "Liam Smith",
    notes: [75, 80, 78, 82, 79]
  },
  {
    name: "Sophia Garcia",
    notes: [95, 98, 92, 96, 99]
  },
  {
    name: "Noah Williams",
    notes: [60, 65, 70, 68, 62]
  },
  {
    name: "Olivia Brown",
    notes: [89, 85, 91, 88, 90]
  }
];


function moyan_note(){

    let studant_moyan = 0
    let clas_moyan = []
    for (note of students.notes){
        for  ( let i = 0 ;i < note.length;i++){
            console.log (notes[i])
        } 
        // console.log(studant_moyan)
    }
    // console.log(studant_moyan)




}

moyan_note()

import { defineStore } from "pinia"

interface TodoType {
  do: string;
  date: string;
  check: boolean;
}

export const useStore = defineStore('useStore', () => {

  const toDoList: TodoType[] = reactive([
    { do: "read vue docs", date: "2022-10-28", check: false },
    { do: "fanding web tour", date: "2022-10-29", check: false },
    { do: "ready holloween costume", date: "2022-10-30", check: false },
    { do: "read welcome docs", date: "2022-10-31", check: false },
    { do: "weekly quest", date: "2022-11-01", check: false },
    { do: "first project", date: "2022-11-02", check: false },
    { do: "second project", date: "2022-11-03", check: false },
    { do: "third project", date: "2022-11-04", check: false },
    { do: "go trip", date: "2022-11-05", check: false },
    { do: "study vue", date: "2022-11-06", check: false },
  ])

  let searchTodoList = reactive([]);
  let doneToDoList = reactive([]);

  const searchKeyword = (e: KeyboardEvent) => {
    const target = e.target as HTMLInputElement;
      if(searchTodoList.length === 0) {
        toDoList.map((el, idx) => {
          if (el.do.includes(target.value)) {
             searchTodoList.push(el);
          } 
      });
    } 
};

  const addToDoList = (todo) => {
    toDoList.push({ do: todo, date: new Date().toISOString().slice(0, 10), check: false })
  }

  const deleteToDoList = (idx) => {
    toDoList.splice(idx, 1)
  }

  const addDoneToDoList = (idx) => {
    doneToDoList.push(toDoList[idx])
  }

  const deleteDoneToDoList = (checkIdx) => {
    doneToDoList.map((el, idx) => {
      if(el === toDoList[checkIdx]) {
        doneToDoList.splice(idx, 1)
      }
    })
  }

  return { toDoList, searchTodoList, doneToDoList, addToDoList, deleteToDoList, searchKeyword, addDoneToDoList, deleteDoneToDoList }
})

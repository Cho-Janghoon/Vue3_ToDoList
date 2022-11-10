import { defineStore } from "pinia"

interface TodoType {
  do: string;
  date: string;
  check: boolean;
}

export const useStore = defineStore('useStore', () => {

  let toDoList: TodoType[] = reactive([]);
  let doneToDoList: TodoType[] = reactive([]);
  const searchTodoList: TodoType[] = reactive([]);
  const addToDoListDataState = ref<boolean>(false);
  const deleteToDoListDataState = ref<boolean>(false);

  /** function: 할 일 추가 */
  const addToDoList = (todo) => {
    toDoList.push({ do: todo, date: new Date().toISOString().slice(0, 10), check: false });
    addToDoListDataState.value = true;
    sessionStorage.setItem("toDoList", JSON.stringify(toDoList))
  }

  /** function: 할 일 삭제 */
  const deleteToDoList = (idx) => {
    doneToDoList.map((el, checkIdx) => {
      if(el === toDoList[idx]) {
        doneToDoList.splice(checkIdx, 1);
      }
    })
    toDoList.splice(idx, 1);
    deleteToDoListDataState.value = true;
    sessionStorage.setItem("toDoList", JSON.stringify(toDoList))
    sessionStorage.setItem("doneToDoList", JSON.stringify(doneToDoList));
  }

  /** function: 완료된 일 추가 */
  const addDoneToDoList = (idx) => {
    doneToDoList.push(toDoList[idx]); 
    sessionStorage.setItem("toDoList", JSON.stringify(toDoList));
    sessionStorage.setItem("doneToDoList", JSON.stringify(doneToDoList));
  }

  /** function: 완료 체크 해제 후 완료된 일에서 삭제 */
  const deleteDoneToDoList = (checkIdx) => {
    console.log('hello1')
    doneToDoList.map((el, idx) => {
      if(el === toDoList[checkIdx]) {
        console.log('hello2')
        doneToDoList.splice(idx, 1)
      }
    })
  }

  /** function: 키워드 포함 할 일 찾기 */
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

  watchEffect(() => {
    if(typeof window !== 'undefined' && sessionStorage.getItem('toDoList') && toDoList.length === 0) {
      toDoList = JSON.parse(sessionStorage.getItem('toDoList'))
    }
    if(typeof window !== 'undefined' && sessionStorage.getItem('doneToDoList') && doneToDoList.length === 0) {
      doneToDoList = JSON.parse(sessionStorage.getItem('doneToDoList'))
    }
  })

  return { toDoList, searchTodoList, doneToDoList, addToDoListDataState, deleteToDoListDataState, addToDoList, deleteToDoList, searchKeyword, addDoneToDoList, deleteDoneToDoList }
})

import { defineStore } from "pinia";

interface TodoType {
    do: string;
    date: string;
    check: boolean;
}

export const useStore = defineStore("useStore", () => {
    let toDoList: TodoType[] = reactive([]);
    let doneToDoList: TodoType[] = reactive([]);
    const searchTodoList: TodoType[] = reactive([]);
    const addToDoListDataState = ref<boolean>(false);
    const deleteToDoListDataState = ref<boolean>(false);

    /** function: 세션스토리지에 추가 */
    const addSession = (action) => {
        switch (action) {
            case "todo":
                sessionStorage.setItem("toDoList", JSON.stringify(toDoList));
                break;
            case "todo&done":
                sessionStorage.setItem("toDoList", JSON.stringify(toDoList));
                sessionStorage.setItem(
                    "doneToDoList",
                    JSON.stringify(doneToDoList)
                );
                break;
        }
    };

    /** function: 할 일 추가 */
    const addToDoList = (todo) => {
        toDoList.push({
            do: todo,
            date: new Date().toISOString().slice(0, 10),
            check: false,
        });
        addToDoListDataState.value = true;
        addSession("todo");
    };

    /** function: 할 일 삭제 */
    const deleteToDoList = (deleteIdx) => {
        doneToDoList.map((el, idx) => {
            if (el.do === toDoList[deleteIdx].do) {
                doneToDoList.splice(idx, 1);
            }
        });
        toDoList.splice(deleteIdx, 1);
        deleteToDoListDataState.value = true;
        addSession("todo&done");
    };

    /** function: 완료된 일 추가 */
    const addDoneToDoList = (idx) => {
        doneToDoList.push(toDoList[idx]);
        addSession("todo&done");
    };

    /** function: 완료 체크 해제 후 완료된 일에서 삭제 */
    const deleteDoneToDoList = (checkIdx) => {
        doneToDoList.map((el, idx) => {
            if (el === toDoList[checkIdx]) {
                doneToDoList.splice(idx, 1);
            }
        });
        addSession("todo&done");
    };

    /** function: 키워드 포함 할 일 찾기 */
    const searchKeyword = (e: KeyboardEvent) => {
        const target = e.target as HTMLInputElement;
        if (searchTodoList.length === 0) {
            toDoList.map((el, idx) => {
                if (el.do.includes(target.value)) {
                    searchTodoList.push(el);
                }
            });
        }
    };

    watchEffect(() => {
        if (
            typeof window !== "undefined" &&
            sessionStorage.getItem("toDoList") &&
            toDoList.length === 0
        ) {
            console.log(
                "hello1",
                JSON.parse(sessionStorage.getItem("toDoList"))
            );
            toDoList = JSON.parse(sessionStorage.getItem("toDoList"));
        }
        if (
            typeof window !== "undefined" &&
            sessionStorage.getItem("doneToDoList") &&
            doneToDoList.length === 0
        ) {
            console.log(
                "hello2",
                JSON.parse(sessionStorage.getItem("doneToDoList"))
            );
            doneToDoList = JSON.parse(sessionStorage.getItem("doneToDoList"));
        }
    });

    return {
        toDoList,
        doneToDoList,
        searchTodoList,
        addToDoListDataState,
        deleteToDoListDataState,
        addToDoList,
        searchKeyword,
        deleteToDoList,
        addDoneToDoList,
        deleteDoneToDoList,
    };
});


export const setLocal = (tasks) => {

    localStorage.setItem('tasks', JSON.stringify(tasks));

}; //!FUNC-SETLOCAL


export const getLocal = () => {

    return JSON.parse(localStorage.getItem('tasks')) || [];

}; //!FUNC-GETLOCAL
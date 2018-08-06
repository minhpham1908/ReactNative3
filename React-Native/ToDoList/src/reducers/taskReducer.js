import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from '../actions/type'
import { toggleTask } from '../actions';

export default function (state = [], action) {
    switch (action.type) {
        case ADD_TASK:
            //1. Check xem ngay da co task chua
            //2. Add task do vao
            //3. Sap xep lai list

            const tasksInThatDay = state.filter(item => item.id === action.payload.id)
            if (tasksInThatDay.length === 0) {
                return [
                    ...state, {
                        id: action.payload.id,
                        date: action.payload.date,
                        data: [action.payload.task]
                    }
                ].sort((day1, day2) => day1.id - day2.id)
            } else {
                return [
                    ...(state.filter(item => item.id !== action.payload.id)),
                    {
                        id: action.payload.id,
                        date: action.payload.date,
                        data: [
                            ...(tasksInThatDay[0].data),
                            action.payload.task
                        ].sort((task1, task2) => task1.id - task2.id)
                    }
                ].sort((day1, day2) => day1.id - day2.id)
            }

        case TOGGLE_TASK:
            console.log(action)
            return state.map(dayTasks => (dayTasks.id === action.payload.dayId) ?
                {
                    id: dayTasks.id,
                    date: dayTasks.date,
                    data: dayTasks.data.map(task => (task.id === action.payload.timeId)
                        ? { ...task, completed: !task.completed }
                        : task)
                } : dayTasks
            )

        case DELETE_TASK:
            function recall(item) {
               return item.data.filter(task => task.id !==action.payload.timeId)
            }

            return state.filter(item =>{
                recall(item)
            })

        default: return state
    }
}
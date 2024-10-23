import { useState } from "react";
import EditIcon, { DeleteIcon } from "../../library/Editicon";
import { DisplaySettingsOutlined } from "@mui/icons-material";

export const TodoApp = () => {
  const [value, setValue] = useState("");
  const [taskList, setTaskList] = useState(data);
  const [duplicateMsg, setDuplicateMsg] = useState("");


  const handleValue = (userValue) => {
    setValue(userValue);
  };
  const handleAddTask = (newTask) => {
    const isIndexAvailable = taskList.findIndex((t) => t.tname === newTask);
    if (!newTask) return;
    if (isIndexAvailable > -1) {
      setDuplicateMsg("Task Already Present.Kindly add new Task");
    }
    if (isIndexAvailable === -1) {
      setDuplicateMsg("");
      setTaskList([
        ...taskList,
        { id: ++nextId, tname: newTask, isEdit: false },
      ]);
    }
  };
  const handleDelete = (tId) => {
    setTaskList(taskList.filter((task) => task.id !== tId));
  };

  const handleEditTask = (editedValue, taskId) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === taskId) {
          return { ...task, tname: editedValue };
        } else {
          return task;
        }
      })
    );
  };

  const handleEditTaskFlag = (editTaskId) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === editTaskId) {
          return { ...task, isEdit: true };
        } else {
          return task;
        }
      })
    );
  };

  const handleSaveTask = (saveTaskId) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === saveTaskId) {
          return { ...task, isEdit: false };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <>
      <AddTask
        userInput={value}
        handleUserInput={handleValue}
        addTask={handleAddTask}
      />
      <DisplayTaskList
        taskData={taskList}
        deleteTask={handleDelete}
        editTask={handleEditTask}
        editTaskFlag={handleEditTaskFlag}
        saveTask={handleSaveTask}
      />
      {duplicateMsg && <MessageDisplay duplicateMessage={duplicateMsg} />}
    </>
  );
};

function MessageDisplay({ duplicateMessage }) {
  return (
    <>
      <h3 style={{ color: "red" }}>{duplicateMessage}</h3>
    </>
  );
}

function AddTask({ userInput, handleUserInput, addTask }) {
  return (
    <>
      <h3>Todo App </h3>
      <input
        type="text"
        value={userInput}
        onChange={(e) => {
          handleUserInput(e.target.value);
        }}
      />{" "}
      <button
        onClick={() => {
          addTask(userInput);
        }}
      >
        Add Task
      </button>
    </>
  );
}

const DisplayTaskList = ({
  taskData,
  deleteTask,
  editTaskFlag,
  editTask,
  saveTask,
}) => {
  return (
    <>
      <ul>
        {taskData.map((task) => {
          return (
            <li
              key={task.id}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              {!task.isEdit ? (
                task.tname
              ) : (
                <input
                  type="text"
                  value={task.tname}
                  onChange={(e) => editTask(e.target.value, task.id)}
                />
              )}
              <UpdatTask
                taskisEditFlag={task.isEdit}
                key={task.id}
                taskId={task.id}
                deleteTask={deleteTask}
                editTaskFlag={editTaskFlag}
                saveTask={saveTask}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

const UpdatTask = ({
  taskId,
  deleteTask,
  editTaskFlag,
  taskisEditFlag,
  saveTask,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        columnGap: "7px",
      }}
    >
      {taskisEditFlag ? (
        <button onClick={() => saveTask(taskId)}>Save</button>
      ) : (
        <button
          onClick={() => {
            editTaskFlag(taskId);
          }}
          style={{ border: "none", outline: "none", background: "none" }}
        >
          <EditIcon />
        </button>
      )}
      <button
        onClick={() => {
          deleteTask(taskId);
        }}
        style={{ border: "none", outline: "none", background: "none" }}
      >
        {" "}
        <DeleteIcon />
      </button>
    </div>
  );
};

let nextId = 2;
const data = [
  { id: 1, tname: "T1", isEdit: false },
  { id: 2, tname: "T2", isEdit: false },
];

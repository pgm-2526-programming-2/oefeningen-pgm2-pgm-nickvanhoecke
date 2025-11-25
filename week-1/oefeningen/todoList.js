const todoList = [
  {
    task: "Complete Project",
    subtasks: [
      {
        task: "Write Code",
        subtasks: [
          { task: "Implement Feature A" },
          { task: "Test Feature A" },
          { task: "Refactor Code" },
        ],
      },
      {
        task: "Document Project",
        subtasks: [
            { task: "Write Readme" }, 
            { task: "Create Documentation" }],
      },
    ],
  },
  {
    task: "Prepare Presentation",
    subtasks: [
        { task: "Create Slides" }, 
        { task: "Practice Delivery" }],
  },
];



function showItem(item) {
    console.log(`
        Task: ${item.task} 
        ==========================`)
}

function showTodoList(list) {
    for (const item of list) {
        showItem(item)

        if (item.subtasks) {
            showTodoList(item.subtasks)
        } 
    }
}

showTodoList(todoList)

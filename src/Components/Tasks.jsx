import supabase from "../Config/supabaseClient";
import { useEffect, useState } from "react";

export default function Tasks() {
  const [showTasksError, setShowTasksError] = useState(null);
  const [Tasks, setTasks] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabase.from("Tasks_table").select();

      if (error) {
        setShowTasksError("Could not fetch tasks");
        setTasks(null);
        console.log(error);
      }
      if (data) {
        setTasks(data);
        setShowTasksError(null);
      }
    };
    fetchTasks();
  }, []);
  console.log(Tasks);
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-2xl font-bold">Tareas:</h1>
        <div>
          <div className="flex flex-col items-center justify-center min-w-[400px] min-h-[100px] py-5 px-22">
            {showTasksError && <p>{showTasksError}</p>}
            {Tasks && (
              <div className="flex flex-col items-center justify-center gap-10">
                {Tasks.map((task) => (
                  <>
                    <div className="flex flex-col items-center justify-center border-1 py-5 min-w-[500px] min-h-[100px] gap-5 rounded-xl">
                      <h1 className="text-lg font-semibold">
                        {task.tasks_title}
                      </h1>
                      <p className="text-sm">{task.task_description}</p>
                    </div>
                  </>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

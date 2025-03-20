export default function Form() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 my-28">
        <h1 className="text-2xl font-semibold">Crea tu tarea</h1>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-sm">Título de la tarea:</p>
          <input
            type="text"
            name="Task Name"
            id="taskName"
            className="border-1 rounded-lg py-1 px-3"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-sm">Descripción de la tarea:</p>
          <input
            type="text"
            name="Task Description"
            id="taskDescription"
            className="border-1 rounded-lg py-1 px-3"
          />
        </div>
      </div>
    </>
  );
}

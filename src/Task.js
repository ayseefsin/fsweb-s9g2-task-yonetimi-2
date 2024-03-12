import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import { tr } from "date-fns/locale";
const Task = ({ taskObj, onComplete }) => {
  const formattedDeadline = formatDistanceToNow(new Date(taskObj.deadline), {
    locale: tr,
    addSuffix: true,
  });
  const daysUntilDeadLine = differenceInDays(
    new Date(taskObj.deadline),
    new Date()
  );
  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim:{" "}
        <span
          className={daysUntilDeadLine <= 3 ? `bg-[#ffd9d4]` : `bg-teal-200 `}
        >
          {formattedDeadline}
        </span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;

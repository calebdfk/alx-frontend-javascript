export default function taskBlock(trueOrFalse) {
  let task = false;
  const task2 = true;

  if (trueOrFalse) {
    /* eslint-disable */
    task;
    task2;
  }
  
  return [task, task2];
}

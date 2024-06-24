export default function taskBlock(trueOrFalse) {
  const task = false;
  let task2 = true;

  if (trueOrFalse) {
    /* eslint-disable */
    task;
    task2;
  }
  
  return [task, task2];
}

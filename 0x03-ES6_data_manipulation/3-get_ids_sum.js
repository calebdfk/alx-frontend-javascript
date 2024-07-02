/* eslint-disable */
export default function getStudentIdsSum(students) {
  return students.reduce((sum, c) => sum + c.id, 0);
}

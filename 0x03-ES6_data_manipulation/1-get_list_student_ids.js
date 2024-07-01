export default function getListStudentIds(list) {
  if (Array.isArray(list)) {
    return list.map((a) => a.id);
  }
  return [];
}

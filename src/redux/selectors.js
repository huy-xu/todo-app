export const getNoteList = (state) => state.noteList.noteList;

export const getNoteIds = (state) => Object.keys(getNoteList(state));
export const getNoteById = (state, id) => getNoteList(state)[id];

export const getCheckItemById = (state, noteId, id) => getNoteById(state, noteId).checkList[id];
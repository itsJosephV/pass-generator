import { getRandomChar, getRandomSymbol } from "../utils/randomchars"

export const checkboxData = [
  {
    title: "Lowercase",
    state: true,
    id: 1,
    getChar: () => getRandomChar(97, 122),
  },
  {
    title: "Uppercase",
    state: false,
    id: 2,
    getChar: () => getRandomChar(65, 90),
  },
  {
    title: "Numbers",
    state: true,
    id: 3,
    getChar: () => getRandomChar(48, 57),
  },
  { title: "Symbols", state: false, id: 4, getChar: () => getRandomSymbol() },
]
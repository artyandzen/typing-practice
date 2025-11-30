export const SENTENCE_COUNT_FOR_ADAPTATION = 10;
export const TOP_MISTAKE_COUNT = 3;

export const KEYBOARD_LAYOUT = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['ShiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ShiftRight'],
    ['Space'],
];
  
export type Finger = 'pinky' | 'ring' | 'middle' | 'index' | 'thumb';
export type Hand = 'left' | 'right';

export const FINGER_MAP: { [key: string]: { finger: Finger; hand: Hand; isHomeRow?: boolean } } = {
    // Left hand
    '`': { finger: 'pinky', hand: 'left' }, '~': { finger: 'pinky', hand: 'left' },
    '1': { finger: 'pinky', hand: 'left' }, '!': { finger: 'pinky', hand: 'left' },
    'q': { finger: 'pinky', hand: 'left' }, 'a': { finger: 'pinky', hand: 'left', isHomeRow: true }, 'z': { finger: 'pinky', hand: 'left' },
    'tab': { finger: 'pinky', hand: 'left' }, 'capslock': { finger: 'pinky', hand: 'left' }, 'shiftleft': { finger: 'pinky', hand: 'left' },
  
    '2': { finger: 'ring', hand: 'left' }, '@': { finger: 'ring', hand: 'left' },
    'w': { finger: 'ring', hand: 'left' }, 's': { finger: 'ring', hand: 'left', isHomeRow: true }, 'x': { finger: 'ring', hand: 'left' },
  
    '3': { finger: 'middle', hand: 'left' }, '#': { finger: 'middle', hand: 'left' },
    'e': { finger: 'middle', hand: 'left' }, 'd': { finger: 'middle', hand: 'left', isHomeRow: true }, 'c': { finger: 'middle', hand: 'left' },
  
    '4': { finger: 'index', hand: 'left' }, '$': { finger: 'index', hand: 'left' },
    'r': { finger: 'index', hand: 'left' }, 'f': { finger: 'index', hand: 'left', isHomeRow: true }, 'v': { finger: 'index', hand: 'left' },
    '5': { finger: 'index', hand: 'left' }, '%': { finger: 'index', hand: 'left' },
    't': { finger: 'index', hand: 'left' }, 'g': { finger: 'index', hand: 'left' }, 'b': { finger: 'index', hand: 'left' },
  
    // Right hand
    '6': { finger: 'index', hand: 'right' }, '^': { finger: 'index', hand: 'right' },
    'y': { finger: 'index', hand: 'right' }, 'h': { finger: 'index', hand: 'right' }, 'n': { finger: 'index', hand: 'right' },
    '7': { finger: 'index', hand: 'right' }, '&': { finger: 'index', hand: 'right' },
    'u': { finger: 'index', hand: 'right' }, 'j': { finger: 'index', hand: 'right', isHomeRow: true }, 'm': { finger: 'index', hand: 'right' },
  
    '8': { finger: 'middle', hand: 'right' }, '*': { finger: 'middle', hand: 'right' },
    'i': { finger: 'middle', hand: 'right' }, 'k': { finger: 'middle', hand: 'right', isHomeRow: true }, ',': { finger: 'middle', hand: 'right' }, '<': { finger: 'middle', hand: 'right' },
  
    '9': { finger: 'ring', hand: 'right' }, '(': { finger: 'ring', hand: 'right' },
    'o': { finger: 'ring', hand: 'right' }, 'l': { finger: 'ring', hand: 'right', isHomeRow: true }, '.': { finger: 'ring', hand: 'right' }, '>': { finger: 'ring', hand: 'right' },
  
    '0': { finger: 'pinky', hand: 'right' }, ')': { finger: 'pinky', hand: 'right' },
    '-': { finger: 'pinky', hand: 'right' }, '_': { finger: 'pinky', hand: 'right' },
    'p': { finger: 'pinky', hand: 'right' }, ';': { finger: 'pinky', hand: 'right', isHomeRow: true }, ':': { finger: 'pinky', hand: 'right' }, '/': { finger: 'pinky', hand: 'right' }, '?': { finger: 'pinky', hand: 'right' },
    '[': { finger: 'pinky', hand: 'right' }, '{': { finger: 'pinky', hand: 'right' },
    ']': { finger: 'pinky', hand: 'right' }, '}': { finger: 'pinky', hand: 'right' },
    '\'': { finger: 'pinky', hand: 'right' }, '"': { finger: 'pinky', hand: 'right' },
    '=': { finger: 'pinky', hand: 'right' }, '+': { finger: 'pinky', hand: 'right' },
    '\\': { finger: 'pinky', hand: 'right' }, '|': { finger: 'pinky', hand: 'right' },
    'backspace': { finger: 'pinky', hand: 'right' }, 'enter': { finger: 'pinky', hand: 'right' }, 'shiftright': { finger: 'pinky', hand: 'right' },
  
    'space': { finger: 'thumb', hand: 'left' },
};
  
export const FINGER_COLORS: {
  [key in Hand]: {
    [key in Finger]: { bg: string; border: string };
  };
} = {
  left: {
    pinky:  { bg: 'bg-pink-200',   border: 'border-pink-400' },
    ring:   { bg: 'bg-purple-200', border: 'border-purple-400' },
    middle: { bg: 'bg-yellow-200', border: 'border-yellow-400' },
    index:  { bg: 'bg-blue-200',   border: 'border-blue-400' },
    thumb:  { bg: 'bg-gray-300',   border: 'border-gray-500' },
  },
  right: {
    pinky:  { bg: 'bg-pink-200',   border: 'border-pink-400' },
    ring:   { bg: 'bg-purple-200', border: 'border-purple-400' },
    middle: { bg: 'bg-yellow-200', border: 'border-yellow-400' },
    index:  { bg: 'bg-lime-200',   border: 'border-lime-400' },
    thumb:  { bg: 'bg-gray-300',   border: 'border-gray-500' },
  },
};
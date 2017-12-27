const UP = 'U';
const RIGHT = 'R';
const DOWN = 'D';
const LEFT = 'L';
const FRONT = 'F';
const BACK = 'B';

const FULL_CUBE_DIRECTIONS = [UP, RIGHT, DOWN, LEFT, FRONT, BACK];
const DODECAHEDRON_DIRECTIONS = [RIGHT, DOWN];
const DODECAHEDRON_END_DIRECTION = UP;

const CUBE = 'CUBE';
const DODECAHEDRON = 'DODECAHEDRON';

const puzzles = [
  {
    name: '2x2x2',
    type: CUBE,
    scrambleOptions: {
      directions: [UP, RIGHT, FRONT],
      extraLayers: 0,
      length: 9
    }
  },
  {
    name: '3x3x3',
    type: CUBE,
    scrambleOptions: {
      directions: FULL_CUBE_DIRECTIONS,
      extraLayers: 0,
      length: 25
    }
  },
  {
    name: '4x4x4',
    type: CUBE,
    scrambleOptions: {
      directions: FULL_CUBE_DIRECTIONS,
      extraLayers: 1,
      length: 40
    }
  },
  {
    name: '5x5x5',
    type: CUBE,
    scrambleOptions: {
      directions: FULL_CUBE_DIRECTIONS,
      extraLayers: 1,
      length: 60
    }
  },
  {
    name: '6x6x6',
    type: CUBE,
    scrambleOptions: {
      directions: FULL_CUBE_DIRECTIONS,
      extraLayers: 2,
      length: 80
    }
  },
  {
    name: '7x7x7',
    type: CUBE,
    scrambleOptions: {
      directions: FULL_CUBE_DIRECTIONS,
      extraLayers: 2,
      length: 90
    }
  },
  {
    name: 'megaminx',
    type: DODECAHEDRON,
    scrambleOptions: {
      directions: DODECAHEDRON_DIRECTIONS,
      endDirection: DODECAHEDRON_END_DIRECTION,
      lineLength: 11,
      lines: 7
    }
  },
  {
    name: 'kilominx',
    type: DODECAHEDRON,
    scrambleOptions: {
      directions: DODECAHEDRON_DIRECTIONS,
      endDirection: DODECAHEDRON_END_DIRECTION,
      lineLength: 11,
      lines: 7
    }
  },
  {
    name: 'skewb',
    type: CUBE,
    scrambleOptions: {
      directions: [RIGHT, LEFT, FRONT, BACK],
      extraLayers: 0,
      length: 25
    }
  }
];

const DEFAULT_PUZZLE = puzzles[1];

export default puzzles;
export { DODECAHEDRON, CUBE, DEFAULT_PUZZLE };

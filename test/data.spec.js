import {
  filterData,
  sortByName,
  sortByReverse,
  calcType,
} from "../src/data.js";

const pokemonsMock = [
  {
    name: "urso",
    type: ["fofo"],
    weaknesses: "mel",
  },
  {
    name: "morcego",
    type: ["caçador"],
    weaknesses: "sol",
  },
  {
    name: "gato",
    type: ["felino"],
    weaknesses: "lua",
  },
];

describe("filterData", () => {
  it("is a function", () => {
    expect(typeof filterData).toBe("function");
  });

  it("A função filterData retorna pokemons filtrados por tipo", () => {
    expect(filterData(pokemonsMock, "fofo", "type")).toEqual([
      { name: "urso", type: ["fofo"], weaknesses: "mel" },
    ]);
  });
});

describe("sortByName", () => {
  it("is a function", () => {
    expect(typeof sortByName).toBe("function");
  });

  it("A função sortByName retorna pokemons ordenados de A a Z", () => {
    expect(sortByName(pokemonsMock)).toEqual([
      {
        name: "gato",
        type: ["felino"],
        weaknesses: "lua",
      },
      {
        name: "morcego",
        type: ["caçador"],
        weaknesses: "sol",
      },
      {
        name: "urso",
        type: ["fofo"],
        weaknesses: "mel",
      },
    ]);
  });
});

describe("sortByReverse", () => {
  it("is a function", () => {
    expect(typeof sortByReverse).toBe("function");
  });

  it("A função sortByReverse retorna pokemons ordenados de Z a A", () => {
    expect(sortByReverse(pokemonsMock)).toEqual([
      {
        name: "urso",
        type: ["fofo"],
        weaknesses: "mel",
      },
      {
        name: "morcego",
        type: ["caçador"],
        weaknesses: "sol",
      },
      {
        name: "gato",
        type: ["felino"],
        weaknesses: "lua",
      },
    ]);
  });
});

describe("calcType", () => {
  it("is a function", () => {
    expect(typeof calcType).toBe("function");
  });

  it("A função calcType faz o cálculo agregado de % de pokemons de cada tipo", () => {
    expect(calcType(pokemonsMock, "fofo")).toEqual(33);
  });
});

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

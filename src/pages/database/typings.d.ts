declare namespace Database {
  export type Chara = {
    key: string;
    name: string;
  };

  export type Group = {
    key: string;
    charas: Chara[];
  };

  export type Condition = {
    id: string;
    value: string;
  };
}

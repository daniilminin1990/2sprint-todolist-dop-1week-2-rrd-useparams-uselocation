export const dataState: DataStateType = {
  pages:[
    {
      heading: 'Цикл while',
      about: 'While Имеет следующий синтаксис'
    },
    {
      heading: 'Цикл for',
      about: 'For Имеет следующий синтаксис'
    },
    {
      heading: 'Конструкция \"switch\"',
      about: '\"Switch\" Имеет следующий синтаксис'
    }
  ]
}

export type DataStateType = {
  pages: Array<PagesType>
}

export type PagesType = {
  heading: string,
  about: string
}
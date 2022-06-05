import mock from 'assets/jsons/mock.json'

export const getName = () => {
  const { names } = mock
  const index = Math.floor(Math.random() * names.length)
  return names[index]
}

export const getInfo = () => {
  const { infos } = mock
  const indexSize = 3 + Math.floor(Math.random() * 2)
  const indexSet = new Set<number>()
  while (indexSet.size !== indexSize) {
    const newIndex = Math.floor(Math.random() * infos.length)
    indexSet.add(newIndex)
  }
  const indexArr = Array.from(indexSet)
  return indexArr.map((index) => infos[index])
}

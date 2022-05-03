export const getThree = (pathname) => {
  let newArray = []
  const arrayPath = pathname.slice(1, pathname.length)?.split('/')
  for (
    let index = 0;
    index < pathname.slice(1, pathname.length)?.split('/')?.length;
    index++
  ) {
    if (newArray.length) {
      newArray = [`${[...newArray].shift()}/${arrayPath[index]}`, ...newArray]
    } else {
      newArray = [`/${arrayPath[index]}`, ...newArray]
    }
  }
  return newArray
}

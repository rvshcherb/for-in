export default function orderByProps(object, sort) {
  const customSort = [];
  const entries = Object.entries(object);

  const props = entries.map((element) => {
    const entriesObj = Object.create(null);
    Object.defineProperties(entriesObj, {
      key: {
        value: element[0],
        enumerable: true,
      },
      value: {
        value: element[1],
        enumerable: true,
      },
    });

    return entriesObj;
  });

  const alphabeticSortProps = props.sort((a, b) => (a.key > b.key ? 1 : -1));

  sort.forEach((element) => {
    customSort.push(props.find((prop) => prop.key === element));
  });

  return customSort.concat(alphabeticSortProps.filter((element) => !sort.includes(element.key)));
}

type Itens = any | [sm: any, lg: any, isDrag: any];

export function responsiveReturn(itens: Itens, isDrag?: boolean) {
  const _itens = Array.isArray(itens) ? itens : [itens];
  if (isDrag) {
    if (isNaN(+itens[itens.length - 1])) return itens[itens.length - 1];
    return `${itens[itens.length - 1]}px`;
  }

  return _itens
    .filter((i, index) => index !== 2)
    .map((item) => {
      if (isNaN(+item)) return item;
      return `${item}px`;
    });
  // return _itens.map((item) => (isNaN(+item) ? item : `${item}px`));
}

export function groessStaete(citys) {
  return citys.filter((city) => {
    return city.population >= 100000;
  });
}

export function kleinStaete(citys) {
  return citys.filter((city) => {
    return city.population < 100000;
  });
}

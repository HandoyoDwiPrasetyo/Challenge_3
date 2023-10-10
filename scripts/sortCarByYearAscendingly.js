function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini

  // == Method 1 ==
  // function sortByYearAsc(a, b) {
  //   return a.year - b.year;
  // }

  // result.sort(sortByYearAsc);

  // == Method 2 ==
  var len = result.length;
  var swap;

  do {
    swap = false;

    for (var i = 0; i < len - 1; i++) {
      if (result[i].year > result[i + 1].year) {
        var temp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap);

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}

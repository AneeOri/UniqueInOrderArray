import "./styles.css";

export default function App() {
  function eliminatesRepeted() {
    let cadena = "AAAABBBCCDAABBB";
    // let cadena = 'ABBCcAD';
    let uniques = [];
    if (!Array.isArray(cadena)) cadena = cadena.split("");

    cadena.map((a) => (uniques.includes(a) ? uniques : uniques.push(a)));
    // console.log(uniques);
  }

  let uniqueInOrder = function () {
    let iterable = "AAAABBBCCDAABBB";
    let uniques = [];
    if (!Array.isArray(iterable)) iterable = iterable.split("");

    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] === iterable[i + 1]) {
      } else uniques.push(iterable[i]);
    }

    return uniques;
  };

  let uniqueInOrder2 = function () {
    let iterable = "AAAABBBCCDAABBB";
    return [...iterable].filter((a, i) => a !== iterable[i - 1]);
  };

  let uniqueInOrder3 = function () {
    let iterable = "AAAABBBCCDAABBB";
    return [].filter.call(iterable, function (a, i) {
      return iterable[i - 1] !== a;
    });
  };

  let uniqueInOrder4 = function () {
    let iterable = "AAAABBBCCDAABBB";
    iterable = typeof iterable === "string" ? iterable.split("") : iterable;
    return iterable.filter(function (e, i, arr) {
      return e !== arr[i - 1];
    });
  };

  uniqueInOrder();

  return (
    <div className="App">
      <input />
    </div>
  );
}

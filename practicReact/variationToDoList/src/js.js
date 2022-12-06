function test() {
  // все что связано с react лучше не искать, а писать функицонал через react
  const btn = document.querySelector(".search-panel");
  console.log(btn);

  document.addEventListener("click", (e) => {
    console.dir(e.target);
  });
}

export default test;

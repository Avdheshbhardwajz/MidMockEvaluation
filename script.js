let searchbtn = document.querySelector(".search");
let itemsbox = document.querySelector(".items");
let prevbtn = document.querySelector(".prev");
let nextbtn = document.querySelector(".next");
let departmentvalue = "";
let gendervalue = "";
let salaryvalue = "";
let pagevalue = 10;
let pagenumber = 1;

prevbtn.addEventListener("click", function () {
  pagenumber <= 1 ? undefined : pagenumber--;
  fetchdata(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pagenumber}&limit=${pagevalue}${
      departmentvalue
        ? `&filterBy=department&filterValue=${departmentvalue}`
        : ""
    }${gendervalue ? `&filterBy=gender&filterValue=female` : ""}${
      salaryvalue ? `&sort=salary&order=asc` : ""
    }`
  );
});

nextbtn.addEventListener("click", function () {
  pagenumber > 10 ? undefined : pagenumber++;
  fetchdata(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pagenumber}&limit=${pagevalue}${
      departmentvalue
        ? `&filterBy=department&filterValue=${departmentvalue}`
        : ""
    }${gendervalue ? `&filterBy=gender&filterValue=female` : ""}${
      salaryvalue ? `&sort=salary&order=asc` : ""
    }`
  );
});

fetchdata(
  `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pagenumber}&limit=${pagevalue}`
);

let department = document.querySelector("#department");

department.addEventListener("change", function () {
  departmentvalue = department.value;
  fetchdata(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pagenumber}&limit=${pagevalue}${
      departmentvalue
        ? `&filterBy=department&filterValue=${departmentvalue}`
        : ""
    }${gendervalue ? `&filterBy=gender&filterValue=female` : ""}${
      salaryvalue ? `&sort=salary&order=asc` : ""
    }`
  );
});

let gender = document.querySelector("#gender");

gender.addEventListener("change", function () {
  gendervalue = gender.value;
  console.log(gendervalue);
  fetchdata(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pagenumber}&limit=${pagevalue}${
      departmentvalue
        ? `&filterBy=department&filterValue=${departmentvalue}`
        : ""
    }${gendervalue ? `&filterBy=gender&filterValue=female` : ""}${
      salaryvalue ? `&sort=salary&order=asc` : ""
    }`
  );
});

let salary = document.querySelector("#salary");

salary.addEventListener("change", function () {
  salaryvalue = salary.value;
  fetchdata(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${pagenumber}&limit=${pagevalue}${
      departmentvalue
        ? `&filterBy=department&filterValue=${departmentvalue}`
        : ""
    }${gendervalue ? `&filterBy=gender&filterValue=female` : ""}${
      salaryvalue ? `&sort=salary&order=asc` : ""
    }`
  );
});

function showdata(daata) {
  itemsbox.innerHTML = " ";
  daata.data.forEach((ele) => {
    let item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
        <h3>${ele.id}</h3>
        <h3>${ele.name}</h3>
        <h3>${ele.gender}</h3>
        <h3>${ele.department}</h3>
        <h3>${ele.salary}</h3>`;
    itemsbox.appendChild(item);
  });
}

async function fetchdata(url) {
  let response = await fetch(url);

  let data = await response.json();
  console.log(data);

  showdata(data);
}

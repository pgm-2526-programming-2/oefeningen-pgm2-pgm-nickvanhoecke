// oproepen van zijn eigen functie

let amountOfMessages = 0;

function showMessage() {
  console.log("Hoi!");

  amountOfMessages = amountOfMessages + 1;

  if (amountOfMessages === 10) return;

  showMessage();
}

showMessage();




// Use cases? Menu met submenus met submenus ... etc Tree => lijst

const menu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: "Explore",
    path: "/explore",
    subPages: [
      {
        name: "Awards",
        path: "/awards",
        subPages: [
          {
            name: "Nominees",
            path: "/nominees",
          },
          {
            name: "Sites of the day",
            path: "/sotd",
          },
        ],
      },
      {
        name: "Blog",
        path: "blog",
      },
    ],
  },
];

function showItem(item) {
    console.log(`name: ${item.name} --${item.path}`);
}

function showMenuWIthRecursion(list) {
    for (const item of list) {
        showItem(item);

        if (item.subPages) {
            showMenuWIthRecursion(item.subPages);
        }
    }
}

showMenuWIthRecursion(menu)

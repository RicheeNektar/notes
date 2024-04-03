const status = ['done', 'recall', 'connected', 'd2d'];

const names = ['John Doe', 'Joe Bee', 'Joe Lee', 'Dabee Lee'];

const description = [
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
  'Lorem ipsum dolor sit amet,',
];

const generated = [];
const now = new Date();

for (let i = 0; i < 555; i++) {
  generated.push({
    customer: Math.floor(Math.random() * 999999999),
    description: description[Math.floor(Math.random() * description.length)],
    status: status[Math.floor(Math.random() * status.length)],
    phone: `+${Math.floor(Math.random() * 50)} ${Math.floor(
      Math.random() * 999999999
    )}`,
    createdAt: new Date(
      now.getFullYear(),
      now.getMonth() - Math.floor(Math.random() * 6),
      now.getDate() - Math.floor(Math.random() * 30)
    ),
  });
}

console.log(
  `localStorage.setItem('data', '${btoa(
    unescape(
      encodeURIComponent(
        JSON.stringify({
          Tickets: {
            tickets: generated,
          },
        })
      )
    )
  )}');`
);

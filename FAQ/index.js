const dataArray= [
  {
    title: 'Why JavaScript?',
    details: 'orem ipsum dolor sit amet consectetur adipisicing elit Laboriosam quae voluptate explicabo quis ea amet quisquam Suscipit, quae tempore? Quam ipsa ipsam ex quia rem fuga temporibus ducimus consequuntur similique'
  },
  {
    title: 'How to start learning JavaScript?',
    details: 'orem ipsum dolor sit amet consectetur adipisicing elit Laboriosam quae voluptate explicabo quis ea amet quisquam Suscipit, quae tempore? Quam ipsa ipsam ex quia rem fuga temporibus ducimus consequuntur similique'
  },
   {
    title: 'Advantages and Disadvantages of JS',
    details: 'orem ipsum dolor sit amet consectetur adipisicing elit Laboriosam quae voluptate explicabo quis ea amet quisquam Suscipit, quae tempore? Quam ipsa ipsam ex quia rem fuga temporibus ducimus consequuntur similique'
  },
];

const makeHTML = data =>{
  return `<details>
    <summary>${data.title}</summary>
    <p>${data.details}</p>
  </details>`
};

// if putting in to just the body
// document.body.innerHTML = dataArray.map(dataItem => makeHTML(dataItem)).join('')

const faqContainer= document.getElementById('faq-container');

faqContainer.innerHTML = dataArray.map(dataItem => makeHTML(dataItem)).join('')


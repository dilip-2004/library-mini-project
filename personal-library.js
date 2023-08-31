let library=[
  {
    title:'atomic habit',
    author:'dilip',
    yearPublished:'2000',
    readStatus:'',
    getSummary:()=>{

    },
    toggleReadStatus:()=>{
  
    }
  },
  {
    title:'Making India Awesome',
    author:'Chetan Bhagat',
    yearPublished:'1978',
    readStatus:'',
    getSummary:()=>{
  
    },
    toggleReadStatus:()=>{
  
    }
  },
  {
    title:'One Indian Girl',
    author:'Chetan Bhagat',
    yearPublished:'1999',
    readStatus:'',
    getSummary:()=>{
  
    },
    toggleReadStatus:()=>{
  
    }
  },
  {
    title:'Naked Triangle',
    author:'Balwant Gargi',
    yearPublished:'2004',
    readStatus:'',
    getSummary:()=>{
  
    },
    toggleReadStatus:()=>{
  
    }
  },
  {
    title:'A Million Mutinies Now ',
    author:'V.S.Naipaul',
    yearPublished:'2013',
    readStatus:'',
    getSummary:()=>{
  
    },
    toggleReadStatus:()=>{
  
    }
  },
  {
    title:'A Bend in the River ',
    author:'V.S.Naipaul',
    yearPublished:'1987',
    readStatus:'',
    getSummary:()=>{
  
    },
    toggleReadStatus:()=>{
  
    }
  },
  {
    title:'A Brush with Life ',
    author:'Satish Gujral',
    yearPublished:'1989',
    readStatus:'',
    getSummary:()=>{
  
    },
    toggleReadStatus:()=>{
  
    }
  },
  {
    title:'A Passage to England ',
    author:'Nirad C.Chaudhuri',
    yearPublished:'1997',
    readStatus:'',
    getSummary:()=>{
  
    },
    toggleReadStatus:()=>{
  
    }
  },
  {
    title:'A House for Mr. Biswas ',
    author:'V.S.Naipaul',
    yearPublished:'1993',
    readStatus:'',
    getSummary:()=>{
  
    },
    toggleReadStatus:()=>{
  
    }
  },
  {
    title:'A Prisoner’s Scrapbook ',
    author:'L.K.Advani',
    yearPublished:'2020',
    readStatus:'',
    getSummary:()=>{
  
    },
    toggleReadStatus:()=>{
  
    }
  },
];
let arr,i;
let htmlcode='';
let yourBookListHtmlCode='';
let yourBookList=[];
let index=0;
let indexBalance=0;
const inputObj={
  title:'',
  author:'',
  yearpublished:'',
  summary:'',
};
showAllBook();

function showAllBook()
{
  htmlcode='';
  for(i=0;i<4;i++)
  {
  let book=library[i];
  htmlcode+=`<div class="inner-book">
    <h4>book name: ${book.title}</h4><br>
    <h5>book author: ${book.author}</h5><br>
    <h5>year published: ${book.yearPublished}</h5><br>
    <button>show book summary</button>
    <button class="add-book" style="float:right;">Add</button>
    </div>`;
    index++;
  }
  indexBalance=library.length-index
  document.querySelector('.book-list').innerHTML=htmlcode;
}

function operation()
{
  htmlcode='';
  for(i=0;i<library.length;i++)
  {
  let book=library[i];
  htmlcode+=`<div class="inner-book">
    <h4>book name: ${book.title}</h4><br>
    <h5>book author: ${book.author}</h5><br>
    <h5>year published: ${book.yearPublished}</h5><br>
    <button>show book summary</button>
    <button class="add-book" style="float:right;">Add</button>
    </div>`;
    index++;
  }
  indexBalance=library.length-index;
  document.querySelector('.book-list').innerHTML=htmlcode;
}
// 
function show()
{
  let searchInput=document.getElementById('search-input').value;
  htmlcode='';
  for(i=0;i<library.length;i++)
  {
    let book=library[i];
    if(searchInput===book.author)
    {
      htmlcode+=`<div class="inner-book">
      <h4>book name: ${book.title}</h4><br>
      <h5>book author: ${book.author}</h5><br>
      <h5>year published: ${book.yearPublished}</h5><br>
      <button>show book summary</button>
      <button class="add-book" style="float:right;">Add</button>
      </div>`;
    }
  }
  document.querySelector('.book-list').innerHTML=htmlcode;
  document.querySelectorAll('.add-book').forEach
  ((element,elementIndex) => {
    element.addEventListener('click',()=>
    {
      yourBookListHtmlCode+=`<li>${library[elementIndex].title}</li>`
      document.querySelector('.your-book-list').innerHTML=yourBookListHtmlCode;
    });
});
}
// 
function eventoption(event)
{
  let searchInput=document.getElementById('search-input').value;
  if(event.key==='Enter')
  {
    show();
  }
  if(searchInput==='')
  {
    showAllBook();
  }
}
// 
function showMore()
{
  if(indexBalance>4)
  {
    for(i=index;i<index+4;i++)
    {
      book=library[i];
      htmlcode+=`<div class="inner-book">
      <h4>book name: ${book.title}</h4><br>
      <h5>book author: ${book.author}</h5><br>
      <h5>year published: ${book.yearPublished}</h5><br>
      <button>show book summary</button>
      <button class="add-book" style="float:right;">Add</button>
      </div>`;
    }
    document.querySelector('.book-list').innerHTML=htmlcode;
    index=i;
    indexBalance=library.length-index;
  }
  else if(indexBalance<4)
  {
    for(i=index;i<library.length;i++)
    {
      book=library[i];
      htmlcode+=`<div class="inner-book">
      <h4>book name: ${book.title}</h4><br>
      <h5>book author: ${book.author}</h5><br>
      <h5>year published: ${book.yearPublished}</h5><br>
      <button>show book summary</button>
      <button class="add-book" style="float:right;">Add</button>
      </div>`;
    }
    document.querySelector('.book-list').innerHTML=htmlcode;
    index=i;
    indexBalance=0;
  }
  document.querySelectorAll('.add-book').forEach
  ((element,elementIndex) => {
    element.addEventListener('click',()=>
    {
        console.log(elementIndex);
        yourBookListHtmlCode+=`<li>${library[elementIndex].title}</li>`
        document.querySelector('.your-book-list').innerHTML=yourBookListHtmlCode;
    });
});
}
// 
  document.querySelectorAll('.add-book').forEach
    ((element,elementIndex) => {
      element.addEventListener('click',()=>
      {
          console.log(elementIndex);
          yourBookListHtmlCode+=`<li>${library[elementIndex].title}</li>`
          document.querySelector('.your-book-list').innerHTML=yourBookListHtmlCode;
      });
    
  });
  let innerword='';
  function addbookform()
  {
    innerword=document.querySelector('.addbook-button').innerHTML;
    if(innerword==='addbook')
    {
      document.querySelector('.addBookForm').classList.add('showform');
      document.querySelector('.addbook-button').innerHTML='close';
      document.querySelector('.addbook-button').style.color='darkgreen';
    }
    else if(innerword==='close')
    {
      document.querySelector('.addBookForm').classList.remove('showform');
      document.querySelector('.addbook-button').innerHTML='addbook';
      document.querySelector('.addbook-button').style.color='black';
    }
    
  }

  function addBook()
  {
      inputObj.title=document.getElementById('title').value;
      inputObj.author=document.getElementById('author').value;
      inputObj.yearpublished=document.getElementById('year').value;
      inputObj.summary=document.getElementById('summary').value;
      library.push({title:inputObj.title,author:inputObj.author,yearPublished:inputObj.yearpublished,getSummary:()=>
      {
        return inputObj.summary;
      },
    });
    indexBalance++;
    document.querySelector('.addBookForm').classList.remove('showform');
    document.querySelector('.addbook-button').innerHTML='addbook';
    document.querySelector('.addbook-button').style.color='black';
  }

function removeBook()
{
    library.pop();
    operation();
}

function addBookToFront()
{
  inputObj.title=document.getElementById('title').value;
  inputObj.author=document.getElementById('author').value;
  inputObj.yearpublished=document.getElementById('year').value;
  inputObj.summary=document.getElementById('summary').value;
  library.unshift({title:inputObj.title,author:inputObj.author,yearPublished:inputObj.yearpublished,getSummary:()=>
  {
    return inputObj.summary;
  },
});
operation();
}

function addBookToLast()
{

}
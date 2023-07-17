import './App.css';

function AppJSX() {
  const name = '앨리';
  const list = ['우유', '딸기', '바나나', '요거트'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {
          // list.map((item) => (
          //   <li>{item}</li>
          // ))

          // list.map((item) => { return <li>{item}</li>})
          
          // 화살표 함수
          list.map(function(item) {
            return <li>{item}</li>;
          })
        }
      </ul>
      <img
      style={{width: '200px', height: '200px'}}
        src='https://images.unsplash.com/photo-1525431836161-e40d6846e656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fCVFRCU4QyU4QyVFQiU4RiU4NHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
        alt=''
      />
    </>
    
  );
}

export default AppJSX;

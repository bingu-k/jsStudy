import { useState } from 'react';
import './App.css';

function App (){
  let [post, setPost] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(-1);
  let [inputVal, setInputVal] = useState('');

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>React Blog</h4>
      </div>
      {
        post.map(function(str, idx){
          return (
            <div className='list' key={idx}>
              <h4 onClick={() => { modal === idx ? setModal(-1) : setModal(idx) }}>{ str }
                <span onClick={(e) => {
                  e.stopPropagation();
                  let copyLike = [...like];
                  copyLike[idx] += 1;
                  setLike(copyLike);
                }}> 👍
                </span>{ like[idx] }
              </h4>
              <p> 2월 {idx + 1}일 발행 </p>
              <button onClick={() => {
                  let copyPost = [...post];
                  copyPost.splice(idx, 1);
                  setPost(copyPost);
                  let copyLike = [...like];
                  copyLike.splice(idx, 1);
                  setLike(copyLike);
                }}
                > 삭제
              </button>
            </div>
          )
        })
      }
      <input onChange={(e) => { setInputVal(e.target.value) }}>
      </input>
      <button onClick={() => {
          let copyPost = [...post];
          copyPost.unshift(inputVal);
          setPost(copyPost);
          let copyLike = [...like];
          copyLike.unshift(0);
          setLike(copyLike);
        }}> 글추가
      </button>
      {
        modal !== -1 ? <Modal post={post} setPost={setPost} idx={modal}/> : null
      }
    </div>
  )
}

function Modal(props){
  return (
    <div className="modal">
      <h4>{ props.post[props.idx] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copyPost = [...props.post];
        copyPost[props.idx] = "여자코트 추천";
        props.setPost(copyPost);
        }}>Edit</button>
    </div>
  )
}

export default App;

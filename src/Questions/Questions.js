import React, { useState } from 'react';
import styled from 'styled-components'
import data from './data';
import Question from './Question';

function Questions() {
  const [questions, setQestions] = useState(data);

  return (
    <Wrapper>
      <main>
        <div className="container">
          <h3> 무엇이든 <br/> 물어보살 </h3>
          <section className="info">
            {questions.map((question)=> {
              return <Question key={question.id} {...question}/>
            })}
          </section>
        </div>
      </main>  
  </Wrapper>
    )
}

const Wrapper = styled.section `
main {
  background-color: #f6f5f5;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

h3 {
  font-family: 'Do Hyeon', sans-serif;
}

.container {
  width: 90vw;
  margin: 5rem auto;
  background: white;
  border-radius: 0.25rem;
  padding: 2.5rem 2rem;
  max-width: 920px;
  display: grid;
  gap: 1rem 2rem;
}
.container h3 {
  line-height: 1.2;
  font-weight: 500;
}
@media screen and (min-width: 992px) {
  .container {
    display: grid;
    grid-template-columns: 250px 1fr;
  }
}
.question {
  padding: 1rem 1.5rem;
  border: 2px solid #eae6eb;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
.question h4 {
  text-transform: none;
  line-height: 1.5;
}
.question p {
  margin-bottom: 0;
  margin-top: 0.5rem;
}
.question header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.question header h4 {
  margin-bottom: 0;
}
.btn {
  background: transparent;
  border-color: transparent;
  width: 2rem;
  height: 2rem;
  background: var(--clr-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 1rem;
  align-self: center;
  min-width: 2rem;
}
`

export default Questions;

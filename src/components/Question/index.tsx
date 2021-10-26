import { ReactNode } from 'react';
import cx from 'classnames';

import { QuestionDiv, UserInfo } from './styles';

type QuestionProps = {
  content: string,
  author: {
    name: string,
    avatar: string,
  },
  children?: ReactNode,
  isAnswered?: boolean,
  isHighlighted?: boolean,
}

export function Question({ content, author, children, isAnswered = false, isHighlighted = false }: QuestionProps) {
  return (
    // <div className={`question ${isAnswered ? 'answered' : ''} ${isHighlighted ? 'highlighted' : ''}`}>
    <QuestionDiv className={cx(
      'question',
      { answered: isAnswered },
      { highlighted: isHighlighted && !isAnswered },
    )}>
      <p>{`${content.substring(0, 170)}...`}</p>

      <footer>
        {/* <div className="user-info"> */}
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        {/* </div> */}

        <div>
          {children}
        </div>
      </footer>
    </QuestionDiv>
  )
}
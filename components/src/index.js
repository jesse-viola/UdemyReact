import React from 'react';
import ReactDOM from 'react-dom';
import { CommentDetail } from './CommentDetail';
import ApprovalCard from './ApprovalCard';

/**
 * This is using the CDN libraries, I couldn't get this to install on npm so I have to call it using window.
 * faker just generates fake data check out the documentation at-- https://github.com/marak/Faker.js/
 */
const faker = window.faker;

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
          <CommentDetail 
            author="Sam"
            date="Today at 4pm"
            text="This is my post!"
            avatar={faker.image.avatar()}
          />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author="Jane"
          date="Today at 9pm"
          text="I'm a loser"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail 
          author="Bane"
          date="Today at 5pm"
          text="ya ye ar"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

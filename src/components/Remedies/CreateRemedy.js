import { api } from 'chat-api';

function CreateRemedy(remedy) {
  // Quick hack to create some data in db...
  // TODO: Create a user form to enter this stuff in

  // remedy = remedy || {
  //   title: 'Run the Bases',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  //   prerequisite: '',
  //   itemTitle: 'RUN',
  //   itemImageUrl: 'badge',
  // };

  // remedy = remedy || {
  //   title: 'Autographed Baseball',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  //   prerequisite: '',
  //   itemTitle: 'ABB',
  //   itemImageUrl: 'badge',
  // };

  // remedy = remedy || {
  //   title: 'Autographed Bat',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  //   prerequisite: '',
  //   itemTitle: 'AB',
  //   itemImageUrl: 'badge',
  // };

  // remedy = remedy || {
  //   title: 'Concert Field Access',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  //   prerequisite: '',
  //   itemTitle: 'CFA',
  //   itemImageUrl: 'badge',
  // };

  // remedy = remedy || {
  //   title: 'Concert Backstage Access',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  //   prerequisite: '',
  //   itemTitle: 'CBA',
  //   itemImageUrl: 'badge',
  // };

  // remedy = remedy || {
  //   title: 'Box Seats',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  //   prerequisite: '',
  //   itemTitle: 'BOX',
  //   itemImageUrl: 'badge',
  // };

  if (remedy) {
    api.pushRemedy(remedy);
  }
}

export default CreateRemedy;

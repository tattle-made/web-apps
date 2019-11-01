import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import SearchInput from '../src/components/atomic/search-input'
import Footer from '../src/components/footer'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Search Input', module)
.add('neutral', () => {
  return <SearchInput onSearchPressed={()=>1}/>
})
.add('loading', ()=> <SearchInput state='loading'/>)
;    

storiesOf('Structure | Footer', module)
.add('normal', ()=> <Footer></Footer>)


//Structure for layout components
//Atomic for smallest components
//Molecules for tattle specific 
//Partners for two or three molecules that talk to each other